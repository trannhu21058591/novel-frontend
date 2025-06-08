export interface Image {
    id: number;
    data: string; // Base64 encoded image data
    type: 'AVATAR' | 'COVER' | 'NOVEL_COVER';
    createdAt: string;
} 