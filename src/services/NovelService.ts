import type { Novel } from '../Models/Novel';
import type { ChapterContent } from '../Models/ChapterContent';

// Using the full URL since we're getting 404 from the proxy
const API_URL = 'http://localhost:8080/api';

export default class NovelService {
    static async getAllNovels(): Promise<Novel[]> {
        try {
            console.log('Attempting to fetch from:', `${API_URL}/novels`);
            
            const response = await fetch(`${API_URL}/novels`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', Object.fromEntries(response.headers.entries()));

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                console.error('Error response:', errorData);
                
                if (response.status === 404) {
                    throw new Error('API endpoint not found. Please check if the backend controller is properly configured with @RestController and @RequestMapping("/api").');
                }
                
                throw new Error(
                    errorData?.message || 
                    `HTTP error! status: ${response.status}`
                );
            }

            const data = await response.json();
            console.log('Received data:', data);
            
            if (!Array.isArray(data)) {
                throw new Error('Invalid response format: expected an array of novels');
            }
            
            return data;
        } catch (error) {
            console.error('Error details:', error instanceof Error ? {
                name: error.name,
                message: error.message,
                stack: error.stack
            } : error);
            
            if (error instanceof Error) {
                if (error.message.includes('Failed to fetch')) {
                    throw new Error('Cannot connect to the server. Please check if the server is running and CORS is properly configured.');
                }
                throw new Error(`Failed to fetch novels: ${error.message}`);
            }
            throw new Error('Failed to fetch novels: Unknown error');
        }
    }

    static async getNovelById(id: string): Promise<Novel> {
        const response = await fetch(`${API_URL}/novels/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch novel');
        }
        return response.json();
    }

    static async getChapterContent(novelId: string, chapterId: string): Promise<ChapterContent> {
        try {
            const response = await fetch(`${API_URL}/novels/${novelId}/chapters/${chapterId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(
                    errorData?.message || 
                    `Failed to fetch chapter content: ${response.status}`
                );
            }

            return response.json();
        } catch (error) {
            console.error('Error fetching chapter content:', error);
            throw error;
        }
    }
} 