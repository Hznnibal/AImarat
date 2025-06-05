/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.a-imarat.com", // Ton domaine principal (sans www si tu utilises a-imarat.com)
  generateRobotsTxt: true, // Génère aussi un robots.txt automatiquement
  sitemapSize: 5000, // Découpe si +5000 URLs
  changefreq: "weekly", // Fréquence de changement par défaut
  priority: 0.7, // Priorité par défaut
  exclude: ["/404", "/500", "/_not-found"], // Exclure pages système
  alternateRefs: [
    // Gestion des langues (hreflang)
    {
      href: "https://www.a-imarat.com",
      hreflang: "x-default",
    },
    {
      href: "https://www.a-imarat.com/fr",
      hreflang: "fr",
    },
    {
      href: "https://www.a-imarat.com/en",
      hreflang: "en",
    },
    {
      href: "https://www.a-imarat.com/ar",
      hreflang: "ar",
    },
  ],

  transform: async (config, path) => {
    // Personnalisation des URLs et des priorités
    return {
      loc: config.siteUrl + path, // URL absolue (ex : https://a-imarat.com/fr)
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
