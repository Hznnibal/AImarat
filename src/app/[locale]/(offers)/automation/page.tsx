'use client'

import { ArrowRight, BarChart3, CheckCircle, Clock, FileText, Play, Settings, TrendingUp, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

const HRAutomationService = () => {
    const [activeProcess, setActiveProcess] = useState(0);
    const t = useTranslations();

    const processes = [
        {
            title: t('services.hrAutomation.processes.recruitment.title'),
            description: t('services.hrAutomation.processes.recruitment.description'),
            steps: [
                t('services.hrAutomation.processes.recruitment.steps.step1'),
                t('services.hrAutomation.processes.recruitment.steps.step2'),
                t('services.hrAutomation.processes.recruitment.steps.step3'),
                t('services.hrAutomation.processes.recruitment.steps.step4'),
            ],
            savings: '70%',
            icon: Users
        },
        {
            title: t('services.hrAutomation.processes.onboarding.title'),
            description: t('services.hrAutomation.processes.onboarding.description'),
            steps: [
                t('services.hrAutomation.processes.onboarding.steps.step1'),
                t('services.hrAutomation.processes.onboarding.steps.step2'),
                t('services.hrAutomation.processes.onboarding.steps.step3'),
                t('services.hrAutomation.processes.onboarding.steps.step4'),
            ],
            savings: '60%',
            icon: FileText
        },
        {
            title: t('services.hrAutomation.processes.performance.title'),
            description: t('services.hrAutomation.processes.performance.description'),
            steps: [
                t('services.hrAutomation.processes.performance.steps.step1'),
                t('services.hrAutomation.processes.performance.steps.step2'),
                t('services.hrAutomation.processes.performance.steps.step3'),
                t('services.hrAutomation.processes.performance.steps.step4'),
            ],
            savings: '50%',
            icon: BarChart3
        }
    ];

    const benefits = [
        {
            icon: Clock,
            title: t('services.hrAutomation.features.time.title'),
            description: t('services.hrAutomation.features.time.description'),
            metric: '15h/week',
            color: 'blue'
        },
        {
            icon: TrendingUp,
            title: t('services.hrAutomation.features.efficiency.title'),
            description: t('services.hrAutomation.features.efficiency.description'),
            metric: '+300%',
            color: 'green'
        },
        {
            icon: Users,
            title: t('services.hrAutomation.features.experience.title'),
            description: t('services.hrAutomation.features.experience.description'),
            metric: '95%',
            color: 'purple'
        },
        {
            icon: Settings,
            title: t('services.hrAutomation.features.accuracy.title'),
            description: t('services.hrAutomation.features.accuracy.description'),
            metric: '99%',
            color: 'amber'
        }
    ];

    const integrations = [
        {
            name: 'Zapier',
            description: t('services.hrAutomation.integrations.zapier'),
            logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
            category: 'Automation Platform'
        },
        {
            name: 'Make (Integromat)',
            description: t('services.hrAutomation.integrations.make'),
            logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
            category: 'Visual Automation'
        },
        {
            name: 'LinkedIn',
            description: t('services.hrAutomation.integrations.linkedin'),
            logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
            category: 'Recruitment'
        },
        {
            name: 'Slack',
            description: t('services.hrAutomation.integrations.slack'),
            logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
            category: 'Communication'
        },
        {
            name: 'Google Workspace',
            description: t('services.hrAutomation.integrations.google'),
            logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
            category: 'Productivity'
        },
        {
            name: 'Microsoft 365',
            description: t('services.hrAutomation.integrations.microsoft'),
            logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100',
            category: 'Enterprise'
        }
    ];



    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 via-white to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-6">
                                <Zap className="w-4 h-4 mr-2" />
                                {t('services.hrAutomation.badge')}
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {t.rich('services.hrAutomation.hero.title', {
                                    automate: (chunks) => (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-blue-600">
                                            {chunks}
                                        </span>
                                    )
                                })}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {t('services.hrAutomation.hero.description')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                    <Play className="w-5 h-5" />
                                    <span>{t('services.hrAutomation.hero.demoButton')}</span>
                                </button>

                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-amber-600 hover:text-amber-600 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                    <span>{t('services.hrAutomation.hero.auditButton')}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-600 mb-1">70%</div>
                                    <div className="text-sm text-gray-600">{t('services.hrAutomation.stats.timeReduction')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">2-4</div>
                                    <div className="text-sm text-gray-600">{t('services.hrAutomation.stats.weeks')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600 mb-1">ROI 300%</div>
                                    <div className="text-sm text-gray-600">{t('services.hrAutomation.stats.roi')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Automation Flow Visualization */}
                        <div className="mt-12 lg:mt-0 relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 mx-4 lg:mx-0">
                                <div className="text-center mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {t('services.hrAutomation.demo.title')}
                                    </h3>
                                    <p className="text-sm text-gray-600">{t('services.hrAutomation.demo.subtitle')}</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">1</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">CV received on LinkedIn</p>
                                            <p className="text-xs text-gray-600">Automatic trigger</p>
                                        </div>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                                        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">2</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">AI profile analysis</p>
                                            <p className="text-xs text-gray-600">Compatibility score: 87%</p>
                                        </div>
                                        <div className="animate-spin w-5 h-5 border-2 border-amber-500 border-t-transparent rounded-full"></div>
                                    </div>

                                    <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm font-bold">3</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-900">Automatic email sent</p>
                                            <p className="text-xs text-gray-600">Interview scheduled in Calendly</p>
                                        </div>
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Automated Processes Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.hrAutomation.processes.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.hrAutomation.processes.subtitle')}
                        </p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
                            {processes.map((process, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveProcess(index)}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeProcess === index
                                        ? 'bg-amber-500 text-white shadow-md'
                                        : 'text-gray-600 hover:text-amber-600'
                                        }`}
                                >
                                    {process.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                            <div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center">
                                        {React.createElement(processes[activeProcess].icon, { className: "w-8 h-8 text-amber-600" })}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900">{processes[activeProcess].title}</h3>
                                        <p className="text-amber-600 font-medium">
                                            {processes[activeProcess].savings} {t('services.hrAutomation.processes.timeSaved')}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {processes[activeProcess].description}
                                </p>

                                <div className="space-y-4">
                                    {processes[activeProcess].steps.map((step, idx) => (
                                        <div key={idx} className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center mt-1">
                                                <span className="text-white text-xs font-bold">{idx + 1}</span>
                                            </div>
                                            <p className="text-gray-700">{step}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 lg:mt-0">
                                <Image
                                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt={processes[activeProcess].title}
                                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                                    width={800}
                                    height={320}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.hrAutomation.features.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.hrAutomation.features.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-start space-x-4">
                                    <div className={`w-12 h-12 bg-${benefit.color}-100 rounded-xl flex items-center justify-center`}>
                                        <benefit.icon className={`w-6 h-6 text-${benefit.color}-600`} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                                            <span className={`text-2xl font-bold text-${benefit.color}-600`}>{benefit.metric}</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.hrAutomation.integrations.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.hrAutomation.integrations.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {integrations.map((integration, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center space-x-4 mb-4">
                                    <Image
                                        src={integration.logo}
                                        alt={integration.name}
                                        width={50}
                                        height={50}
                                        className="object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-bold text-gray-900">{integration.name}</h3>
                                        <p className="text-sm text-gray-500">{integration.category}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">{integration.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t('services.hrAutomation.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('services.hrAutomation.cta.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                            <Zap className="w-5 h-5" />
                            <span>{t('services.hrAutomation.cta.audit')}</span>
                        </button>

                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                            <span>{t('services.hrAutomation.cta.contact')}</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HRAutomationService;