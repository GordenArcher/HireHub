import { MapPin, Search, SlidersIcon } from "lucide-react"
import { Link } from "react-router-dom"
import FeaturedJob from "../../../components/Featured"
import { jobs } from "../../../data/landing/landing"

const FindJob = () => {
    return (
        <div className="py-12 max-md:p-2 relative">
            <div className="space-y-4 w-full">
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <h2 className="text-orange-500 font-black">Find Job</h2>
                    </div>

                    <div className="flex items-center gap-2.5 text-sm">
                        <Link className="text-orange-500 hover:text-orange-400" to={"/"}>Home</Link>
                        <b>/</b>
                        <span>Find Job</span>
                    </div>
                </div>
            </div>

            <div className="py-5 relative">
                <div className='w-full pt-4 relative mb-4'>
                    <div className='flex items-center justify-between relative bg-white border w-full h-[60px] border-orange-400 rounded shadow-xl'>
                        <div className='w-full h-full relative px-3'>
                            <div className='flex h-full items-center justify-center gap-2'>
                                <Search size={20} className='text-orange-500' />

                                <div className='h-full w-full'>
                                    <input type="text" className='w-full border-none h-full outline-none font-medium' placeholder='search by: Job title, position, keyword...' name="search-job" id="search_job" />
                                </div>
                            </div>
                        </div>

                        <div className='space-x-3 w-0.5 flex items-center justify-center h-10 bg-orange-500'></div>

                        <div className='w-full h-full relative px-3'>
                            <div className='flex h-full items-center justify-between gap-2'>
                                <div className='flex h-full items-center justify-center gap-2'>
                                    <MapPin size={20} className='text-orange-500' />

                                    <div className='h-full'>
                                        <input type="text" className='border-none h-full outline-none font-medium' placeholder='Your location' name="search-location" id="search_location" />
                                    </div>
                                </div>

                                <div className='flex h-full gap-2.5 py-2'>
                                    <div className="h-full">
                                        <button title='filter job' className='px-5 h-full bg-orange-500 text-white cursor-pointer rounded-lg'>
                                            <SlidersIcon size={20} />
                                        </button>
                                    </div>

                                    <div className="h-full">
                                        <button title='find job' className='px-5 h-full bg-orange-500 text-white cursor-pointer rounded-lg'>
                                            <Search size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-7 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {jobs.map((job) => <FeaturedJob key={job.id} job={job} />)}
                </div>
            </section>
        </div>
    )
}

export default FindJob