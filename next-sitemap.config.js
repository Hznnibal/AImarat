/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://a-imarat.com", // Ton domaine personnalisé
  generateRobotsTxt: true, // Génère automatiquement robots.txt
  sitemapSize: 5000, // Divise le sitemap si > 5000 URLs (optionnel)
  changefreq: "weekly", // Fréquence de changement des pages
  priority: 0.7, // Priorité par défaut des URLs
  exclude: ["/404", "/500", "/_not-found"], // Pages à exclure du sitemap
  alternateRefs: [
    // Versions linguistiques pour hreflang
    {
      href: "https://a-imarat.com",
      hreflang: "x-default",
    },
    {
      href: "https://a-imarat.com/fr",
      hreflang: "fr",
    },
    {
      href: "https://a-imarat.com/en",
      hreflang: "en",
    },
    {
      href: "https://a-imarat.com/ar",
      hreflang: "ar",
    },
  ],
  transform: async (config, path) => {
    // Personnalisation des URLs dans le sitemap
    return {
      loc: path, // URL relative sera transformée en URL absolue par next-sitemap
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
