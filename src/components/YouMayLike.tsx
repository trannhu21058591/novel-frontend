import { List } from "lucide-react";
import '../App.css'
const YouMayLike = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Bạn có thể thích</h3>
      <div className="space-y-4">
        {/* Novel Item 1 */}
        <div className="hover:cursor-pointer w-full flex gap-3 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-150">
          <div className="w-[90px] h-[140px] rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
            <img
              src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg"
              alt="Novel Cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="mb-1 text-[16px] font-bold text-gray-900 line-clamp-1 break-words">
              [Đang Ra] Thiên Tài Y Học
            </p>
           
            <div className="flex items-center gap-1 mb-2">
              <List className="w-4 h-4 text-gray-500"/>
              <span className="text-[12px] text-gray-500">156 Chương</span>
            </div>
            <p className="text-[13px] text-gray-600 line-clamp-4">
              Hành trình của một thiên tài y học trẻ tuổi, đối mặt với những thách thức và bí ẩn trong ngành y. Trên con đường tìm các phương pháp y học đã gặp được người đi cùng mình đến suốt đời.
            </p>
          </div>
        </div>

        {/* Novel Item 2 */}
        <div className="hover:cursor-pointer w-full flex gap-3 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-150">
          <div className="w-[90px] h-[140px] rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
            <img
              src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg"
              alt="Novel Cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="mb-1 text-[16px] font-bold text-gray-900 line-clamp-1 break-words">
              [Đang Ra] Thiên Tài Y Học
            </p>
           
            <div className="flex items-center gap-1 mb-2">
              <List className="w-4 h-4 text-gray-500"/>
              <span className="text-[12px] text-gray-500">156 Chương</span>
            </div>
            <p className="text-[13px] text-gray-600 line-clamp-4">
              Hành trình của một thiên tài y học trẻ tuổi, đối mặt với những thách thức và bí ẩn trong ngành y. Trên con đường tìm các phương pháp y học đã gặp được người đi cùng mình đến suốt đời.
            </p>
          </div>
        </div>

        {/* Novel Item 3 */}
        <div className="hover:cursor-pointer w-full flex gap-3 hover:bg-gray-100 p-2 rounded-lg transition-colors duration-150">
          <div className="w-[90px] h-[140px] rounded-lg overflow-hidden border border-gray-200 flex-shrink-0">
            <img
              src="https://i.pinimg.com/736x/46/db/bb/46dbbbbcdfc877ec7dfeb64cfad7a2ba.jpg"
              alt="Novel Cover"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="mb-1 text-[16px] font-bold text-gray-900 line-clamp-1 break-words">
              [Đang Ra] Thiên Tài Y Học
            </p>
           
            <div className="flex items-center gap-1 mb-2">
              <List className="w-4 h-4 text-gray-500"/>
              <span className="text-[12px] text-gray-500">156 Chương</span>
            </div>
            <p className="text-[13px] text-gray-600 line-clamp-4">
              Hành trình của một thiên tài y học trẻ tuổi, đối mặt với những thách thức và bí ẩn trong ngành y. Trên con đường tìm các phương pháp y học đã gặp được người đi cùng mình đến suốt đời.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouMayLike; 