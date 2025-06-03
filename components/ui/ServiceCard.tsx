import * as LucideIcons from 'lucide-react';
import React from 'react';

type ServiceCardProps = {
    title: string;
    description: string;
    icon: keyof typeof LucideIcons;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    const Icon = LucideIcons[icon];

    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-primary h-full flex flex-col">
            <div className="mb-4 text-primary">
                <Icon size={36} strokeWidth={1.5} />
            </div>

            <h3 className="text-xl font-semibold mb-3 text-neutral-black">{title}</h3>

            <p className="text-neutral-darkGray leading-relaxed flex-grow">
                {description}
            </p>

            <div className="mt-4 pt-4 border-t border-gray-100">
                <a href="#demo" className="text-primary font-medium flex items-center group">
                    En savoir plus
                    <LucideIcons.ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

export default ServiceCard;