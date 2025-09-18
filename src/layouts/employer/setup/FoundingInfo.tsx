import { ArrowRight } from "lucide-react"
import Button from "../../../components/ui/Button"
import type React from "react"
import { IndustryTypes, OrganizationTypes, TeamSizes } from "../../../data/dashboard/Employer"

interface Props {
    setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const FoundingInfo = ({ setActiveTab }: Props) => {

    return (
        <div className="space-y-3 relative">
            <div className="w-full grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4">

                <div className="w-full relative flex flex-col gap-2">
                    <span className="text-sm font-medium">Organization Type</span>

                    <select title="organization" name="org_type" id="org_type" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                        <option> select... </option>
                        {OrganizationTypes.map((e, idx) => (
                            <option key={idx} value={e}>{e}</option>
                        ))}
                    </select>
                </div>


                <div className="w-full relative flex flex-col gap-2">
                    <span className="text-sm font-medium">Industry Type</span>

                    <select title="industry" name="indus_type" id="indus_type" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                        <option> select... </option>
                        {IndustryTypes.map((e, idx) => (
                            <option key={idx} value={e}>{e}</option>
                        ))}
                    </select>
                </div>


                <div className="w-full relative flex flex-col gap-2">
                    <span className="text-sm font-medium">Team Size</span>

                    <select title="team size" name="team_size" id="team_size" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in">
                        <option> select... </option>
                        {TeamSizes.map((e, idx) => (
                            <option key={idx} value={e}>{e}</option>
                        ))}
                    </select>
                </div>


                <div className="w-full relative flex flex-col gap-2">
                    <label htmlFor="year_est" className="text-sm font-medium">Year of Establishment</label>

                    <input type="date" name="year_est" id="year_est" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                </div>


                <div className="w-full relative flex flex-col gap-2">
                    <label htmlFor="comp_web" className="text-sm font-medium">Company Website</label>
                    <input placeholder="Website url..." type="text" name="comp_web" id="comp_web" className="w-full h-12 rounded outline-none px-2 border border-orange-300 focus:border-orange-400 transition duration-150 ease-in" />
                </div>
            </div>

            <div className="pt-7">
                <div className="flex flex-col gap-2">
                    <label htmlFor="aboutcompany" className="">Company Vission</label>
                    <textarea rows={11} id="aboutcompany" placeholder="Write down about your company here. Let candidate know who we are..." className="w-full resize-none outline-none focus:border-orange-700 duration-150 ease-linear px-3 rounded-md border border-orange-500" />
                </div>
            </div>

            <div className="flex items-center gap-3.5 py-7">
                <Button handleClick={() => setActiveTab("company-info")} title="previous" bgcolor="bg-gray-200" color="text-orange-500" >
                    {"Previous"}
                </Button>

                <Button title="save & next" handleClick={() => setActiveTab("company-media")}>
                    {
                        <>
                            <span>Save & Next</span>
                            <ArrowRight />
                        </>
                    }
                </Button>
            </div>
        </div>
    )
}

export default FoundingInfo