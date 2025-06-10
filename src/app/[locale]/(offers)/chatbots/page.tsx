'use client'

import { ArrowRight, CheckCircle, Globe, MessageCircle, Play, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ChatbotService = () => {
    const t = useTranslations();

    const features = [
        {
            icon: Globe,
            title: t('services.chatbot.features.multilingual.title'),
            description: t('services.chatbot.features.multilingual.description'),
            color: 'blue'
        },
        {
            icon: Shield,
            title: t('services.chatbot.features.security.title'),
            description: t('services.chatbot.features.security.description'),
            color: 'green'
        },
        {
            icon: Zap,
            title: t('services.chatbot.features.integration.title'),
            description: t('services.chatbot.features.integration.description'),
            color: 'amber'
        },
        {
            icon: TrendingUp,
            title: t('services.chatbot.features.analytics.title'),
            description: t('services.chatbot.features.analytics.description'),
            color: 'purple'
        }
    ];

    const useCases = [
        {
            title: t('services.chatbot.useCases.banking.title'),
            description: t('services.chatbot.useCases.banking.description'),
            benefits: [
                t('services.chatbot.useCases.banking.benefits.benefit1'),
                t('services.chatbot.useCases.banking.benefits.benefit2'),
                t('services.chatbot.useCases.banking.benefits.benefit3'),
                t('services.chatbot.useCases.banking.benefits.benefit4'),
            ],
            image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: t('services.chatbot.useCases.ecommerce.title'),
            description: t('services.chatbot.useCases.ecommerce.description'),
            benefits: [
                t('services.chatbot.useCases.ecommerce.benefits.benefit1'),
                t('services.chatbot.useCases.ecommerce.benefits.benefit2'),
                t('services.chatbot.useCases.ecommerce.benefits.benefit3'),
                t('services.chatbot.useCases.ecommerce.benefits.benefit4'),
            ],
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
        },
        {
            title: t('services.chatbot.useCases.support.title'),
            description: t('services.chatbot.useCases.support.description'),
            benefits: [
                t('services.chatbot.useCases.support.benefits.benefit1'),
                t('services.chatbot.useCases.support.benefits.benefit2'),
                t('services.chatbot.useCases.support.benefits.benefit3'),
                t('services.chatbot.useCases.support.benefits.benefit4'),
            ],
            image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
        }
    ];

    const pricing = [
        {
            name: t('services.chatbot.pricing.starter.name'),
            price: t('services.chatbot.pricing.starter.price'),
            description: t('services.chatbot.pricing.starter.description'),
            features: [
                t('services.chatbot.pricing.starter.features.feature1'),
                t('services.chatbot.pricing.starter.features.feature2'),
                t('services.chatbot.pricing.starter.features.feature3'),
                t('services.chatbot.pricing.starter.features.feature4'),
                t('services.chatbot.pricing.starter.features.feature5'),
            ],
            popular: false
        },
        {
            name: t('services.chatbot.pricing.professional.name'),
            price: t('services.chatbot.pricing.professional.price'),
            description: t('services.chatbot.pricing.professional.description'),
            features: [
                t('services.chatbot.pricing.professional.features.feature1'),
                t('services.chatbot.pricing.professional.features.feature2'),
                t('services.chatbot.pricing.professional.features.feature3'),
                t('services.chatbot.pricing.professional.features.feature4'),
                t('services.chatbot.pricing.professional.features.feature5'),
                t('services.chatbot.pricing.professional.features.feature6'),
            ],
            popular: true
        },
        {
            name: t('services.chatbot.pricing.enterprise.name'),
            price: t('services.chatbot.pricing.enterprise.price'),
            description: t('services.chatbot.pricing.enterprise.description'),
            features: [
                t('services.chatbot.pricing.enterprise.features.feature1'),
                t('services.chatbot.pricing.enterprise.features.feature2'),
                t('services.chatbot.pricing.enterprise.features.feature3'),
                t('services.chatbot.pricing.enterprise.features.feature4'),
                t('services.chatbot.pricing.enterprise.features.feature5'),
                t('services.chatbot.pricing.enterprise.features.feature6'),
            ],
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-amber-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                                <MessageCircle className="w-4 h-4 mr-2" />
                                {t('services.chatbot.badge')}
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {t.rich('services.chatbot.hero.title', {
                                    intelligent: (chunks) => (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                                            {chunks}
                                        </span>
                                    )
                                })}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {t('services.chatbot.hero.description')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                    <Play className="w-5 h-5" />
                                    <span>{t('services.chatbot.hero.demoButton')}</span>
                                </button>

                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                    <span>{t('services.chatbot.hero.consultButton')}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                                    <div className="text-sm text-gray-600">{t('services.chatbot.stats.accuracy')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
                                    <div className="text-sm text-gray-600">{t('services.chatbot.stats.availability')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
                                    <div className="text-sm text-gray-600">{t('services.chatbot.stats.reduction')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Demo Preview */}
                        <div className="mt-12 lg:mt-0 relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 mx-4 lg:mx-0">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div className="text-sm text-gray-500">Banking Assistant</div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <MessageCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                                            <p className="text-sm text-gray-800">مرحباً! كيف يمكنني مساعدتك اليوم؟</p>
                                            <p className="text-xs text-gray-600 mt-1">Hello! How can I help you today?</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3 justify-end">
                                        <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                                            <p className="text-sm text-gray-800">أريد معرفة رصيد حسابي</p>
                                        </div>
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                            <Users className="w-4 h-4 text-gray-600" />
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <MessageCircle className="w-4 h-4 text-blue-600" />
                                        </div>
                                        <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                                            <p className="text-sm text-gray-800">رصيد حسابك الجاري: 15,750 ريال سعودي</p>
                                            <p className="text-xs text-gray-600 mt-1">Your current balance: 15,750 SAR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.chatbot.features.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.chatbot.features.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className={`inline-flex items-center justify-center w-12 h-12 bg-${feature.color}-100 rounded-xl mb-6`}>
                                    <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.chatbot.useCases.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.chatbot.useCases.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {useCases.map((useCase, index) => (
                            <div key={index} className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>

                                    <div className="space-y-3">
                                        {useCase.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                                <span className="text-gray-700">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className={`mt-8 lg:mt-0 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <Image
                                        src={useCase.image}
                                        alt={useCase.title}
                                        width={800}
                                        height={320}
                                        className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                                    />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.chatbot.pricing.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.chatbot.pricing.subtitle')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {pricing.map((plan, index) => (
                            <div key={index} className={`bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                            {t('services.chatbot.pricing.popular')}
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                                    <p className="text-gray-600">{plan.description}</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 text-green-500" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${plan.popular
                                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}>
                                    {t('services.chatbot.pricing.getStarted')}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t('services.chatbot.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('services.chatbot.cta.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                            <MessageCircle className="w-5 h-5" />
                            <span>{t('services.chatbot.cta.demo')}</span>
                        </button>

                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                            <span>{t('services.chatbot.cta.contact')}</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ChatbotService;