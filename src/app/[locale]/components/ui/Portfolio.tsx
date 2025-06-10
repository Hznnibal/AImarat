import { ExternalLink, Play, Star, TrendingUp, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Portfolio = () => {
    const [activeDemo, setActiveDemo] = useState(0);
    const t = useTranslations();

    const demos = [
        {
            title: t('portfolio.demos.banking.title'),
            category: t('portfolio.categories.banking'),
            description: t('portfolio.demos.banking.description'),
            image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800',
            metrics: [
                { label: t('portfolio.demos.banking.metrics.responseTime'), value: '85%' },
                { label: t('portfolio.demos.banking.metrics.satisfaction'), value: '4.8/5' },
                { label: t('portfolio.demos.banking.metrics.requests'), value: '2,500+' }
            ],
            technologies: ['GPT-4', 'Arabic NLP', 'React', 'FastAPI'],
            results: t('portfolio.demos.banking.results'),
            link: '/chatbots'
        },
        {
            title: t('portfolio.demos.hr.title'),
            category: t('portfolio.categories.hr'),
            description: t('portfolio.demos.hr.description'),
            image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
            metrics: [
                { label: t('portfolio.demos.hr.metrics.timeGain'), value: '70%' },
                { label: t('portfolio.demos.hr.metrics.costReduction'), value: '45%' },
                { label: t('portfolio.demos.hr.metrics.successRate'), value: '92%' }
            ],
            technologies: ['Zapier', 'Make', 'AI Screening', 'Integration APIs'],
            results: t('portfolio.demos.hr.results'),
            link: '/automation'
        },
        {
            title: t('portfolio.demos.documents.title'),
            category: t('portfolio.categories.documents'),
            description: t('portfolio.demos.documents.description'),
            image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
            metrics: [
                { label: t('portfolio.demos.documents.metrics.accuracy'), value: '98%' },
                { label: t('portfolio.demos.documents.metrics.speed'), value: '10x' },
                { label: t('portfolio.demos.documents.metrics.processed'), value: '50k+' }
            ],
            technologies: ['LangChain', 'Vector DB', 'OCR', 'Semantic Search'],
            results: t('portfolio.demos.documents.results'),
            link: '/ai'
        }
    ];

    const testimonials = [
        {
            name: t('portfolio.testimonials.clients.ahmed.name'),
            position: t('portfolio.testimonials.clients.ahmed.position'),
            comment: t('portfolio.testimonials.clients.ahmed.comment'),
            rating: 5,
            company: t('portfolio.testimonials.clients.ahmed.company')
        },
        {
            name: t('portfolio.testimonials.clients.sarah.name'),
            position: t('portfolio.testimonials.clients.sarah.position'),
            comment: t('portfolio.testimonials.clients.sarah.comment'),
            rating: 5,
            company: t('portfolio.testimonials.clients.sarah.company')
        },
        {
            name: t('portfolio.testimonials.clients.omar.name'),
            position: t('portfolio.testimonials.clients.omar.position'),
            comment: t('portfolio.testimonials.clients.omar.comment'),
            rating: 5,
            company: t('portfolio.testimonials.clients.omar.company')
        }
    ];

    return (
        <section id="portfolio" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t.rich('portfolio.title', {
                            achievements: (chunks) => (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                                    {chunks}
                                </span>
                            )
                        })}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('portfolio.subtitle')}
                    </p>
                </div>

                {/* Demo Selector */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {demos.map((demo, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveDemo(index)}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${activeDemo === index
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {demo.category}
                        </button>
                    ))}
                </div>

                {/* Active Demo */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20">
                    <div className="lg:grid lg:grid-cols-2">
                        {/* Demo Image */}
                        <div className="relative">
                            <Image
                                src={demos[activeDemo].image}
                                alt={demos[activeDemo].title}
                                width={800} // à adapter selon ta maquette
                                height={400} // idem, Next nécessite width/height OU fill
                                className="w-full h-64 lg:h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-amber-600/20"></div>
                            <button className="absolute inset-0 flex items-center justify-center group">
                                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                    <Play className="w-8 h-8 text-blue-600 ml-1" />
                                </div>
                            </button>
                        </div>

                        {/* Demo Content */}
                        <div className="p-8 lg:p-12">
                            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                                {demos[activeDemo].category}
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                                {demos[activeDemo].title}
                            </h3>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {demos[activeDemo].description}
                            </p>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4 mb-6">
                                {demos[activeDemo].metrics.map((metric, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                                        <div className="text-xs text-gray-600">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Technologies */}
                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('portfolio.technologies')}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {demos[activeDemo].technologies.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Results */}
                            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-lg p-4 mb-6">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                                    {t('portfolio.results')}
                                </h4>
                                <p className="text-sm text-gray-700">{demos[activeDemo].results}</p>
                            </div>

                            <Link href={demos[activeDemo].link}>
                                <div className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2">
                                    <span>{t('portfolio.viewDemo')}</span>
                                    <ExternalLink className="w-4 h-4" />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div>
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        {t('portfolio.testimonials.title')}
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>

                                <p className="text-gray-700 mb-6 italic leading-relaxed">
                                    "{testimonial.comment}"
                                </p>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-amber-500 rounded-full flex items-center justify-center mr-4">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                                        <p className="text-xs text-blue-600">{testimonial.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;