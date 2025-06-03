import { Facebook, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-black py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-primary mb-4">AImarat</h2>
                        <p className="text-neutral-gray mb-4 max-w-xs">
                            Solutions d'intelligence artificielle sur mesure pour simplifier votre business et amplifier vos résultats.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-primary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="text-neutral-gray hover:text-primary transition-colors">Nos services</a>
                            </li>
                            <li>
                                <a href="#demo" className="text-neutral-gray hover:text-primary transition-colors">Demander une démo</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-gray hover:text-primary transition-colors">Mentions légales</a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-gray hover:text-primary transition-colors">Politique de confidentialité</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-primary" />
                                <a href="mailto:contact@aimarat.com" className="text-neutral-gray hover:text-primary transition-colors">
                                    contact@aimarat.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-primary" />
                                <a href="tel:+33123456789" className="text-neutral-gray hover:text-primary transition-colors">
                                    +33 1 23 45 67 89
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-neutral-gray">
                    <p>&copy; {currentYear} AImarat. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;