'use client'

import { Brain } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react';
import Button from '../ui/Button';

const DemoSection: React.FC = () => {
    const t = useTranslations('demo');

    const bulletPoints = [
        t('benefits.presentation'),
        t('benefits.cases'),
        t('benefits.estimation'),
    ];

    return (
        <section id="demo" className="py-20 bg-primary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8 max-w-xl" data-aos="fade-right">
                        <div className="text-white/90 flex items-center mb-4">
                            <Brain size={40} className="mr-4" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                {t('title')}
                            </h2>
                        </div>

                        <p className="text-white/90 text-lg mb-6">
                            {t('subtitle')}
                        </p>

                        <ul className="text-white/90 space-y-3 mb-8">
                            {bulletPoints.map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center mr-3 text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="bg-white text-neutral-black p-8 rounded-lg shadow-lg max-w-md w-full"
                        data-aos="fade-left"
                    >
                        <h3 className="text-2xl font-bold mb-4">{t('form.title')}</h3>
                        <p className="text-neutral-darkGray mb-6">
                            {t('form.subtitle')}
                        </p>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder={t('form.company')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                required
                            />
                            <input
                                type="text"
                                placeholder={t('form.name')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                required
                            />
                            <input
                                type="email"
                                placeholder={t('form.email')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                required
                            />
                            <input
                                type="tel"
                                placeholder={t('form.phone')}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                            />
                            <Button variant="primary" size="lg" className="w-full">
                                {t('form.submit')}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
