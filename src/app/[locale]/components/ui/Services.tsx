import { ArrowRight, Clock, FileSearch, Globe, MessageCircle, Shield, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Services = () => {
    const t = useTranslations();

    const services = [
        {
            icon: MessageCircle,
            title: t('services.chatbot.title'),
            description: t('services.chatbot.description'),
            features: [
                t('services.chatbot.features.multilingual'),
                t('services.chatbot.features.banking'),
                t('services.chatbot.features.ai'),
                t('services.chatbot.features.analytics')
            ],
            color: 'blue',
            gradient: 'from-blue-500 to-blue-600'
        },
        {
            icon: Zap,
            title: t('services.automation.title'),
            description: t('services.automation.description'),
            features: [
                t('services.automation.features.workflow'),
                t('services.automation.features.integrations'),
                t('services.automation.features.mining'),
                t('services.automation.features.roi')
            ],
            color: 'amber',
            gradient: 'from-amber-500 to-amber-600'
        },
        {
            icon: FileSearch,
            title: t('services.analysis.title'),
            description: t('services.analysis.description'),
            features: [
                t('services.analysis.features.semantic'),
                t('services.analysis.features.ocr'),
                t('services.analysis.features.classification'),
                t('services.analysis.features.api')
            ],
            color: 'green',
            gradient: 'from-green-500 to-green-600'
        }
    ];

    const benefits = [
        {
            icon: Globe,
            title: t('services.benefits.local.title'),
            description: t('services.benefits.local.description')
        },
        {
            icon: Clock,
            title: t('services.benefits.fast.title'),
            description: t('services.benefits.fast.description')
        },
        {
            icon: Shield,
            title: t('services.benefits.secure.title'),
            description: t('services.benefits.secure.description')
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t.rich('services.title', {
                            ai: (chunks) => (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                                    {chunks}
                                </span>
                            )
                        })}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <div className="p-8">
                                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-700">
                                            <div className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-3`}></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:bg-blue-50 group-hover:text-blue-600">
                                    <span>{t('common.learnMore')}</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
                        {t('services.benefits.title')}
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-md mb-4">
                                    <benefit.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;