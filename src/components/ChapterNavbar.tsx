import { Star, ChevronLeft, ChevronRight, Bookmark } from "lucide-react";

const ChapterNavbar = () => {
    return (
        <nav className="chapter-navbar fixed top-16 left-0 w-full bg-white border-b border-b-gray-200 z-20 h-14 shadow-sm">
            <div className="max-w-7xl mx-auto flex h-full justify-between items-stretch">
                {/* Chapter Navigation */}
                <div className="flex items-center gap-4 px-6">
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <select className="w-[300px] px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="1">Chapter 1</option>
                        <option value="2">Chapter 2</option>
                        <option value="3">Chapter 3</option>
                        <option value="4">Chapter 4</option>
                        <option value="5">Chapter 5</option>
                    </select>
                    
                    <button className="p-2 hover:bg-gray-100 rounded-full">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-6 px-6">
                    <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
                        <Bookmark className="w-5 h-5" />
                        <span>Bookmark</span>
                    </button>
                    
                    <button className="flex items-center gap-1 text-gray-600 hover:text-yellow-500">
                        <Star className="w-5 h-5" />
                        <span>Vote</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default ChapterNavbar;
