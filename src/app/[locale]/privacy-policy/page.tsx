import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'Learn how we collect, use, and protect your personal data.',
};

export default function PrivacyPolicyPage() {
    const t = useTranslations('privacy');

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {t('title')}
                    </h1>
                    <p className="text-gray-600">
                        {t('lastUpdated')} {t('updateDate')}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">

                    {/* Introduction */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('introduction.title')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('introduction.content')}
                        </p>
                    </section>

                    {/* Data Collection */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('dataCollection.title')}
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">
                                    {t('dataCollection.personalInfo.title')}
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>{t('dataCollection.personalInfo.name')}</li>
                                    <li>{t('dataCollection.personalInfo.email')}</li>
                                    <li>{t('dataCollection.personalInfo.phone')}</li>
                                    <li>{t('dataCollection.personalInfo.address')}</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-2">
                                    {t('dataCollection.technicalInfo.title')}
                                </h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                                    <li>{t('dataCollection.technicalInfo.ip')}</li>
                                    <li>{t('dataCollection.technicalInfo.browser')}</li>
                                    <li>{t('dataCollection.technicalInfo.device')}</li>
                                    <li>{t('dataCollection.technicalInfo.cookies')}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* How We Use Data */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('dataUsage.title')}
                        </h2>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>{t('dataUsage.services')}</li>
                            <li>{t('dataUsage.communication')}</li>
                            <li>{t('dataUsage.improvement')}</li>
                            <li>{t('dataUsage.legal')}</li>
                            <li>{t('dataUsage.marketing')}</li>
                        </ul>
                    </section>

                    {/* Data Sharing */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('dataSharing.title')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {t('dataSharing.intro')}
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                            <li>{t('dataSharing.serviceProviders')}</li>
                            <li>{t('dataSharing.legal')}</li>
                            <li>{t('dataSharing.business')}</li>
                            <li>{t('dataSharing.consent')}</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('dataSecurity.title')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('dataSecurity.content')}
                        </p>
                    </section>

                    {/* Your Rights */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('rights.title')}
                        </h2>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{t('rights.access')}</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{t('rights.rectification')}</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{t('rights.erasure')}</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{t('rights.portability')}</p>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-700">{t('rights.objection')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('cookies.title')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            {t('cookies.intro')}
                        </p>
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-medium text-gray-800">{t('cookies.essential.title')}</h4>
                                <p className="text-gray-600 text-sm">{t('cookies.essential.description')}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800">{t('cookies.analytics.title')}</h4>
                                <p className="text-gray-600 text-sm">{t('cookies.analytics.description')}</p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-800">{t('cookies.marketing.title')}</h4>
                                <p className="text-gray-600 text-sm">{t('cookies.marketing.description')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Contact */}
                    <section className="border-t pt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('contact.title')}
                        </h2>
                        <div className="bg-gray-50 rounded-lg p-6">
                            <p className="text-gray-700 mb-4">
                                {t('contact.intro')}
                            </p>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>{t('contact.email.label')}:</strong> {t('contact.email.value')}</p>
                                <p><strong>{t('contact.phone.label')}:</strong> {t('contact.phone.value')}</p>
                                <p><strong>{t('contact.address.label')}:</strong> {t('contact.address.value')}</p>
                            </div>
                        </div>
                    </section>

                    {/* Updates */}
                    <section className="border-t pt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                            {t('updates.title')}
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            {t('updates.content')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}