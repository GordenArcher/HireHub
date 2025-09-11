import React from 'react';
import { 

  Bookmark,
  MapPin,
  ChevronRight
} from 'lucide-react';
import { categories, companies, jobs } from '../data/landing/landing';



const FeaturedJob: React.FC = () => {


  const getJobTypeColor = (type: string) => {
    switch (type) {
      case 'FULL-TIME':
        return 'bg-green-100 text-green-700';
      case 'PART-TIME':
        return 'bg-orange-100 text-orange-700';
      case 'INTERNSHIP':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className=" p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <section>
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

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured job</h2>
            <button className="flex items-center text-orange-500 hover:text-orange-600 font-medium">
              View All <ChevronRight size={20} className="ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)}`}>
                    {job.type}
                  </span>
                  <button className="text-gray-400 hover:text-orange-500">
                    <Bookmark size={20} />
                  </button>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                
                <div className="flex items-center space-x-2 mb-4 text-gray-600">
                  <span className="text-sm">Salary: ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}</span>
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

        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Top companies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 ${company.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}>
                    {company.logo}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                    {company.featured && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {company.location}
                  </div>
                </div>

                <button className="w-full bg-orange-50 text-orange-600 py-3 px-4 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                  Open Position ({company.openPositions})
                </button>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {companies.map((company) => (
              <div
                key={`second-${company.id}`}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 ${company.bgColor} rounded-lg flex items-center justify-center text-white font-bold text-2xl`}>
                    {company.logo}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{company.name}</h3>
                    {company.featured && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs rounded-full font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center text-gray-500 text-sm">
                    <MapPin size={14} className="mr-1" />
                    {company.location}
                  </div>
                </div>

                <button className="w-full bg-orange-50 text-orange-600 py-3 px-4 rounded-lg font-medium hover:bg-orange-100 transition-colors">
                  Open Position ({company.openPositions})
                </button>
              </div>
            ))}
          </div>
        </section>

        

      </div>
    </div>
  );
};

export default FeaturedJob;