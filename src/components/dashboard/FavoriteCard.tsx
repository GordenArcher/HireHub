import { MapPin, BadgeDollarSign, Bookmark, ArrowRight } from 'lucide-react'
import { useBookmarkStore } from '../../stores/useBookmarkstore'
import { FormatSalaryRange } from '../../utils/FormatSalary'
import type { Job } from '../../types/landing/landingtypes'

interface Card {
    bookmark: Job
}

const FavoriteCard = ({ bookmark } : Card ) => {
    
    const { toggleBookmark } = useBookmarkStore()

    return (
        <div className="w-full relative p-4 group hover:bg-slate-200 rounded duration-100 ease-in-out transition border-slate-500">
            <div className="flex items-center justify-between gap-2.5">
                <div className="flex items-center gap-2.5">
                    <div className="w-16 h-16 relative rounded-lg bg-orange-500 text-white font-bold flex-shrink-0 flex items-center justify-center">
                        {bookmark.company.logo}
                    </div>

                    <div className='flex flex-col justify-between gap-2.5'>
                        <div className="flex items-center gap-3">
                            <div>
                                <h2 className="font-medium text-gray-900">{bookmark?.title}</h2>
                            </div>

                            <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700">
                                {bookmark?.type}
                            </span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-600 mt-1 text-sm">
                            <span className="flex items-center gap-1">
                                <MapPin size={16} />
                                {bookmark?.company?.location}
                            </span>

                            <span className="flex items-center gap-1">
                                <BadgeDollarSign size={16} />
                                {FormatSalaryRange(bookmark?.salary?.min, bookmark?.salary?.max)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2.5">
                    <button onClick={() => toggleBookmark(bookmark)} title="bookmark" className="duration-150 ease-in-out transition p-3 rounded-lg hover:bg-slate-300 cursor-pointer">
                        <Bookmark fill="currentColor" strokeWidth={0} className="text-orange-500" />
                    </button>

                    <button title="apply" className="px-5 py-3 cursor-pointer bg-orange-300 text-orange-600 rounded group-hover:bg-orange-600 group-hover:text-white duration-150 ease-in-out transition">
                        <div className="flex items-center gap-3">
                            <span>Apply</span>
                            <ArrowRight size={20} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard