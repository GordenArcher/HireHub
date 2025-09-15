import { ChevronRight } from "lucide-react"
import { categories } from "../data/landing/landing"

const PopularCategory = () => {
    return (
        <section className="mb-12">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Popular category</h2>
                <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
                    View All <ChevronRight size={20} className="ml-1" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                        <div
                            key={category.id}
                            className={`p-6 rounded-lg cursor-pointer hover:shadow-lg transition-shadow ${category.bgColor}`}
                        >
                            <div className="flex items-start space-x-4">
                                <div className={`p-3 rounded-lg ${category.id === 8 ? 'bg-white bg-opacity-20' : 'bg-white'}`}>
                                    <IconComponent size={24} className={category.id === 8 ? 'text-white' : 'text-orange-500'} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className={`font-semibold text-lg ${category.id === 8 ? 'text-white' : 'text-gray-900'}`}>
                                        {category.name}
                                    </h3>

                                    <p className={`text-sm ${category.id === 8 ? 'text-orange-100' : 'text-gray-600'}`}>
                                        {category.openPositions} Open position
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
    </section>
    )
}

export default PopularCategory