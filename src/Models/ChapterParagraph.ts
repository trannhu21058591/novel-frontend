import type { ChapterComment } from "./ChapterComment";

export interface ChapterParagraph {
    id: number;
    content: string;
    paragraphIndex: number;
    comments: ChapterComment[];
} 