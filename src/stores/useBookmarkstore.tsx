import { create } from "zustand";
import type { Job } from "../types/landing/landingtypes";
import { toast } from "react-toastify";

interface BookmarkState {
    bookmarks: Job[];
    addBookmark: (job: Job) => void;
    removeBookmark: (jobId: number) => void;
    toggleBookmark: (job: Job) => void;
    isBookmarked: (jobId: number) => boolean;
}

export const useBookmarkStore = create<BookmarkState>((set, get) => ({
    bookmarks: JSON.parse(localStorage.getItem("bookmarks") || "[]"),

    addBookmark: (job) => {
        const updated = [...get().bookmarks, job];
        localStorage.setItem("bookmarks", JSON.stringify(updated));
        set({ bookmarks: updated });
    },

    removeBookmark: (jobId) => {
        const updated = get().bookmarks.filter((j) => j.id !== jobId);
        localStorage.setItem("bookmarks", JSON.stringify(updated));
        set({ bookmarks: updated });
    },

    toggleBookmark: (job) => {
        const { bookmarks } = get();
        if (bookmarks.some((j) => j.id === job.id)) {
            get().removeBookmark(job.id);
            toast.info(`removed ${job.title} from favourites`)
        } else {
            get().addBookmark(job);
            toast.success(`saved ${job.title} to favourites`)
        }
    },

    isBookmarked: (jobId) => {
        return get().bookmarks.some((j) => j.id === jobId);
  },
}));
