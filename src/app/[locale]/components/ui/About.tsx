import { Award, Globe, Lightbulb, Target, TrendingUp, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

const About = () => {
    const t = useTranslations();

    const stats = [
        { icon: Users, label: t('about.stats.clients'), value: '50+', color: 'blue' },
        { icon: Target, label: t('about.stats.projects'), value: '85+', color: 'amber' },
        { icon: Award, label: t('about.stats.success'), value: '98%', color: 'green' },
        { icon: TrendingUp, label: t('about.stats.roi'), value: '300%', color: 'purple' }
    ];

    const values = [
        {
            icon: Lightbulb,
            title: t('about.values.innovation.title'),
            description: t('about.values.innovation.description')
        },
        {
            icon: Users,
            title: t('about.values.proximity.title'),
            description: t('about.values.proximity.description')
        },
        {
            icon: Globe,
            title: t('about.values.expertise.title'),
            description: t('about.values.expertise.description')
        }
    ];

    const team = [
        {
            name: t('about.team.founder.title'),
            expertise: t('about.team.founder.expertise'),
            experience: t('about.team.founder.experience'),
            specialities: t('about.team.founder.specialities')
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t.rich('about.title', {
                            aimarat: (chunks) => (
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-600">
                                    {chunks}
                                </span>
                            )
                        })}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('about.subtitle')}
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-3xl p-8 lg:p-12 mb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('about.mission.title')}</h3>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            {t('about.mission.description')}
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl shadow-md mb-4">
                                        <value.icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                                    <p className="text-gray-600 text-sm">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-8 mb-16">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow">
                            <div className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-lg mb-4`}>
                                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                            <div className="text-gray-600 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Team & Expertise */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                    {/* Team */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('about.team.title')}</h3>

                        {team.map((member, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl p-8 mb-8">
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-amber-500 rounded-xl flex items-center justify-center">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h4>
                                        <p className="text-blue-600 text-sm font-medium mb-2">{member.expertise}</p>
                                        <p className="text-gray-600 text-sm mb-4">{member.experience}</p>

                                        <div className="space-y-2">
                                            <h5 className="text-sm font-semibold text-gray-900">
                                                {t('about.team.specialitiesLabel')}
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {(Array.isArray(member.specialities)
                                                    ? member.specialities
                                                    : String(member.specialities).split(',').map(s => s.trim())
                                                ).map((speciality, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border">
                                                        {speciality}
                                                    </span>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Why Choose Us */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">{t('about.whyChoose.title')}</h3>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                                    <Target className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">{t('about.whyChoose.custom.title')}</h4>
                                    <p className="text-gray-600 text-sm">{t('about.whyChoose.custom.description')}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mt-1">
                                    <Globe className="w-4 h-4 text-amber-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">{t('about.whyChoose.bilingual.title')}</h4>
                                    <p className="text-gray-600 text-sm">{t('about.whyChoose.bilingual.description')}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">{t('about.whyChoose.proven.title')}</h4>
                                    <p className="text-gray-600 text-sm">{t('about.whyChoose.proven.description')}</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mt-1">
                                    <Award className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">{t('about.whyChoose.support.title')}</h4>
                                    <p className="text-gray-600 text-sm">{t('about.whyChoose.support.description')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;