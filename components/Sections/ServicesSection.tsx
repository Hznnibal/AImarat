import { SERVICES } from '@/utils/constants';
import React from 'react';
import ServiceCard from '../ui/ServiceCard';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-neutral-lightGray">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-black">
                        Nos <span className="text-primary">offres</span> principales
                    </h2>
                    <p className="text-neutral-darkGray max-w-2xl mx-auto">
                        Des solutions intelligentes et innovantes pour répondre aux besoins spécifiques de votre entreprise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.id}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon as any}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;