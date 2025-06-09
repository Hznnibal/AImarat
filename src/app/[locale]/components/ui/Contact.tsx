import { Calendar, CheckCircle, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const t = useTranslations();

    const [, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSubmitMessage(t('contact.success'));
                setFormData({ name: '', email: '', message: '', company: '', service: '' });
            } else {
                const data = await res.json();
                setSubmitMessage(data.message || 'Erreur lors de l\'envoi.');
            }
        } catch {
            setSubmitMessage('Erreur réseau.');
        } finally {
            setIsSubmitting(false);

            setTimeout(() => {
                setSubmitMessage('');
            }, 5000);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: t('contact.info.email.title'),
            details: t('contact.info.email.details'),
            action: t('contact.info.email.action'),
            color: 'blue'
        },
        {
            icon: Phone,
            title: t('contact.info.phone.title'),
            details: t('contact.info.phone.details'),
            action: t('contact.info.phone.action'),
            color: 'green'
        },
        {
            icon: MapPin,
            title: t('contact.info.address.title'),
            details: t('contact.info.address.details'),
            action: t('contact.info.address.action'),
            color: 'amber'
        }
    ];

    const services = [
        t('contact.services.chatbot'),
        t('contact.services.automation'),
        t('contact.services.analysis'),
        t('contact.services.consulting'),
        t('contact.services.training'),
        t('contact.services.other')
    ];

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t.rich('contact.title', {
                            enterprise: (chunks) => (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                                    {chunks}
                                </span>
                            )
                        })}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="lg:grid lg:grid-cols-3 lg:gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('contact.form.title')}</h3>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{t('contact.success.title')}</h4>
                                    <p className="text-gray-600 mb-6">{t('contact.success.message')}</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-blue-600 hover:text-blue-700 font-medium"
                                    >
                                        {t('contact.success.newRequest')}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                                {t('contact.form.fullName')} *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder={t('contact.form.placeholders.name')}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                                {t('contact.form.professionalEmail')} *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder={t('contact.form.placeholders.email')}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                                                {t('contact.form.company')} *
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                required
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                                placeholder={t('contact.form.placeholders.company')}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                                                {t('contact.form.serviceInterest')} *
                                            </label>
                                            <select
                                                id="service"
                                                name="service"
                                                required
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                            >
                                                <option value="">{t('contact.form.selectService')}</option>
                                                {services.map((service, index) => (
                                                    <option key={index} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                            {t('contact.form.message')}
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                                            placeholder={t('contact.form.placeholders.message')}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
                                    >
                                        <Send className="w-5 h-5" />
                                        <span>{t('contact.form.submit')}</span>
                                    </button>

                                    {submitMessage && (
                                        <div className="p-3 bg-green-50 text-green-800 rounded-md text-sm">
                                            {submitMessage}
                                        </div>
                                    )}

                                    <p className="text-sm text-gray-500 text-center">
                                        * {t('contact.form.required')}
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Contact Info & CTA */}
                    <div className="mt-12 lg:mt-0 space-y-8">
                        {/* Contact Methods */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 bg-${info.color}-100 rounded-xl flex items-center justify-center`}>
                                            <info.icon className={`w-6 h-6 text-${info.color}-600`} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900">{info.title}</h4>
                                            <p className="text-gray-600 text-sm">{info.details}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                            <h4 className="font-bold text-lg mb-4">{t('contact.quickStart.title')}</h4>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-sm">{t('contact.quickStart.demo')}</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <MessageCircle className="w-5 h-5" />
                                    <span className="text-sm">{t('contact.quickStart.consulting')}</span>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="text-sm">{t('contact.quickStart.quote')}</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-blue-500">
                                <p className="text-sm text-blue-100 mb-4">
                                    {t('contact.quickStart.description')}
                                </p>

                                <div className="text-2xl font-bold mb-1">95%</div>
                                <div className="text-sm text-blue-100">{t('contact.quickStart.satisfaction')}</div>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
                            <h4 className="font-semibold text-amber-900 mb-2">{t('contact.availability.title')}</h4>
                            <p className="text-amber-800 text-sm mb-4">
                                {t('contact.availability.schedule')}<br />
                                {t('contact.availability.response')}
                            </p>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-amber-800 font-medium">{t('contact.availability.online')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;