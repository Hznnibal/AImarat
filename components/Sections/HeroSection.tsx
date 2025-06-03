'use client'

import React, { useEffect, useRef } from 'react';
import ContactForm from '../ui/ContactForm';

const HeroSection: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (heroRef.current) {
                heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            ref={heroRef}
            id="hero"
            className="relative min-h-screen flex items-center pt-20 pb-16 bg-neutral-black bg-opacity-90 bg-blend-overlay"
            style={{
                backgroundImage: 'url(https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-black to-transparent opacity-80"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-white" data-aos="fade-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Simplifiez votre business, <span className="text-primary">amplifiez vos résultats</span>
                        </h1>

                        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
                            Des solutions d'intelligence artificielle sur mesure pour transformer votre entreprise et automatiser vos processus métier.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#services"
                                className="bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md transition-all duration-300 inline-flex items-center"
                            >
                                Découvrir nos services
                            </a>
                            <a
                                href="#demo"
                                className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 inline-flex items-center"
                            >
                                Demander une démo
                            </a>
                        </div>
                    </div>

                    <div
                        className="bg-white p-6 md:p-8 rounded-lg shadow-xl"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-neutral-black">Contactez-nous</h2>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;