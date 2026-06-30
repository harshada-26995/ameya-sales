const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.ameyasalescorporation.com';

const products = [
  { slug: 'invisible-grill' },
  { slug: 'upvc-windows' },
  { slug: 'aluminium-windows' },
  { slug: 'glass-railing' },
  { slug: 'ss-railing' },
  { slug: 'mosquito-mesh' },
  { slug: 'bird-net' },
  { slug: 'safety-net' },
  { slug: 'acp-cladding' },
  { slug: 'pergola' }
];

const cities = [
  'pune', 'mumbai', 'nagpur', 'nashik', 'aurangabad', 'solapur', 'amravati',
  'kolhapur', 'sangli', 'satara', 'ratnagiri', 'jalgaon', 'ahmednagar',
  'latur', 'dhule', 'nanded', 'akola', 'osmanabad', 'buldhana', 'yavatmal',
  'wardha', 'beed', 'hingoli', 'parbhani', 'raigad', 'sindhudurg', 'gondia',
  'chandrapur', 'gadchiroli', 'pimpri-chinchwad', 'thane', 'navi-mumbai',
  'kalyan', 'dombivli', 'vasai', 'mira-road', 'bhiwandi', 'panvel', 'lonavala',
  'mahabaleshwar', 'shirdi', 'wai', 'baramati', 'talegaon', 'chakan',
  'hadapsar', 'hinjewadi', 'wakad', 'kharadi', 'viman-nagar', 'baner',
  'kothrud', 'aundh', 'shivajinagar'
];

const primaryProducts = ['invisible-grill', 'upvc-windows', 'aluminium-windows', 'glass-railing', 'ss-railing', 'mosquito-mesh', 'bird-net', 'safety-net'];

const today = new Date().toISOString().split('T')[0];
const urls = [];

// Static pages
const staticPages = [
  { loc: '/', changefreq: 'daily', priority: 1.0 },
  { loc: '/about', changefreq: 'monthly', priority: 0.8 },
  { loc: '/products', changefreq: 'weekly', priority: 0.9 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
  { loc: '/testimonials', changefreq: 'weekly', priority: 0.7 },
  { loc: '/blog', changefreq: 'daily', priority: 0.8 },
  { loc: '/calculator', changefreq: 'monthly', priority: 0.7 },
  { loc: '/faq', changefreq: 'monthly', priority: 0.7 },
  { loc: '/projects', changefreq: 'weekly', priority: 0.7 },
  { loc: '/privacy-policy', changefreq: 'yearly', priority: 0.3 },
  { loc: '/terms', changefreq: 'yearly', priority: 0.3 },
  { loc: '/cookies-policy', changefreq: 'yearly', priority: 0.3 },
  { loc: '/sitemap', changefreq: 'monthly', priority: 0.5 }
];

staticPages.forEach(p => urls.push({ loc: p.loc, changefreq: p.changefreq, priority: p.priority, lastmod: today }));

// Product pages
products.forEach(p => {
  urls.push({ loc: `/products/${p.slug}`, changefreq: 'weekly', priority: 0.9, lastmod: today });
});

// City pages
cities.forEach(city => {
  primaryProducts.forEach(prod => {
    urls.push({ loc: `/${prod}/${city}`, changefreq: 'monthly', priority: 0.7, lastmod: today });
  });
});

// Generate XML
const entries = urls.map(url => `  <url>
    <loc>${SITE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority.toFixed(1)}</priority>
  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>`;

const destDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}
fs.writeFileSync(path.join(destDir, 'sitemap.xml'), xml, 'utf8');
console.log('sitemap.xml generated successfully in public/ folder.');
