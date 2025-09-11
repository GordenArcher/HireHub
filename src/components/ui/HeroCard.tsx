import type React from "react"
import type { LandingHero } from "../../types/landing/landingtypes"
import DynamicIcon from "./DynamicIcon"

const HeroCard: React.FC<LandingHero> = ({ icon, label, figures }) => {

    return (
        <div className="w-full p-4 bg-white shadow border border-slate-700/10 rounded-lg group duration-150 transition ease-in-out">
            <div className="flex items-center gap-2.5">
                <div className="flex items-center justify-center rounded-lg bg-orange-400 group-hover:bg-orange-500 w-20 h-20 duration-150 transition ease-in-out">
                    <DynamicIcon icon={icon} color="#fff" />
                </div>

                <div className="flex flex-col justify-between py-2 gap-2.5">
                    <h3 className="text-black">
                        {figures}
                    </h3>

                    <p className="text-slate-500 font-black">{label}</p>
                </div>
            </div>
        </div>
    )
}

export default HeroCard