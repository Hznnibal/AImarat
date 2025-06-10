import { ArrowRight, Bot, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const t = useTranslations();

    const footerLinks = {
        services: [
            t('footer.links.services.chatbots'),
            t('footer.links.services.automation'),
            t('footer.links.services.analysis'),
            t('footer.links.services.consulting'),
            t('footer.links.services.training')
        ],
        company: [
            t('footer.links.company.about'),
            t('footer.links.company.team'),
            t('footer.links.company.careers'),
            t('footer.links.company.partners'),
            t('footer.links.company.blog')
        ],
        support: [
            t('footer.links.support.documentation'),
            t('footer.links.support.help'),
            t('footer.links.support.contact'),
            t('footer.links.support.status'),
            t('footer.links.support.security')
        ]
    };

    const serviceLinks = [
        { label: t('footer.links.services.chatbots'), href: '/chatbots' },
        { label: t('footer.links.services.automation'), href: '/automation' },
        { label: t('footer.links.services.analysis'), href: '/ai' },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">
                                {t('footer.newsletter.title')}
                            </h3>
                            <p className="text-gray-400 text-lg">
                                {t('footer.newsletter.description')}
                            </p>
                        </div>

                        <div className="mt-8 lg:mt-0">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder={t('footer.newsletter.placeholder')}
                                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
                                />
                                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                                    <span>{t('footer.newsletter.subscribe')}</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-2">
                                {t('footer.newsletter.disclaimer')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="lg:grid lg:grid-cols-4 lg:gap-12">
                    {/* Company Info */}
                    <div className="mb-12 lg:mb-0">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">{t('common.aimarat')}</h2>
                                <p className="text-sm text-gray-400">{t('common.tagline')}</p>
                            </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {t('footer.company.description')}
                        </p>


                    </div>

                    {/* Footer Links */}
                    <div className="mb-12 lg:mb-0 ml-auto">
                        <h3 className="font-semibold text-white mb-6">{t('footer.links.services.title')}</h3>
                        <ul className="space-y-3">
                            {serviceLinks.map(({ label, href }, index) => (
                                <li key={index}>
                                    <a href={href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {label}
                                    </a>
                                </li>
                            ))}

                        </ul>
                    </div>

                    <div className="mb-12 lg:mb-0 ml-auto">
                        <h3 className="font-semibold text-white mb-6">Infos</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-4 h-4" />
                                <span className="text-sm">mustaphamejri80@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-4 h-4" />
                                <span className="text-sm">+33 6 44 31 07 95</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">Riyadh, Arabie Saoudite</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} {t('footer.legal.copyright')}
                        </div>

                        <div className="flex items-center space-x-6">
                            <Link href="/privacy-policy">
                                <div className="text-gray-400 hover:text-white text-sm transition-colors">
                                    <span> {t('footer.legal.privacy')}</span>
                                </div>
                            </Link>
                            <Link href="/terms-of-use">
                                <div className="text-gray-400 hover:text-white text-sm transition-colors">
                                    <span> {t('footer.legal.terms')}</span>
                                </div>
                            </Link>

                            {/* Social Links */}
                            <div className="flex items-center space-x-4 ml-6">
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;