import { 
    Bookmark,
    BookmarkCheck,
    MapPin,
} from 'lucide-react';
import { GetJobTypeColor } from '../utils/JobColor'
import type { Job } from '../types/landing/landingtypes';
import { useBookmarkStore } from '../stores/useBookmarkstore';
import { Link } from 'react-router-dom';


interface JobCardProps {
  job: Job;
}


const FeaturedJob = ({ job }: JobCardProps) => {

    const { toggleBookmark, isBookmarked } = useBookmarkStore();

    const bookmarked = isBookmarked(job.id);

    return (
        <>
            <Link
                state={{ job }}
                to={`/position/details/${job.id}`}
                key={job.id}
                className="bg-white p-8 rounded-lg border border-gray-200 transition-shadow cursor-pointer"
            >
                <div className="flex relative justify-between items-start mb-4">
                    <span className={`px-3 py-1 rounded text-xs font-medium ${GetJobTypeColor(job.type)}`}>
                        {job.type}
                    </span>

                    <button 
                        onClick={(e) => {
                            e.preventDefault();    
                            e.stopPropagation();
                            toggleBookmark(job);
                        }}
                    
                        title='bookmark' className="z-3 absolute right-0 text-gray-400 hover:text-orange-500">

                        {bookmarked ? (
                        <BookmarkCheck fill="currentColor" strokeWidth={0} className="text-orange-500" />
                        ) : (
                        <Bookmark className="text-gray-500" />
                        )}
                    </button>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                </div>
                
                <div className="flex items-center space-x-2 mb-4 text-gray-600">
                    <span className="text-sm">Salary: ₵{job.salary.min.toLocaleString()} - ₵{job.salary.max.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-15 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                            {job.company.logo}
                        </div>

                        <div className='w-full'>
                            <p className="font-medium text-gray-900 line-clamp-1">{job.company.name}</p>
                            <div className="flex items-center text-gray-500 text-sm">
                                <MapPin size={14} className="mr-1" />
                                {job.company.location}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default FeaturedJob;