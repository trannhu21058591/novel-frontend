

const NovelCard = () => {
    return (
        <div className="h-[200px] w-[200px] flex flex-col items-center rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img className="novel-cover h-[150px] w-[100px] object-cover rounded-md" />
            <div className="novel-details mt-2 text-center">
                <h2 className="font-semibold text-sm line-clamp-1">tên truyện</h2>
                <p className="text-xs text-gray-600">lượt xem</p>
            </div>
        </div>
    );
};

export default NovelCard;
