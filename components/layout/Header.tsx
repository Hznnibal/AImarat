'use client'

import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Offres', href: '#services' },
        { label: 'Démo', href: '#demo' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <h1 className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        AImarat
                    </h1>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`font-medium hover:text-primary transition-colors ${isScrolled ? 'text-neutral-darkGray' : 'text-white'
                                }`}
                        >
                            {item.label}
                        </a>
                    ))}
                    <Button variant={isScrolled ? 'primary' : 'outline'} size="md">
                        Demander une démo
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute w-full">
                    <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-neutral-darkGray font-medium py-2 hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <Button variant="primary" size="md" className="w-full">
                            Demander une démo
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;