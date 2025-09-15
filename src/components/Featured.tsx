import React from 'react';
import { 
    Bookmark,
    MapPin,
} from 'lucide-react';
import { jobs } from '../data/landing/landing';
import { GetJobTypeColor } from '../utils/JobColor'



const FeaturedJob: React.FC = () => {

    const FeaturedJob = jobs.slice(0, 9)

    return (
        <>
            <section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FeaturedJob.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-8 rounded-lg border border-gray-200 transition-shadow cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 rounded text-xs font-medium ${GetJobTypeColor(job.type)}`}>
                                    {job.type}
                                </span>

                                <button title='bookmark' className="text-gray-400 hover:text-orange-500">
                                    <Bookmark size={20} />
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
                                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                                        {job.company.logo}
                                    </div>

                                    <div>
                                        <p className="font-medium text-gray-900">{job.company.name}</p>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <MapPin size={14} className="mr-1" />
                                            {job.company.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section> 
        </>
    );
};

export default FeaturedJob;