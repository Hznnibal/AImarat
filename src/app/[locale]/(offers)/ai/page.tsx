import { Brain, Lightbulb, Search, Target } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Button from '../../components/ui/Button';
import '../../globals.css';

const AIPage: React.FC = () => {
    const t = useTranslations('ai');

    const capabilities = [
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: t('capabilities.prediction.title'),
            description: t('capabilities.prediction.description')
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: t('capabilities.personalization.title'),
            description: t('capabilities.personalization.description')
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: t('capabilities.analysis.title'),
            description: t('capabilities.analysis.description')
        }
    ];

    return (
        <main className="pt-20">
            <div className="absolute top-4 left-35">
                <Link href="/" className="flex items-center">
                    <h1 className="text-primary text-2xl font-bold">
                        AImarat
                    </h1>
                </Link>
            </div>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-primary-dark  py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Brain className="w-16 h-16 mx-auto mb-8" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                            {t('hero.description')}
                        </p>
                        <Button variant="outline" size="lg">
                            {t('hero.cta')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-20 bg-neutral-lightGray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {capabilities.map((capability, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="text-primary mb-4">
                                    {capability.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
                                <p className="text-neutral-darkGray">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('applications.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {["vision", "language", "prediction", "recommendation"].map((key) => (
                            <div key={key} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                                <h3 className="text-xl font-semibold mb-3">{t(`applications.${key}.title`)}</h3>
                                <p className="text-neutral-darkGray">{t(`applications.${key}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-neutral-black  py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t('cta.description')}
                    </p>
                    <Button variant="primary" size="lg">
                        {t('cta.button')}
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default AIPage;