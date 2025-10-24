import React from 'react'
import { BriefcaseBusiness, Building2Icon } from "lucide-react";


interface Data {
    id: number,
    // number: number,
    label: string,
    icon: React.ReactNode
}

const AuthRight = () => {

    const Data: Data[] = [
        {
            id: 1,
            // number: 175324,
            label: "Live Job",
            icon: <BriefcaseBusiness size={20} />
        },
        {
            id: 2,
            // number: 97354,
            label: "Companies",
            icon: <Building2Icon size={20} />
        },
        {
            id: 3,
            // number: 7532,
            label: "New Jobs",
            icon: <BriefcaseBusiness size={20} />
        },
    ]
    
    return (
        <>
            <div className="h-[80%] max-md:hidden w-4/4 bg-gradient-to-br from-amber-400 via-orange-500 p-4 rounded-2xl to-red-600  text-white">
                <div className='h-full'>

                    <div className="h-full space-y-2 flex flex-col justify-end pb-7">
                        <div className="space-y-2.5">
                            <h2 className="text-4xl font-bold">HireHub</h2>

                            <h3 className='text-lg font-medium'>Over 1,750,324 candidates <br /> waiting for good employees</h3>
                        </div>

                        <section className="relative">
                            <div className="flex items-center gap-4">
                                {Data.map((r) => {
                                    return(
                                        <div key={r.id} className="">
                                            <div className="flex flex-col gap-3 items-center">
                                                <div className="p-3 bg-slate-600/50 rounded ">
                                                    {r.icon}
                                                </div>

                                                {/* <p className="text-sm font-black">{r.number}</p> */}
                                                <span className="text-sm">{r.label}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AuthRight