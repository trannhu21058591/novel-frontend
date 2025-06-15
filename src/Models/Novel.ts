import type { Chapter } from "./Chapter";
import { NovelStatus } from "../enums/NovelStatus";

export interface Novel {
    id: number;
    title: string;
    description: string;
    deleted: boolean;
    status: NovelStatus;
    createdAt: string;

    // Author info
    authorId: number | null;
    authorName: string | null;

    // Cover image
    coverImageId: number | null;
    coverImageBase64: string | null;

    // Tags
    tags: string[];

    // Chapter info
    chapters: Chapter[] | null;
    totalViews: number;
    totalChapters: number;
} 