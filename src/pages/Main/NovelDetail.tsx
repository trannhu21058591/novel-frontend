import "../../App.css";
import {formatNumberWithSeparator, formatNumber} from "../../utils/numberUtils";
import { BookOpen, Star, List, Eye, Plus } from "lucide-react"; // Sử dụng icon đẹp

const NovelDetail = () => {
  return (
    <div className="novel-detail w-full py-2 bg-white">
      {/* Wrapper nội dung căng giữa, có độ rộng tối đa */}
      <div className="w-full flex gap-6 items-center justify-center">
        {/* Ảnh truyện */}
        <div className="w-[190px] h-[270px] rounded-lg overflow-hidden border border-gray-200">
          <img
            src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg"
            alt="Novel Cover"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Thông tin truyện */}
        <div className="flex flex-col justify-between w-[400px] gap-4">
          <p className="text-3xl font-bold text-gray-900 mb-4 line-clamp-2 break-words">
            [EDIT - Hoàn] Chủ Tịch Đang Viết Chữ Đây Này!! - Tên tác giả cứ để ở đây điiiii
          </p>
          <div className="grid grid-cols-3 text-gray-700">
            {/* Views Section with Tooltip */}
            <div className="flex flex-col items-center gap-1 border-r border-gray-200 pr-4 relative group">
              <div className="flex flex-row items-center gap-1">
                <Eye className="w-4 h-4 text-gray-500" />
                <span className="font-semibold text-gray-500">Lượt xem</span>
              </div>
              <span className="font-semibold">{formatNumber(36430)}</span>
              {/* Tooltip Container */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg whitespace-nowrap">
                {formatNumberWithSeparator(36430)} lượt xem
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>

            {/* Votes Section with Tooltip */}
            <div className="flex flex-col items-center gap-1 relative group">
              <div className="flex flex-row items-center gap-1">
                <Star className="w-4 h-4 text-gray-500" />
                <span className="font-semibold text-gray-500">Bình chọn</span>
              </div>
              <span className="font-semibold">{formatNumber(6400)}</span>
              {/* Tooltip Container */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg whitespace-nowrap">
                {formatNumberWithSeparator(6400)} lượt bình chọn
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>

            {/* Chapters Section with Tooltip */}
            <div className="flex flex-col items-center gap-1 border-l border-gray-200 pl-4 relative group">
              <div className="flex flex-row items-center gap-1">
                <List className="w-4 h-4 text-gray-500" />
                <span className="font-semibold text-gray-500">Chương</span>
              </div>
              <span className="font-semibold">{formatNumber(134)}</span>
              {/* Tooltip Container */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-lg whitespace-nowrap">
                {formatNumberWithSeparator(134)} chương
                {/* Tooltip Arrow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </div>

          {/* Nút Start reading */}
          <div className="mt-6 grid grid-cols-5 gap-0.5 w-full max-w-sm">
            <button className="hover:cursor-pointer col-span-4 bg-black text-white px-6 py-2 rounded-l-full flex items-center justify-center gap-2 hover:bg-gray-800 transition">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg p-0 m-0">Bắt đầu đọc</span>
            </button>
            <button className="hover:cursor-pointer col-span-1 bg-black text-white px-4 rounded-r-full text-xl flex justify-center items-center hover:bg-gray-800 transition ">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Phần thêm dưới nếu có */}
      <div className="w-full max-w-6xl mx-auto mt-6 px-4">
        dsd
      </div>
    </div>
  );
};


export default NovelDetail;
