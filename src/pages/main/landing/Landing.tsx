import { ChevronRight, MapPin, Search } from 'lucide-react'
import HomeImage from '../../../assets/images/home.svg'
import { HeroData, jobs, MostPopularVaca } from '../../../data/landing/landing'
import HeroCard from '../../../components/ui/HeroCard'
import { Link } from 'react-router-dom'
import HowItWorks from '../../../components/Howitworkd'
import FeaturedJob from '../../../components/Featured'
import Testimonial from '../../../components/Testimonial'
import PopularCategory from '../../../components/PopularCategory'
import TopCompanies from '../../../components/TopCompanies'
import CTO from '../../../components/CTO'
import type { Job } from '../../../types/landing/landingtypes'

const Landing = () => {

    const SlicedJob: Job[] = jobs.slice(0, 9)

    return (
        <div className="max-md:p-3 relative w-full h-full">
            <div className="py-12 space-y-3">
                <section className="space-y-2 mb-13">
                    <div className="flex items-center max-md:flex-col h-full gap-1">
                        <div className='w-full relative space-y-4'>
                            <div className='space-y-2 relative leading-2'>
                                <h2 className="text-5xl max-md:text-xl font-black leading-normal bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                    Find a job that suits your interest &amp; skills
                                </h2>


                                <p className="text-gray-600 text-base max-w-xl">
                                    Explore thousands of opportunities from top companies. 
                                    Whether you&apos;re a student, a professional, or changing careers, 
                                    HireHub helps you connect with the right employers and take the 
                                    next step in your journey.
                                </p>
                            </div>

                            <div className='w-full pt-4 relative mb-4'>
                                <div className='flex items-center justify-between relative bg-white border w-full h-[70px] border-orange-400 rounded shadow-xl'>
                                    <div className='w-full h-full relative px-3'>
                                        <div className='flex h-full items-center justify-center gap-2'>
                                            <Search size={20} className='text-orange-500' />

                                            <div className='h-full'>
                                                <input type="text" className='border-none h-full outline-none font-medium' placeholder='Job title, keyword...' name="search-job" id="search_job" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='space-x-3 w-0.5 flex items-center justify-center h-10 bg-orange-500'></div>

                                    <div className='w-full h-full relative px-3'>
                                        <div className='flex h-full items-center gap-2'>
                                            <div className='flex h-full items-center justify-center gap-2'>
                                                <MapPin size={20} className='text-orange-500' />

                                                <div className='h-full'>
                                                    <input type="text" className='border-none h-full outline-none font-medium' placeholder='Your location' name="search-location" id="search_location" />
                                                </div>
                                            </div>

                                            <div className='flex h-full py-2'>
                                                <button title='find job' className='px-5 py-1 bg-orange-500 text-white cursor-pointer rounded-lg'>Find</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-2 leading-normal text-sm text-slate-800'>
                                <span className='text-slate-500'>Suggestion</span>: {" "}
                                <span>Designer, programming, {" "} <b className='text-orange-500 font-black cursor-pointer'>Digital Marketing</b> </span>
                            </div>
                        </div>

                        <div className="w-full h-full">
                            <img src={HomeImage} className='w-full h-full' alt="landin image" />
                        </div>
                    </div>
                </section>

                <section className="w-full relative pt-12">
                    <div className='flex items-center justify-between gap-4 max-md:flex-col'>
                        {HeroData.map((data) => <HeroCard key={data.id} {...data} />)}
                    </div>
                </section>
            </div>


            <div className='py-15 relative space-y-3 mb-12'>
                <div className="text-start mb-5">
                    <h2 className="text-4xl max-md:text-xl font-bold text-gray-800 mb-4">
                        most Popular vacancies
                    </h2>
                </div>

                <div className='space-y-3 relative pt-10'>
                    <section 
                        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                        aria-label="Popular vacation destinations with job openings"
                    >
                        {MostPopularVaca.map((destination) => (
                            <article 
                                key={destination.id}
                                className="relative space-y-3 p-4 border border-gray-200 rounded-lg transition-shadow"
                            >
                                <h3 className="text-lg font-bold">
                                    <Link 
                                        to={destination.link}
                                        className="text-black hover:text-orange-500 focus:text-orange-500 transition-colors after:absolute after:inset-0"
                                        aria-describedby={`positions-${destination.id}`}
                                    >
                                        {destination.label}
                                    </Link>
                                </h3>
                                
                                <div 
                                    id={`positions-${destination.id}`}
                                    className="text-sm text-gray-600 flex items-center gap-1"
                                >
                                    <span className="inline-block w-2 h-2 bg-orange-500 rounded-full" aria-hidden="true"></span>
                                    <span>{destination.figure} Open Position{destination.figure !== 1 ? 's' : ''}</span>
                                </div>
                            </article>
                        ))}
                    </section>
                </div>

            </div>

            <HowItWorks />

            <PopularCategory />

            <section className="space-y-12">

                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Featured job</h2>
                        <Link to={"/find-job"} className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                            View All <ChevronRight size={20} className="ml-1" />
                        </Link>
                    </div>

                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SlicedJob.map((job) => <FeaturedJob key={job.id} job={job} />)}
                    </div>
                </section>
                    
                
            </section>

            

            <TopCompanies />

            <Testimonial />

            <CTO />
        </div>
    )
}

export default Landing