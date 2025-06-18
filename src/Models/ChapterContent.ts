import type { ChapterParagraph } from "./ChapterParagraph";

export interface ChapterContent {
    id: number;
    title: string;
    content: string;
    chapterNumber: number;
    views: number;
    createdAt: string;
    novelId: number;
    novelTitle: string;
    paragraphs: ChapterParagraph[];
} 