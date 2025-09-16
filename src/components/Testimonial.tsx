import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/landing/landing';

const TestimonialsComponent: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);



    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => 
        prev === 0 ? Math.ceil(testimonials.length / 3) - 1 : prev - 1
        );
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                size={16}
                className={index < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-300'}
            />
        ));
    };

    const getVisibleTestimonials = () => {
        const startIndex = currentSlide * 2;
        return testimonials.slice(startIndex, startIndex + 2);
    };

    return (
        <div className="py-16 px-4">
            <div className="">
                <div className="text-start mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Clients Testimonial
                    </h2>

                    <p className="text-lg text-gray-600">
                        Discover what our satisfied clients have to say about their experience with HireHub
                    </p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="flex space-x-4">
                        <button title='prev'
                            onClick={prevSlide}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-orange-200 text-orange-500 hover:bg-orange-50 hover:border-orange-300 transition-colors shadow-sm"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            title='next'
                            onClick={nextSlide}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-sm"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 mb-12">
                    {getVisibleTestimonials().map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`bg-white relative rounded-lg p-4 shadow-sm border transition-all duration-300 hover:-translate-y-1.5 ${
                                testimonial.featured 
                                ? 'border-orange-200 ring-2 ring-orange-100' 
                                : 'border-gray-200'
                            }`}
                        >

                            <div className='flex flex-col gap-4'>
                                <div className="flex justify-start mb-4">
                                    <div className="flex space-x-1">
                                        {renderStars(testimonial.rating)}
                                    </div>
                                </div>

                                <blockquote className="text-gray-700 text-start mb-6 leading-relaxed">
                                    "{testimonial.content}"
                                </blockquote>

                                <div className="">
                                    <div className='flex items-center justify-between gap-2'>
                                        <div className='flex items-center space-x-4'>
                                            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                {testimonial.avatar}
                                            </div>

                                            <div className="text-start">
                                                <h4 className="font-semibold text-gray-900">
                                                    {testimonial.name}
                                                </h4>

                                                <p className="text-sm text-gray-600">
                                                    {testimonial.position}
                                                </p>

                                                <p className="text-sm text-orange-500 font-medium">
                                                    {testimonial.company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-center mb-6">
                                            <div className="p-3 bg-orange-100 rounded-full">
                                                <Quote size={24} className="text-orange-500" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>

                            
                        </div>
                    ))}
                </div>

                <div className="flex justify-center space-x-2">
                    {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                        <button
                            title={"slide"}
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                currentSlide === index 
                                ? 'bg-orange-500' 
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
                        <div className="text-gray-600">Happy Clients</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">95%</div>
                        <div className="text-gray-600">Success Rate</div>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                        <div className="text-gray-600">Support Available</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialsComponent;