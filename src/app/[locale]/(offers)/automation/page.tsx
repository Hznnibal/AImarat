import { Clock, Cog, Shield, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Button from '../../components/ui/Button';
import '../../globals.css';

const AutomationPage: React.FC = () => {
    const t = useTranslations();

    const benefits = [
        {
            icon: <Clock className="w-6 h-6" />,
            title: t('automation.benefits.time.title'),
            description: t('automation.benefits.time.description')
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: t('automation.benefits.productivity.title'),
            description: t('automation.benefits.productivity.description')
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: t('automation.benefits.accuracy.title'),
            description: t('automation.benefits.accuracy.description')
        }
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <div className="absolute top-4 left-35">
                <Link href="/" className="flex items-center">
                    <h1 className="text-primary text-2xl font-bold">
                        AImarat
                    </h1>
                </Link>
            </div>
            <section className="bg-gradient-to-r from-primary to-primary-dark py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <Cog className="w-16 h-16 mx-auto mb-8" />
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('automation.hero.title')}
                        </h1>
                        <p className="text-xl mb-8 opacity-90">
                            {t('automation.hero.description')}
                        </p>
                        <Button variant="outline" size="lg">
                            {t('automation.hero.cta')}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-neutral-lightGray">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="text-primary mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                                <p className="text-neutral-darkGray">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        {t('automation.solutions.title')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                            <h3 className="text-xl font-semibold mb-3">{t('automation.solutions.hr.title')}</h3>
                            <p className="text-neutral-darkGray">
                                {t('automation.solutions.hr.description')}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                            <h3 className="text-xl font-semibold mb-3">{t('automation.solutions.finance.title')}</h3>
                            <p className="text-neutral-darkGray">
                                {t('automation.solutions.finance.description')}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                            <h3 className="text-xl font-semibold mb-3">{t('automation.solutions.marketing.title')}</h3>
                            <p className="text-neutral-darkGray">
                                {t('automation.solutions.marketing.description')}
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                            <h3 className="text-xl font-semibold mb-3">{t('automation.solutions.it.title')}</h3>
                            <p className="text-neutral-darkGray">
                                {t('automation.solutions.it.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-neutral-black  py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        {t('automation.cta.title')}
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        {t('automation.cta.description')}
                    </p>
                    <Button variant="primary" size="lg">
                        {t('automation.cta.button')}
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default AutomationPage;
