import { ArrowRight, Bot, TrendingUp, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

const Hero = () => {
    const t = useTranslations();

    return (
        <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                            <Bot className="w-4 h-4 mr-2" />
                            {t('hero.badge')}
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            {t.rich('hero.title', {
                                business: (chunks) => (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                                        {chunks}
                                    </span>
                                ),
                                results: (chunks) => (
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-blue-600">
                                        {chunks}
                                    </span>
                                )
                            })}
                        </h1>

                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {t('hero.description')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold shadow-lg">
                                <Zap className="w-5 h-5" />
                                <span>{t('hero.startNow')}</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>

                            <a href="#portfolio" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                <span>{t('hero.viewWork')}</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                                <div className="text-sm text-gray-600">{t('hero.stats.satisfaction')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-amber-600 mb-1">60%</div>
                                <div className="text-sm text-gray-600">{t('hero.stats.timeGain')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-600 mb-1">3x</div>
                                <div className="text-sm text-gray-600">{t('hero.stats.roi')}</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="mt-12 lg:mt-0 relative">
                        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 mx-4 lg:mx-0">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <Bot className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <div className="text-sm text-gray-700">AI chatbot activated...</div>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4">
                                    <div className="text-sm text-gray-600 mb-2">مرحباً! كيف يمكنني مساعدتك اليوم؟</div>
                                    <div className="text-sm text-gray-600">Hello! How can I assist you today?</div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-4 h-4 text-amber-600" />
                                    </div>
                                    <div className="text-sm text-gray-700">Analysis in progress...</div>
                                </div>

                                <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg p-4">
                                    <div className="text-sm font-medium text-gray-800 mb-1">Insights générés</div>
                                    <div className="text-xs text-gray-600">+127% d'efficacité détectée</div>
                                </div>
                            </div>
                        </div>

                        {/* Background decorations */}
                        <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400 to-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-gradient-to-br from-amber-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;