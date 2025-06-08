import { useEffect, useState } from 'react';
import type { Novel } from '../Models/Novel';
import NovelService from '../services/NovelService';
import { FaRegEye } from "react-icons/fa";
import { LiaLayerGroupSolid } from "react-icons/lia";

const formatNumber = (num: number): string => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return num.toString();
};

const formatNumberWithSeparator = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const NovelCard = () => {
    const [novels, setNovels] = useState<Novel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchNovels = async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await NovelService.getAllNovels();
            setNovels(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch novels');
            console.error('Error fetching novels:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNovels();
    }, []);

    if (loading) return (
        <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-600">Loading novels...</p>
        </div>
    );

    if (error) return (
        <div className="text-center text-red-500 p-4">
            <p>{error}</p>
            <button 
                onClick={fetchNovels}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Retry
            </button>
        </div>
    );

    return (
        <div className="novel-card p-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mx-auto w-fit">
                {novels.map((novel) => (
                    <div
                        key={novel.id}
                        className="h-[250px] w-[160px] flex flex-col items-center pb-2.5 rounded-lg hover:cursor-pointer bg-gray-100"
                    >
                        <img
                            src={novel.coverImageBase64 || '/images/no-image.png'}
                            alt={novel.title}
                            className="novel-cover h-[200px] w-full object-cover rounded-t-md"
                        />
                        <div className="novel-details mt-2 text-center w-[140px] flex flex-col gap-1.5">
                            <h2 className="font-semibold text-sm line-clamp-1 text-center">{novel.title}</h2>
                            <div className='flex flex-row items-center justify-between mt-1'>
                                <div className='flex flex-row gap-0.5 group relative'>
                                    <FaRegEye />
                                    <p className="text-xs text-gray-600" title={`${formatNumberWithSeparator(novel.totalViews)} lượt xem`}>
                                        {formatNumber(novel.totalViews)}
                                    </p>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {formatNumberWithSeparator(novel.totalViews)} lượt xem
                                    </div>
                                </div>
                                <div className='flex flex-row gap-0.5 group relative'>
                                    <LiaLayerGroupSolid />
                                    <p className="text-xs text-gray-600" title={`${formatNumberWithSeparator(novel.totalChapters)} chương`}>
                                        {novel.totalChapters}
                                    </p>
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        {formatNumberWithSeparator(novel.totalChapters)} chương
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
