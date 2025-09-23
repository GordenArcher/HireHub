import { ArrowRight, Bookmark, Menu } from "lucide-react"

const SavedCandidateCard = () => {
    return (
        <div className="w-full h-full border-b border-orange-400 group">
            <div className="p-3 flex items-center justify-between gap-1.5">
                <div className="flex items-center gap-2">
                    <div className="w-15 h-15 bg-orange-500 rounded"></div>

                    <div className="flex items-start flex-col justify-between gap-1.5">
                        <h3 className="font-black">Gorden Archer</h3>
                        <span className="text-slate-400">Software Engineer AI/ML</span>
                    </div>
                </div>

                <div>
                    <div className="flex gap-2 sm:flex-row flex-col sm:items-center">
                        <button
                            title="bookmark"
                            aria-label="Toggle bookmark"
                            className="duration-150 ease-in-out transition p-3 rounded-lg hover:bg-slate-300 cursor-pointer self-start sm:self-auto"
                        >
                            <Bookmark fill="currentColor" strokeWidth={0} className="text-orange-500" />
                        </button>

                        <button
                            title="view"
                            className="px-5 py-3 cursor-pointer bg-orange-300 text-orange-600 rounded group-hover:bg-orange-600 group-hover:text-white duration-150 ease-in-out transition w-full sm:w-auto"
                        >
                            <div className="flex items-center justify-center gap-2">
                                <span>View Profile</span>
                                <ArrowRight size={20} />
                            </div>
                        </button>

                        <button
                            title="bookmark"
                            aria-label="Toggle bookmark"
                            className="duration-150 ease-in-out transition p-3 rounded-lg hover:bg-slate-300 cursor-pointer self-start sm:self-auto"
                        >
                            <Menu className="text-orange-500" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedCandidateCard