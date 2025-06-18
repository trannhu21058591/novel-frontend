import { Star, ChevronLeft, ChevronRight, Bookmark, Home } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NovelService from "../services/NovelService";
import type { Chapter } from "../Models/Chapter";

const ChapterNavbar = () => {
    const { novelId, chapterId } = useParams();
    const navigate = useNavigate();
    const currentChapter = Number(chapterId);
    const [chapters, setChapters] = useState<Chapter[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchChapters = async () => {
            if (!novelId) return;
            try {
                const novel = await NovelService.getNovelById(novelId);
                if (novel.chapters) {
                    setChapters(novel.chapters);
                }
            } catch (error) {
                console.error('Failed to fetch chapters:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchChapters();
    }, [novelId]);

    const handleChapterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newChapterId = e.target.value;
        navigate(`/novel/${novelId}/chapter/${newChapterId}`);
    };

    const handlePrevChapter = () => {
        if (currentChapter > 1) {
            navigate(`/novel/${novelId}/chapter/${currentChapter - 1}`);
        }
    };

    const handleNextChapter = () => {
        if (currentChapter < chapters.length) {
            navigate(`/novel/${novelId}/chapter/${currentChapter + 1}`);
        }
    };

    return (
        <nav className="chapter-navbar fixed top-16 left-0 w-full bg-white border-b border-b-gray-200 z-20 h-14 shadow-sm">
            <div className="max-w-7xl mx-auto flex h-full justify-between items-stretch">
                {/* Chapter Navigation */}
                <div className="flex items-center gap-4 px-6">
                    <Link 
                        to={`/novel/${novelId}`}
                        className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-blue-600"
                    >
                        <Home className="w-5 h-5" />
                    </Link>

                    <button 
                        onClick={handlePrevChapter}
                        className={`p-2 hover:bg-gray-100 rounded-full ${currentChapter <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentChapter <= 1}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <select 
                        value={currentChapter}
                        onChange={handleChapterChange}
                        className="w-[300px] px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    >
                        {chapters.map((chapter) => (
                            <option key={chapter.id} value={chapter.chapterNumber}>
                                {chapter.title}
                            </option>
                        ))}
                    </select>
                    
                    <button 
                        onClick={handleNextChapter}
                        className={`p-2 hover:bg-gray-100 rounded-full ${currentChapter >= chapters.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentChapter >= chapters.length}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-6 px-6">
                    <button className="hover:cursor-pointer flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <Bookmark className="w-5 h-5" />
                        <span>Lưu</span>
                    </button>
                    
                    <button className="hover:cursor-pointer flex items-center gap-1 text-gray-600 hover:text-yellow-500">
                        <Star className="w-5 h-5" />
                        <span>Bình chọn</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default ChapterNavbar;
