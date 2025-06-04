'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import ServiceCard from '../ui/ServiceCard';

type Service = {
    id: string;
    title: string;
    description: string;
    icon: keyof typeof import('lucide-react');
};

const ServicesSection: React.FC = () => {
    const t = useTranslations('services');

    // Les services sont définis directement depuis les traductions
    const services: Service[] = [
        {
            id: 'chatbots',
            title: t('items.chatbots.title'),
            description: t('items.chatbots.description'),
            icon: 'MessageSquare',

        },
        {
            id: 'automation',
            title: t('items.automation.title'),
            description: t('items.automation.description'),
            icon: 'Cog',
        },
        {
            id: 'ai',
            title: t('items.ai.title'),
            description: t('items.ai.description'),
            icon: 'Brain',
        }
    ];


    return (
        <section id="services" className="py-20 bg-neutral-lightGray">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-black">
                        {t('title')} <span className="text-primary">{t('titleHighlight')}</span>
                    </h2>
                    <p className="text-neutral-darkGray max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                link={`/${service.id}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
