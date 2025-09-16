import { Link, useLocation } from "react-router-dom";
import { GetJobTypeColor } from "../../../utils/JobColor";
import { useBookmarkStore } from "../../../stores/useBookmarkstore";
import { ArrowRight, Bookmark, Copy, Facebook, LinkedinIcon, LinkIcon, Map, Twitter } from "lucide-react";
import { FormatSalaryRange } from "../../../utils/FormatSalary";
import FeaturedJob from "../../../components/Featured";
import { jobs } from "../../../data/landing/landing";
import EmptyContainer from "../../../components/EmptyContainer";
import { toast } from "react-toastify";


const JobDetails = () => {

    const location = useLocation();
    const { job } = location.state || {};

    const relatedJobs = jobs.filter(j => j.id !== job.id && j.tags.some(tag => job.tags.includes(tag)));

    const { isBookmarked, toggleBookmark } = useBookmarkStore()
    const bookmarked = isBookmarked(job.id)

    const shareLink = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: job.title,
                    text: `Check out this job opening at ${job.company.name}!`,
                    url: window.location.href, 
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            await navigator.clipboard.writeText(window.location.href);
            toast.success("Link copied to clipboard!");
        }
    };


    return (
        <div className="w-full h-full y-5 max-md:px-2 relative">
            <div className="py-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                        <h2 className="text-orange-500 font-black">Job Details</h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-sm">
                        <Link className="text-orange-500 hover:text-orange-400" to={"/"}>Home</Link>
                        <b>/</b>
                        <Link className="text-orange-500 hover:text-orange-400" to={"/find-job"}>find job</Link>
                        <b>/</b>
                        <span>{job?.title}</span>
                        <b>/</b>
                        <span>job details</span>
                    </div>
                </div>
            </div>

            <div className="py-6 mb-20">
                <div className="w-full relative">
                    <div className="flex items-center justify-between gap-2 max-md:flex-col">
                        <div className="p-2 h-full">
                            <div className="flex items-center gap-3 h-full">
                                <div>
                                    <div className="w-18 h-18 rounded-full bg-gradient-to-tr from-orange-600 to-orange-300 text-white text-2xl font-extrabold flex items-center justify-center">
                                        {job.company.logo}
                                    </div>
                                </div>

                                <div className="flex items-start flex-col gap-1 justify-between">
                                    <h2 className="text-2xl max-md:text-lg font-black text-slate-500">{job?.title}</h2>

                                    <div className="flex items-center gap-1.5">
                                        <span className="text-slate-400"> at <b>{job?.company?.name}</b> </span>
                                        <div className={`${GetJobTypeColor(job?.type)} rounded px-3 py-1 text-sm`}>
                                            {job.type}
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="flex items-center gap-2.5">
                                <div>
                                    <button onClick={() => toggleBookmark(job)} className="w-10 h-10 bg-orange-200 focus:ring-2 ring-orange-400 rounded cursor-pointer transition duration-150 ease-initial flex items-center justify-center">
                                        {bookmarked ? (
                                            <Bookmark fill="currentColor" strokeWidth={0} color="blue" className="text-orange-500 " />
                                        ) : (
                                            <Bookmark className="text-orange-700" size={20} />
                                        )}
                                    </button>
                                </div>

                                <div>
                                    <button title="apply" className="h-10 px-8 bg-orange-500 text-white flex items-center gap-2.5 w-full cursor-pointer hover:bg-orange-600 transition duration-150 ease-initial rounded-md " >
                                        <span>Apply</span>

                                        <ArrowRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="py-3 relative">
                    <div className="w-full h-full grid grid-cols-[70%_30%] gap-2.5 max-md:grid-cols-1">
                        <section className="p-2">

                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h2>
                                <p className="text-gray-500 leading-relaxed">{job.description}</p>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h2>
                                <ul className="list-disc list-inside text-gray-500 space-y-1">
                                    {job.requirements.map((req: string, index: number) => (
                                        <li key={index}>{req}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Desirable</h2>
                                <ul className="list-disc list-inside text-gray-500 space-y-1">
                                    {job.desirable.map((des:string, index: number) => (
                                        <li key={index}>{des}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h2>
                                <ul className="list-disc list-inside text-gray-500 space-y-1">
                                    {job.benefits.map((ben: string, index: number) => (
                                        <li key={index}>{ben}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>


                        <aside className="w-full h-full relative">
                            <div className="flex flex-col gap-4">
                                <div className="border border-orange-500/40 rounded-md p-4 relative">
                                    <div className="flex items-center justify-between gap-1">
                                        <div className="w-full flex items-center flex-col justify-center">
                                            <p>salary (GH₵)</p>
                                            <span className="text-green-600 text-sm font-black">{FormatSalaryRange(job.salary.min, job.salary.max)}</span>
                                            <p className="text-slate-700 text-sm">Yearly Salary</p>
                                        </div>

                                        <div className="w-1 h-20 bg-orange-500/40 rounded-full"></div>

                                        <div className="w-full flex items-center justify-center flex-col">
                                            <Map size={25} />
                                            <p>Job Location</p>
                                            <span className="text-sm text-slate-700 font-medium">{job.company.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border border-orange-500/40 flex flex-col gap-4.5 rounded-md p-4 relative">
                                    <div className="space-y-4 relative">
                                        <h3 className="text-sm text-slate-600 font-normal">Share this Job</h3>

                                        <div className="flex items-center gap-2.5">
                                            <button onClick={shareLink} title="copy" className="flex items-center gap-2 text-orange-700 rounded bg-orange-200 cursor-pointer px-3 py-1" >
                                                <LinkIcon size={20} />
                                                <span>share link</span>
                                            </button>

                                            <button title="share to facebook" className="rounded bg-orange-200 cursor-pointer px-2 py-1">
                                                <Facebook className="text-orange-600" />
                                            </button>
                                            <button title="share to linkidin" className="rounded bg-orange-200 cursor-pointer px-2 py-1">
                                                <LinkedinIcon className="text-orange-600" />
                                            </button>

                                            <button title="share to twitter" className="rounded bg-orange-200 cursor-pointer px-2 py-1">
                                                <Twitter className="text-orange-600" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-sm text-slate-600 font-normal">Job Tags</h3>

                                        <div className="flex items-center flex-wrap gap-2.5">
                                            {job.tags.map((tag: string, i: number) => (
                                                <div key={i} className="p-1 bg-orange-100 rounded text-orange-700 text-sm font-normal">{tag}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </aside>
                    </div>
                </section>
            </div>

            <div className="h-0.5 w-full bg-orange-600" />

            <div className="py-12">
                <div className="space-y-3.5">
                    <h3 className="text-3xl max-md:text-lg">Related Jobs</h3>

                    <div>
                        <section className="grid grid-cols-3 gap-2.5 max-md:grid-cols-1">
                            {relatedJobs.slice(0, 6).map((job) => <FeaturedJob key={job.id} job={job} />)}
                        </section>

                        {relatedJobs.length <= 0 && (
                            <div className="w-full h-full relative">
                                <EmptyContainer text="No relative job found" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails