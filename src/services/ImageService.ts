import type { Image } from '../Models/Image';

const API_URL = 'http://localhost:8080/api';

export default class ImageService {
    static async getImageById(id: number): Promise<Image> {
        try {
            const response = await fetch(`${API_URL}/images/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch image: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Error fetching image:', error);
            throw error;
        }
    }

    static getImageUrl(image: Image | null): string {
        if (!image || !image.data) {
            return '/images/no-image.png'; // Placeholder image in public folder
        }
        return `data:image/jpeg;base64,${image.data}`;
    }
} 