"use client";

import { useTranslations } from "next-intl";

const PrivacyPolicy: React.FC = () => {
    const t = useTranslations();

    const contactEmail = "mustaphamejri80@gmail.com";

    return (
        <main className="bg-gradient-to-r from-primary to-primary-dark py-8">
            <h1 className="ml-5">{t("privacy.title")}</h1>
            <p className="ml-5">{t("privacy.lastUpdated")}</p>

            <section className="ml-5 bg-gradient-to-r from-primary to-primary-dark py-8">
                <h2>{t("privacy.sections.information.title")}</h2>
                <p>{t("privacy.sections.information.content")}</p>
            </section>

            <section className="ml-5 bg-gradient-to-r from-primary to-primary-dark py-8">
                <h2>{t("privacy.sections.usage.title")}</h2>
                <p>{t("privacy.sections.usage.content")}</p>
            </section>

            <section className="ml-5 bg-gradient-to-r from-primary to-primary-dark py-8">
                <h2>{t("privacy.sections.security.title")}</h2>
                <p>{t("privacy.sections.security.content")}</p>
            </section>

            <section className="ml-5 bg-gradient-to-r from-primary to-primary-dark py-8">
                <h2>{t("privacy.sections.rights.title")}</h2>
                {/* IMPORTANT : on enlève le <p> autour */}
                {t.rich("privacy.sections.rights.content", {
                    email: (chunk) => <a href={`mailto:${contactEmail}`}>{contactEmail}</a>,
                })}
            </section>

            <section className="ml-5 bg-gradient-to-r from-primary to-primary-dark py-8">
                <h2>{t("privacy.sections.changes.title")}</h2>
                <p>{t("privacy.sections.changes.content")}</p>
            </section>

            <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555" }}>
                <p>{t("privacy.footer")}</p>
            </footer>
        </main>
    );
};

export default PrivacyPolicy;
