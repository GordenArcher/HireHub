import FavoriteCard from "../../../../components/dashboard/FavoriteCard"
import { useBookmarkStore } from "../../../../stores/useBookmarkstore"
import EmptyContainer from "../../../../components/EmptyContainer"

const FavoritesJob = () => {
    const { bookmarks } = useBookmarkStore()

    return (
        <div className="w-full h-full relative">
            <div className="space-y-3.5">
                <div className="p-3">
                    <h3 className="text-lg font-black text-orange-400">Favourite Jobs {" "} <span className="text-slate-600">({bookmarks.length})</span> </h3>
                </div>

                <div className="py-4">
                    <div className="w-full relative">
                        {bookmarks.map((bookmark) => <FavoriteCard key={bookmark.id} bookmark={bookmark} /> )}
                    </div>
                </div>

                {bookmarks?.length <= 0 && (
                    <EmptyContainer text=" No Favourite added." />
                )}

            </div>
        </div>
    )
}

export default FavoritesJob