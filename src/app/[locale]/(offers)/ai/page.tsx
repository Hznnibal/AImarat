'use client'

import { ArrowRight, BarChart3, Brain, CheckCircle, FileSearch, Play, Search, Upload } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState } from 'react';

const DocumentAnalysisService = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const t = useTranslations();

    const features = [
        {
            icon: Search,
            title: t('services.documentAnalysis.features.semantic.title'),
            description: t('services.documentAnalysis.features.semantic.description'),
            demo: {
                query: "Contrats avec clause de résiliation anticipée",
                results: [
                    { title: "Contrat_Commercial_2024.pdf", relevance: 95, highlight: "clause de résiliation anticipée avec préavis de 30 jours" },
                    { title: "Accord_Partenariat_Q1.pdf", relevance: 87, highlight: "résiliation possible en cas de manquement aux obligations" },
                    { title: "Convention_Service_2023.pdf", relevance: 78, highlight: "conditions de rupture anticipée du contrat" }
                ]
            }
        },
        {
            icon: Brain,
            title: t('services.documentAnalysis.features.extraction.title'),
            description: t('services.documentAnalysis.features.extraction.description'),
            demo: {
                query: "Extraction d'entités juridiques",
                results: [
                    { title: "Entités détectées", relevance: 100, highlight: "Société ABC SARL, Montant: 150,000 SAR, Date: 15/03/2024" },
                    { title: "Clauses importantes", relevance: 95, highlight: "Pénalités de retard: 2% par mois, Garantie: 24 mois" },
                    { title: "Obligations parties", relevance: 90, highlight: "Livraison sous 45 jours, Formation incluse" }
                ]
            }
        },
        {
            icon: BarChart3,
            title: t('services.documentAnalysis.features.classification.title'),
            description: t('services.documentAnalysis.features.classification.description'),
            demo: {
                query: "Classification automatique",
                results: [
                    { title: "Contrats commerciaux", relevance: 100, highlight: "47 documents classifiés avec 98% de précision" },
                    { title: "Documents RH", relevance: 95, highlight: "23 contrats de travail et avenants identifiés" },
                    { title: "Factures et devis", relevance: 92, highlight: "156 documents financiers organisés par date" }
                ]
            }
        }
    ];

    const useCases = [
        {
            title: t('services.documentAnalysis.useCases.legal.title'),
            description: t('services.documentAnalysis.useCases.legal.description'),
            benefits: [
                t('services.documentAnalysis.useCases.legal.benefits.benefit1'),
                t('services.documentAnalysis.useCases.legal.benefits.benefit2'),
                t('services.documentAnalysis.useCases.legal.benefits.benefit3'),
                t('services.documentAnalysis.useCases.legal.benefits.benefit4'),
            ],
            image: 'https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=800',
            metrics: { accuracy: '98%', speed: '10x', volume: '50k+' }
        },
        {
            title: t('services.documentAnalysis.useCases.finance.title'),
            description: t('services.documentAnalysis.useCases.finance.description'),
            benefits: [
                t('services.documentAnalysis.useCases.finance.benefits.benefit1'),
                t('services.documentAnalysis.useCases.finance.benefits.benefit2'),
                t('services.documentAnalysis.useCases.finance.benefits.benefit3'),
                t('services.documentAnalysis.useCases.finance.benefits.benefit4'),
            ],
            image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
            metrics: { accuracy: '99%', speed: '15x', volume: '100k+' }
        },
        {
            title: t('services.documentAnalysis.useCases.compliance.title'),
            description: t('services.documentAnalysis.useCases.compliance.description'),
            benefits: [
                t('services.documentAnalysis.useCases.compliance.benefits.benefit1'),
                t('services.documentAnalysis.useCases.compliance.benefits.benefit2'),
                t('services.documentAnalysis.useCases.compliance.benefits.benefit3'),
                t('services.documentAnalysis.useCases.compliance.benefits.benefit4'),
            ],
            image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
            metrics: { accuracy: '97%', speed: '8x', volume: '25k+' }
        }
    ];

    const technologies = [
        {
            name: 'LangChain',
            description: t('services.documentAnalysis.technologies.langchain'),
            category: 'Framework IA'
        },
        {
            name: 'Vector Database',
            description: t('services.documentAnalysis.technologies.vector'),
            category: 'Stockage'
        },
        {
            name: 'OCR Avancé',
            description: t('services.documentAnalysis.technologies.ocr'),
            category: 'Extraction'
        },
        {
            name: 'Transformers',
            description: t('services.documentAnalysis.technologies.transformers'),
            category: 'NLP'
        },
        {
            name: 'Elasticsearch',
            description: t('services.documentAnalysis.technologies.elasticsearch'),
            category: 'Recherche'
        },
        {
            name: 'API REST',
            description: t('services.documentAnalysis.technologies.api'),
            category: 'Intégration'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                                <FileSearch className="w-4 h-4 mr-2" />
                                {t('services.documentAnalysis.badge')}
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                {t.rich('services.documentAnalysis.hero.title', {
                                    intelligent: (chunks) => (
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                                            {chunks}
                                        </span>
                                    )
                                })}
                            </h1>

                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                {t('services.documentAnalysis.hero.description')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                    <Play className="w-5 h-5" />
                                    <span>{t('services.documentAnalysis.hero.demoButton')}</span>
                                </button>

                                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                                    <Upload className="w-5 h-5" />
                                    <span>{t('services.documentAnalysis.hero.testButton')}</span>
                                </button>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                                    <div className="text-sm text-gray-600">{t('services.documentAnalysis.stats.accuracy')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600 mb-1">10x</div>
                                    <div className="text-sm text-gray-600">{t('services.documentAnalysis.stats.speed')}</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600 mb-1">50k+</div>
                                    <div className="text-sm text-gray-600">{t('services.documentAnalysis.stats.processed')}</div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Demo */}
                        <div className="mt-12 lg:mt-0 relative">
                            <div className="bg-white rounded-2xl shadow-2xl p-6 mx-4 lg:mx-0">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {t('services.documentAnalysis.demo.title')}
                                    </h3>
                                    <div className="flex space-x-1">
                                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                                        <Search className="w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            value={features[activeFeature].demo.query}
                                            readOnly
                                            className="flex-1 bg-transparent text-gray-700 outline-none"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {features[activeFeature].demo.results.map((result, idx) => (
                                        <div key={idx} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                            <div className="flex items-center justify-between mb-2">
                                                <h4 className="font-medium text-gray-900 text-sm">{result.title}</h4>
                                                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                    {result.relevance}%
                                                </span>
                                            </div>
                                            <p className="text-xs text-gray-600">{result.highlight}</p>
                                        </div>
                                    ))}
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
                            {t('services.documentAnalysis.features.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.documentAnalysis.features.subtitle')}
                        </p>
                    </div>

                    <div className="flex justify-center mb-8">
                        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md">
                            {features.map((feature, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFeature(index)}
                                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${activeFeature === index
                                        ? 'bg-green-500 text-white shadow-md'
                                        : 'text-gray-600 hover:text-green-600'
                                        }`}
                                >
                                    <feature.icon className="w-4 h-4" />
                                    <span>{feature.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-4">
                                {React.createElement(features[activeFeature].icon, { className: "w-8 h-8 text-green-600" })}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{features[activeFeature].title}</h3>
                            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                {features[activeFeature].description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.documentAnalysis.useCases.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.documentAnalysis.useCases.subtitle')}
                        </p>
                    </div>

                    <div className="space-y-16">
                        {useCases.map((useCase, index) => (
                            <div key={index} className={`lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>

                                    {/* Metrics */}
                                    <div className="grid grid-cols-3 gap-4 mb-6">
                                        <div className="text-center p-4 bg-green-50 rounded-lg">
                                            <div className="text-2xl font-bold text-green-600 mb-1">{useCase.metrics.accuracy}</div>
                                            <div className="text-xs text-gray-600">Précision</div>
                                        </div>
                                        <div className="text-center p-4 bg-blue-50 rounded-lg">
                                            <div className="text-2xl font-bold text-blue-600 mb-1">{useCase.metrics.speed}</div>
                                            <div className="text-xs text-gray-600">Plus rapide</div>
                                        </div>
                                        <div className="text-center p-4 bg-purple-50 rounded-lg">
                                            <div className="text-2xl font-bold text-purple-600 mb-1">{useCase.metrics.volume}</div>
                                            <div className="text-xs text-gray-600">Documents</div>
                                        </div>
                                    </div>

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
                                        width={800} // à ajuster selon ton layout
                                        height={320} // idem
                                        className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            {t('services.documentAnalysis.technologies.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('services.documentAnalysis.technologies.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="font-bold text-gray-900">{tech.name}</h3>
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                        {tech.category}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">{tech.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        {t('services.documentAnalysis.cta.title')}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        {t('services.documentAnalysis.cta.description')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                            <Upload className="w-5 h-5" />
                            <span>{t('services.documentAnalysis.cta.test')}</span>
                        </button>

                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2 text-lg font-semibold">
                            <span>{t('services.documentAnalysis.cta.contact')}</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DocumentAnalysisService;