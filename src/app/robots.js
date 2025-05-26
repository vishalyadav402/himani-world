export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/images','/components','/fonts'],
      },
      sitemap: 'https://himaniworldinfosol.com/sitemap.xml',
    }
  }