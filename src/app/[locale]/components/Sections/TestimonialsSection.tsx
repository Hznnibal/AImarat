'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';

const TestimonialsSection: React.FC = () => {
    const t = useTranslations('testimonials');

    const testimonials = [
        {
            id: '1',
            name: t('items.1.name'),
            company: t('items.1.company'),
            content: t('items.1.content'),
            avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        {
            id: '2',
            name: t('items.2.name'),
            company: t('items.2.company'),
            content: t('items.2.content'),
            avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        {
            id: '3',
            name: t('items.3.name'),
            company: t('items.3.company'),
            content: t('items.3.content'),
            avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        // Ajoute autant de témoignages que nécessaire
    ];

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-black">
                        {t('title')} <span className="text-primary">{t('titleHighlight')}</span> {t('subtitle')}
                    </h2>
                    <p className="text-neutral-darkGray max-w-2xl mx-auto">
                        {t('description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
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
