import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin', 'latin-ext'],
    display: 'swap',
    preload: true,
    variable: '--font-inter'
});

export const metadata: Metadata = {
    metadataBase: new URL('https://a-imarat.com'),
    title: {
        default: 'AImarat | Artificial Intelligence & Innovation',
        template: '%s | AImarat'
    },
    description: 'AImarat - Your partner in artificial intelligence and technological innovation. Custom AI solutions, digital transformation consulting, and smart application development.',
    keywords: [
        // Artificial Intelligence
        'artificial intelligence',
        'AI',
        'AI solutions',
        'machine learning',
        'deep learning',
        'artificial intelligence consulting',
        'enterprise AI solutions',

        // Innovation & Tech
        'technological innovation',
        'digital transformation',
        'AI consulting',
        'AI development',
        'intelligent automation',
        'AI chatbot',
        'data analysis',
        'big data',

        // Services
        'AI consultant',
        'AI developer',
        'custom solutions',
        'AI integration',
        'process optimization',

        // Arabic keywords (optional, keep if needed)
        'الذكاء الاصطناعي',
        'حلول الذكاء الاصطناعي',
        'التحول الرقمي',
        'الابتكار التقني',

        // Brand
        'AImarat',
        'AI Marat'
    ],
    authors: [{ name: 'AImarat Team' }],
    creator: 'AImarat',
    publisher: 'AImarat',
    category: 'Technology',

    openGraph: {
        title: 'AImarat - Artificial Intelligence & Innovation',
        description: 'Custom AI solutions to accelerate your digital transformation and optimize your business processes.',
        url: 'https://a-imarat.com',
        siteName: 'AImarat',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'AImarat - AI Solutions & Innovation',
                type: 'image/png',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'AImarat - Artificial Intelligence & Innovation',
        description: 'Custom AI solutions for your business. Consulting, development, and AI integration.',
        images: ['/twitter-image.png'],
        creator: '@aimarat',
        site: '@aimarat',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    alternates: {
        canonical: 'https://a-imarat.com',
        languages: {
            'en': 'https://a-imarat.com/en',
            'fr': 'https://a-imarat.com/fr',
            'ar': 'https://a-imarat.com/ar',
            'x-default': 'https://a-imarat.com',
        },
    },

    verification: {
        google: 'google-site-verification=lbh9qFBojAKaWVxVPv9B2X6zsUcrUOEXezKIQGWNxKI',
    },

    icons: {
        icon: [
            { url: '/AI-MARAT.png', type: 'image/svg+xml' },
        ],
        shortcut: '/AI-MARAT.png',
    },

    manifest: '/manifest.json',
};

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

                {/* Theme color and mobile config */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

                {/* JSON-LD structured data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "AImarat",
                            "url": "https://a-imarat.com",
                            "logo": "https://a-imarat.com/logo.png",
                            "description": "Artificial intelligence and technological innovation solutions",
                            "foundingDate": "2024",
                            "sameAs": [
                                "https://linkedin.com/company/aimarat",
                                "https://twitter.com/aimarat"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+33-X-XX-XX-XX-XX",
                                "contactType": "customer service",
                                "availableLanguage": ["English", "French", "Arabic"]
                            },
                            "areaServed": "Worldwide",
                            "serviceType": [
                                "Artificial Intelligence",
                                "AI Consulting",
                                "AI Application Development",
                                "Digital Transformation"
                            ]
                        }),
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "name": "AImarat",
                            "url": "https://a-imarat.com",
                            "potentialAction": {
                                "@type": "SearchAction",
                                "target": "https://a-imarat.com/search?q={search_term_string}",
                                "query-input": "required name=search_term_string"
                            }
                        }),
                    }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                <main>{children}</main>
            </body>
        </html>
    );
}
