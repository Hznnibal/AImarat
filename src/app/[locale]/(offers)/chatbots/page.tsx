import { BarChart, MessageSquare, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Button from '../../components/ui/Button';
import '../../globals.css';

const ChatbotPage: React.FC = () => {
    const t = useTranslations();

    const features = [
        {
            icon: <Users className="w-6 h-6" />,
            title: t('chatbot.features.engagement.title'),
            description: t('chatbot.features.engagement.description')
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: t('chatbot.features.instant.title'),
            description: t('chatbot.features.instant.description')
        },
        {
            icon: <BarChart className="w-6 h-6" />,
            title: t('chatbot.features.analytics.title'),
            description: t('chatbot.features.analytics.description')
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
            <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <MessageSquare className="w-16 h-16 mx-auto mb-8" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('chatbot.hero.title')}
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                            {t('chatbot.hero.description')}
                        </p>
                        <Button variant="outline" size="lg">
                            {t('chatbot.hero.cta')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-neutral-lightGray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-primary mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-neutral-darkGray">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('chatbot.usecases.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {['support', 'leads', 'tech', 'booking'].map((usecaseKey) => (
                            <div key={usecaseKey} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                                <h3 className="text-xl font-semibold mb-3">{t(`chatbot.usecases.${usecaseKey}.title`)}</h3>
                                <p className="text-neutral-darkGray">
                                    {t(`chatbot.usecases.${usecaseKey}.description`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-neutral-black py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        {t('chatbot.cta.title')}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t('chatbot.cta.description')}
                    </p>
                    <Button variant="primary" size="lg">
                        {t('chatbot.cta.button')}
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default ChatbotPage;
