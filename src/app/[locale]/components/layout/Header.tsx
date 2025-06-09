import { Bot, Menu, X, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';



const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const t = useTranslations();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-900">{t('common.aimarat')}</h1>
                            <p className="text-xs text-gray-600">{t('common.tagline')}</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.home')}</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.services')}</a>
                        <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.portfolio')}</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.about')}</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.contact')}</a>
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center space-x-2">
                            <Zap className="w-4 h-4" />
                            <span>{t('common.requestDemo')}</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            className="p-2"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-100">
                        <nav className="flex flex-col space-y-4">
                            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.home')}</a>
                            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.services')}</a>
                            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.portfolio')}</a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.about')}</a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">{t('navigation.contact')}</a>
                            <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 inline-flex items-center justify-center space-x-2 mt-4">
                                <Zap className="w-4 h-4" />
                                <span>{t('common.requestDemo')}</span>
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;