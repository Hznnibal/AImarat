import * as LucideIcons from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type TestimonialCardProps = {
    name: string;
    company: string;
    content: string;
    avatar: string;
};


const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, company, content, avatar }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <div className="flex items-start mb-4">
                <div className="text-primary mr-2">
                    <LucideIcons.Quote size={24} />
                </div>
                <p className="text-neutral-darkGray italic leading-relaxed">{content}</p>
            </div>

            <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                <Image
                    src={avatar}
                    alt={name}
                    width={100}
                    height={100}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                    <h4 className="font-semibold text-neutral-black">{name}</h4>
                    <p className="text-sm text-neutral-darkGray">{company}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;