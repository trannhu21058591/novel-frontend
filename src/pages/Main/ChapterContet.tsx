import ChapterNavbar from "../../components/ChapterNavbar";
import { Eye, Star, MessageSquare, X, SendHorizontal} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
}

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
  }

  .animate-slideIn {
    animation: slideIn 0.3s ease-out;
  }
`;

const ChapterContent = () => {
  const { novelId, chapterId } = useParams();
  const [activeCommentId, setActiveCommentId] = useState<number | null>(null);
  const [commentText, setCommentText] = useState("");

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activeCommentId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeCommentId]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [chapterId]); // Re-run when chapterId changes

  const paragraphs = [
    { id: 1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { id: 2, content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },
    { id: 3, content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo." },

    // ... other paragraphs
  ];

  // Sample comments with paragraphId
  const comments: (Comment & { paragraphId: number })[] = [
    {
      id: 1,
      paragraphId: 1,
      user: {
        name: "John Doe",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "This is a great paragraph! I really enjoyed reading it.",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      paragraphId: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "The writing style is very engaging.",
      timestamp: "1 hour ago"
    },
    
    {
      id: 3,
      paragraphId: 2,
      user: {
        name: "Mike Johnson",
        avatar: "https://i.pinimg.com/736x/51/da/29/51da291ac464f602dbae6bf8b9fff4c6.jpg"
      },
      content: "Interesting perspective!",
      timestamp: "30 minutes ago"
    }
  ];

  // Function to get comment count for a paragraph
  const getCommentCount = (paragraphId: number) => {
    return comments.filter(comment => comment.paragraphId === paragraphId).length;
  };

  // Function to auto-resize textarea
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    setCommentText(e.target.value);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      // Handle comment submission here
      setCommentText("");
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="chapter-content min-h-screen bg-gray-50 pb-10 pt-[130px]">
        <ChapterNavbar />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8">
            {/* Author Info Section - Left Side */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-32">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src="https://i.pinimg.com/736x/33/0b/7c/330b7cc61d6d8e52fb6fd28ac3ab75dd.jpg" 
                    alt="Author"
                    className="w-24 h-24 rounded-full object-cover mb-3"
                  />
                  <h3 className="font-semibold text-gray-800">Author Name</h3>
                  <div className="flex items-center gap-2">
                    <button className="hover:cursor-pointer bg-gray-200 text-gray-700 px-4 py-1 rounded-md mt-2 hover:bg-gray-300">Theo dõi</button>
                  
                  </div>
                  <div className="mt-4 w-full border-t border-gray-200 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Stories</p>
                        <p className="font-semibold">12</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Followers</p>
                        <p className="font-semibold">1.2k</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Right Side */}
            <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
              {/* Chapter Stats */}
              <div className="bg-white border-b border-gray-200 p-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Chapter Title</h1>
                <div className="flex items-center justify-center gap-6 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Eye className="w-5 h-5" />
                    <span>1.2k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5" />
                    <span>245</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="w-5 h-5" />
                    <span>89 </span>
                  </div>
                </div>
              </div>

              {/* Chapter Content */}
              <div className="bg-white p-4 ">
                {paragraphs.map((paragraph) => (
                  <div key={paragraph.id} className="group relative mb-4 select-none">
                    <p className="text-gray-700 leading-relaxed pr-8">
                      {paragraph.content}
                    </p>
                    <button 
                      onClick={() => setActiveCommentId(activeCommentId === paragraph.id ? null : paragraph.id)}
                      className={`hover:cursor-pointer absolute right-0 top-0 text-gray-500 ${
                        getCommentCount(paragraph.id) === 0 ? 'hover:cursor-pointer opacity-0 group-hover:opacity-100' : ''
                      }`}
                    >
                      <div className="relative">
                        <MessageSquare className="w-5 h-5" />
                        {getCommentCount(paragraph.id) > 0 && (
                          <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                            {getCommentCount(paragraph.id)}
                          </span>
                        )}
                      </div>
                    </button>
                  </div>
                ))}
                <div className="flex justify-center mt-9 w-full">
                  <Link 
                    to={`/novel/${novelId}/chapter/${Number(chapterId) + 1}`}
                    className="hover:cursor-pointer w-[50%] bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition-colors duration-200 text-center"
                    onClick={() => {
                      window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                      });
                    }}
                  >
                    Chương tiếp theo
                  </Link>
                </div>
              </div>
            </div>

            {/* Comments Modal with Overlay */}
            {activeCommentId && (
              <>
                {/* Overlay */}
                <div 
                  className="fixed inset-0 bg-gray-500/20 z-40 animate-fadeIn"
                  onClick={() => setActiveCommentId(null)}
                />
                
                {/* Modal */}
                <div className="fixed inset-y-0 right-0 w-130 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50 animate-slideIn">
                  <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="p-4 flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">Chapter 1</h3>
                      <button 
                        onClick={() => setActiveCommentId(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Selected Paragraph */}
                    <div className="p-4 bg-gray-100 select-none">
                      <p className="text-sm text-gray-600">
                        {paragraphs.find(p => p.id === activeCommentId)?.content}
                      </p>
                    </div>

                    {/* Comment Form */}
                    <div className="p-4 flex items-center justify-center">
                      <div className="flex gap-3 border border-gray-200 rounded-4xl items-center w-full max-w-2xl bg-white shadow-sm">
                        <div className="flex-1 pl-5">
                          <textarea 
                            value={commentText}
                            onChange={handleTextareaChange}
                            className="w-full py-3 focus:outline-none resize-none text-gray-700 placeholder-gray-400 overflow-hidden"
                            placeholder="Write a comment..."
                            rows={1}
                          />
                        </div>
                        <button 
                          onClick={handleComment}
                          className="hover:cursor-pointer m-2 p-2.5 bg-gray-400 text-white rounded-full hover:bg-gray-600 items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed flex"
                        >
                          <SendHorizontal className="w-5 h-5" /> 
                        </button>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="flex-1 overflow-y-auto p-4">
                      {comments
                        .filter(comment => comment.paragraphId === activeCommentId)
                        .map((comment) => (
                          <div key={comment.id} className="mb-4">
                            <div className="flex gap-2">
                              <img 
                                src={comment.user.avatar} 
                                alt={comment.user.name}
                                className="w-8 h-8 rounded-full"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-gray-800 text-[14px]">{comment.user.name}</span>
                                  <span className="text-sm text-gray-500 text-[12px]">{comment.timestamp}</span>
                                </div>
                                <p className="text-gray-700 mt-1 text-[14px]">{comment.content}</p>
                                <div className="flex items-center gap-2 mt-1 text-gray-500 text-xs">
                                  <span className="hover:cursor-pointer hover:text-blue-500">Reply</span>
                                  <span className="hover:cursor-pointer hover:text-blue-500">Like</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChapterContent;