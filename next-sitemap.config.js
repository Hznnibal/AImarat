/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://a-imarat.vercel.app", // Remplace si tu as un domaine custom
  generateRobotsTxt: true, // ← Génère un fichier robots.txt automatiquement
  sitemapSize: 5000, // (optionnel) divise le sitemap si tu as >5000 URLs
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/404", "/500", "/_not-found"], // Exclure les pages systèmes
  alternateRefs: [
    {
      href: "https://a-imarat.vercel.app",
      hreflang: "x-default",
    },
    {
      href: "https://a-imarat.vercel.app/fr",
      hreflang: "fr",
    },
    {
      href: "https://a-imarat.vercel.app/en",
      hreflang: "en",
    },
    {
      href: "https://a-imarat.vercel.app/ar",
      hreflang: "ar",
    },
    // Ajoute ici d'autres locales si nécessaire
  ],
  transform: async (config, path) => {
    // Applique une transformation personnalisée pour toutes les routes
    return {
      loc: path, // URL absolue
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
