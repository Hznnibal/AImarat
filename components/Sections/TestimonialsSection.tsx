import React from 'react';
import { TESTIMONIALS } from '../../utils/constants';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-black">
                        Ce que nos <span className="text-primary">clients</span> disent
                    </h2>
                    <p className="text-neutral-darkGray max-w-2xl mx-auto">
                        Découvrez comment nos solutions ont transformé le quotidien de nos clients et amélioré leurs performances.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <TestimonialCard
                                name={testimonial.name}
                                company={testimonial.company}
                                content={testimonial.content}
                                avatar={testimonial.avatar}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;