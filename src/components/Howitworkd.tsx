
import { steps } from '../data/landing/landing';

const HowItWorks = () => {

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto">
                <div className="text-start mb-16">
                    <h2 className="text-4xl max-md:text-xl font-bold text-gray-800 mb-4">
                        How HireHub work
                    </h2>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            const isLastStep = index === steps.length - 1;
                        
                            return (
                                <div key={step.id} className="text-center relative">
                                    <div className="relative mb-6 flex justify-center">
                                        <div 
                                            className={`w-16 h-16 rounded-full flex items-center justify-center relative z-10 ${
                                                step.isHighlighted 
                                                ? 'bg-orange-500 text-white shadow-lg' 
                                                : 'bg-white text-orange-500 border-2 border-orange-200'
                                            }`}
                                        >
                                            <IconComponent size={24} />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {step.title}
                                        </h3>
                                        
                                        <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
                                            {step.description}
                                        </p>
                                    </div>

                                    {!isLastStep && (
                                        <div className="hidden lg:block absolute top-8 -right-8 z-20">
                                            <svg 
                                                width="60" 
                                                height="60" 
                                                viewBox="0 0 60 60" 
                                                className="text-orange-400"
                                            >
                                                <defs>
                                                    <marker
                                                        id={`arrowhead-${step.id}`}
                                                        markerWidth="10"
                                                        markerHeight="7"
                                                        refX="9"
                                                        refY="3.5"
                                                        orient="auto"
                                                        fill="currentColor"
                                                    >
                                                        <polygon points="0 0, 10 3.5, 0 7" />
                                                    </marker>
                                                </defs>

                                                <path
                                                    d="M10 30 Q30 15 50 30"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeDasharray="5,5"
                                                    fill="none"
                                                    markerEnd={`url(#arrowhead-${step.id})`}
                                                    className="animate-pulse"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;