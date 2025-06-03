import { Brain } from 'lucide-react';
import React from 'react';
import Button from '../ui/Button';

const DemoSection: React.FC = () => {
    return (
        <section id="demo" className="py-20 bg-primary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0 md:mr-8 max-w-xl" data-aos="fade-right">
                        <div className="text-white/90 flex items-center mb-4">
                            <Brain size={40} className="mr-4" />
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Essayez notre solution
                            </h2>
                        </div>

                        <p className="text-white/90 text-lg mb-6">
                            Découvrez comment nos solutions d'IA peuvent transformer votre entreprise. Demandez une démonstration personnalisée adaptée à vos besoins spécifiques.
                        </p>

                        <ul className="text-white/90 space-y-3 mb-8">
                            {['Présentation sur mesure', 'Cas d\'usage concrets', 'Estimation des bénéfices potentiels'].map((item, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="w-5 h-5 rounded-full bg-white text-primary flex items-center justify-center mr-3 text-sm font-bold">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="bg-white text-neutral-black p-8 rounded-lg shadow-lg max-w-md w-full"
                        data-aos="fade-left"
                    >
                        <h3 className="text-2xl font-bold mb-4">Demandez votre démo</h3>
                        <p className="text-neutral-darkGray mb-6">
                            Remplissez le formulaire ci-dessous et notre équipe vous contactera dans les 24 heures.
                        </p>

                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Nom de l'entreprise"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Nom et prénom"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email professionnel"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    placeholder="Téléphone"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                                />
                            </div>

                            <Button variant="primary" size="lg" className="w-full">
                                Réserver ma démo
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;