import "../../App.css";
import {formatNumberWithSeparator, formatNumber} from "../../utils/numberUtils";
import { BookOpen, Star, List, Eye, Plus } from "lucide-react"; // Sử dụng icon đẹp
import { Link, useParams } from "react-router-dom";
import YouMayLike from "../../components/YouMayLike";

const NovelDetail = () => {
  const { id } = useParams();

  return (
    <div className="novel-detail w-full py-2 bg-white">
      {/* Wrapper nội dung căng giữa, có độ rộng tối đa */}
      <div className="w-full flex gap-6 items-center justify-center pb-6 pt-[80px] border-b border-gray-200 shadow-sm">
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
            <div className="hover:cursor-pointer flex flex-col items-center gap-1 border-r border-gray-200 pr-4 relative group">
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
            <div className="hover:cursor-pointer flex flex-col items-center gap-1 relative group">
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
            <div className="hover:cursor-pointer flex flex-col items-center gap-1 border-l border-gray-200 pl-4 relative group">
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
            <button className="hover:cursor-pointer col-span-4 bg-black text-white px-6 py-2 rounded-l-full flex items-center justify-center gap-2 hover:bg-gray-700 transition">
              <BookOpen className="w-5 h-5" />
              <span className="text-lg p-0 m-0">Bắt đầu đọc</span>
            </button>
            <button className="hover:cursor-pointer col-span-1 bg-black text-white px-4 rounded-r-full text-xl flex justify-center items-center hover:bg-gray-700 transition ">
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Phần thêm dưới nếu có */}
      <div className="w-full max-w-6xl mx-auto my-6 px-14 grid grid-cols-3 gap-10">
        <div className="col-span-2">
            {/* Author Info */}
            <div className="flex flex-row items-center gap-3 mb-4">
                <div className="avatar-img w-8 h-8 rounded-full overflow-hidden">
                  <img 
                  src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg"
                  alt="Novel Cover"
                  className="w-full h-full object-cover"
                  />
                </div> 
                <p className="text-lg font-semibold text-gray-900 hover:cursor-pointer">Tác giả</p>
            </div>
            {/* Description */}
            <div className="mt-2">
                <p className="text-black text-[16px]  text-base leading-6">
                    Tác giả: Dương Trần Vi
                    <br />
                    Tình trạng: Hoàn thành
                    <br />
                    Thể loại: Nguyên sang, Bách hợp, Hiện đại , HE , Tình cảm , Ngọt sủng , Mỹ thực , Gương vỡ lại lành , Nhẹ nhàng , Hỗ công , Võng hồng
                    <br />
                    Tag: Gương vỡ lại lành Mỹ thực Ngọt văn Võng hồng
                    <br />
                    Từ khóa tìm kiếm: Vai chính: Cố Lương Thầm, Dư Ôn Thấm ┃ vai phụ: Giáp Ất Bính Đinh ┃ cái khác:
                </p>
            </div>
            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[14px] hover:cursor-pointer">Nguyên sang</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[14px] hover:cursor-pointer">Bách hợp</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[14px] hover:cursor-pointer">Hiện đại</span>
                <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-[14px] hover:cursor-pointer">HE</span>
            </div>
            {/* List Chapters */}
            <div className="mt-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Danh sách chương</h3>
                    <div className="flex items-center gap-2">
                        <input 
                            type="text" 
                            placeholder="Tìm chương..." 
                            className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <select className="px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <option value="newest">Mới nhất</option>
                            <option value="oldest">Cũ nhất</option>
                        </select>
                    </div>
                </div>
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                    <ul className="divide-y divide-gray-200">
                        <li className="hover:bg-gray-50 transition-colors duration-150">
                            <Link 
                                to={`/novel/${id}/chapter/1`} 
                                className="flex items-center justify-between px-4 py-3"
                            >
                                <span className="text-gray-900 font-medium">Chương 1. Khởi đầu</span>
                                <span className="text-sm text-gray-500">20/03/2024</span>
                            </Link> 
                        </li>
                        <li className="hover:bg-gray-50 transition-colors duration-150">
                            <Link 
                                to={`/novel/${id}/chapter/2`} 
                                className="flex items-center justify-between px-4 py-3"
                            >
                                <span className="text-gray-900 font-medium">Chương 2. Những bí mật</span>
                                <span className="text-sm text-gray-500">19/03/2024</span>
                            </Link>
                        </li>
                        <li className="hover:bg-gray-50 transition-colors duration-150">
                            <Link 
                                to={`/novel/${id}/chapter/3`} 
                                className="flex items-center justify-between px-4 py-3"
                            >
                                <span className="text-gray-900 font-medium">Chương 3. Cuộc gặp gỡ định mệnh</span>
                                <span className="text-sm text-gray-500">18/03/2024</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-span-1 space-y-5">
          {/*Author's Related Novels */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Các tác phẩm khác của Tác giả</h3>
            <div className="space-y-2">
              <div className="hover:cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors duration-150">
                <span className="text-gray-900 my-2 px-1.5">Tác phẩm 1</span>
              </div>
              <div className="hover:cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors duration-150">
                <span className="text-gray-900 my-2 px-1.5">Tác phẩm 2</span>
              </div>
              <div className="hover:cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors duration-150">
                <span className="text-gray-900 my-2 px-1.5">Tác phẩm 3</span>
              </div>
            </div>
            <div className="mt-4 w-full flex justify-center">
              <button className="hover:cursor-pointer w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-150">
                Xem thêm
              </button>
            </div>
          </div>

          {/* You May Like Section */}
          <YouMayLike />
        </div>
      </div>
    </div>
  );
};

export default NovelDetail;
