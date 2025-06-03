import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
    const t = useTranslations('contact.form');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
                setSubmitMessage(t('success'));
                setFormData({ name: '', email: '', message: '' });
            } else {
                const data = await res.json();
                setSubmitMessage(data.message || 'Erreur lors de l\'envoi.');
            }
        } catch (error) {
            setSubmitMessage('Erreur réseau.');
        } finally {
            setIsSubmitting(false);

            setTimeout(() => {
                setSubmitMessage('');
            }, 5000);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4" noValidate>
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-darkGray mb-1"
                >
                    {t('name')}
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder={t('namePlaceholder')}
                />
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-darkGray mb-1"
                >
                    {t('email')}
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder={t('emailPlaceholder')}
                />
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-darkGray mb-1"
                >
                    {t('message')}
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder={t('messagePlaceholder')}
                />
            </div>

            <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
            >
                {isSubmitting ? t('sending') : t('submit')}
            </Button>

            {submitMessage && (
                <div className="p-3 bg-green-50 text-green-800 rounded-md text-sm">
                    {submitMessage}
                </div>
            )}
        </form>
    );
};

export default ContactForm;
