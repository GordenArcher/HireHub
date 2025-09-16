import { MapPin } from "lucide-react"
import { companies } from "../data/landing/landing"

const TopCompanies = () => {
    return (
        <section className="py-12 mb-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Top companies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map((company) => (
                    <div
                        key={company.id}
                        className="bg-white relative p-8 rounded-lg border border-gray-200 transition-shadow text-center"
                    >

                        <div className="flex gap-2.5 items-center">
                            <div className="flex justify-center mb-4">
                                <div className={`w-14 h-14 ${company.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}>
                                    {company.logo}
                                </div>
                            </div>
                            
                            <div className="mb-4 flex items-start flex-col justify-between">
                                <div className="flex items-center justify-start space-x-2 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>

                                    {company.featured && (
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700`}>
                                            featured  
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-center text-gray-500 text-sm">
                                    <MapPin size={14} className="mr-1" />
                                    {company.location}
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="w-full bg-orange-50 cursor-pointer text-orange-600 py-3 px-4 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                                Open Position ({company.openPositions})
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TopCompanies