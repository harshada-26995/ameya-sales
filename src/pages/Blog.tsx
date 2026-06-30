import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'

const blogPosts = [
  {
    id: '1',
    slug: 'invisible-grill-vs-glass-railing',
    title: 'Invisible Grill vs Glass Railing: Which is Better for Your Balcony?',
    excerpt: 'A comprehensive comparison of invisible grills and glass railings — covering safety, cost, maintenance, aesthetics, and which solution is best for different types of homes and balconies in India.',
    category: 'Comparison Guide',
    tags: ['invisible grill', 'glass railing', 'balcony safety'],
    author: 'Ameya Joshi',
    publishedAt: '2024-11-15',
    readTime: 8,
    featuredImage: '/images/blog/invisible-grill-vs-glass-railing.webp',
  },
  {
    id: '2',
    slug: 'upvc-windows-benefits-india',
    title: 'Top 10 Benefits of UPVC Windows for Indian Homes in 2024',
    excerpt: 'Discover why UPVC windows are the fastest-growing window solution in India. From energy savings and noise reduction to zero maintenance and 40-year lifespan — a complete guide for Indian homeowners.',
    category: 'Buying Guide',
    tags: ['UPVC windows', 'energy efficiency', 'home improvement'],
    author: 'Priya Sharma',
    publishedAt: '2024-10-20',
    readTime: 10,
    featuredImage: '/images/blog/upvc-windows-benefits.webp',
  },
  {
    id: '3',
    slug: 'invisible-grill-price-pune-2024',
    title: 'Invisible Grill Price in Pune 2024 — Complete Price Guide',
    excerpt: 'The complete price guide for invisible grills in Pune. Includes per sq.ft. rates, factors affecting pricing, comparison between grades, and tips to get the best value for your investment.',
    category: 'Price Guide',
    tags: ['invisible grill price', 'pune', 'cost guide'],
    author: 'Ameya Joshi',
    publishedAt: '2024-09-05',
    readTime: 7,
    featuredImage: '/images/blog/invisible-grill-price-pune.webp',
  },
  {
    id: '4',
    slug: 'how-to-choose-safety-grill-kids-pets',
    title: 'How to Choose the Right Safety Grill for Homes with Kids and Pets',
    excerpt: 'A parent and pet owner\'s guide to choosing the most effective and aesthetically pleasing safety solution for balconies and windows. Covers wire spacing, strength ratings, and installation considerations.',
    category: 'Buyer\'s Guide',
    tags: ['child safety', 'pet safety', 'invisible grill', 'safety net'],
    author: 'Priya Sharma',
    publishedAt: '2024-08-18',
    readTime: 9,
    featuredImage: '/images/blog/safety-grill-kids-pets.webp',
  },
  {
    id: '5',
    slug: 'bird-net-installation-guide',
    title: 'Complete Guide to Bird Net Installation for Balconies and AC Units',
    excerpt: 'Everything you need to know about bird netting — types of nets, mesh sizes for different birds, installation methods, cost, and how to maintain your bird net for maximum effectiveness.',
    category: 'Installation Guide',
    tags: ['bird net', 'pigeon net', 'balcony', 'AC unit protection'],
    author: 'Vikram Nair',
    publishedAt: '2024-07-25',
    readTime: 11,
    featuredImage: '/images/blog/bird-net-installation.webp',
  },
  {
    id: '6',
    slug: 'aluminium-vs-upvc-windows-comparison',
    title: 'Aluminium vs UPVC Windows — Which Should You Choose in 2024?',
    excerpt: 'A detailed, unbiased comparison of aluminium and UPVC window systems for Indian construction. Covers thermal performance, durability, cost, aesthetics, and application suitability.',
    category: 'Comparison Guide',
    tags: ['aluminium windows', 'UPVC windows', 'window comparison'],
    author: 'Ameya Joshi',
    publishedAt: '2024-06-30',
    readTime: 12,
    featuredImage: '/images/blog/aluminium-vs-upvc.webp',
  },
]

export const BlogPage = () => {
  return (
    <>
      <SEOHead
        title="Blog — Safety Solutions, Window Guides & Expert Tips | Ameya Sales"
        description="Expert guides, price comparisons, installation tips, and buying guides for invisible grills, UPVC windows, glass railings, and more architectural safety products in Maharashtra."
        keywords={['invisible grill blog', 'UPVC window guide', 'glass railing tips', 'safety solutions blog pune']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }]}
      />

      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" /> Expert Insights & Guides
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Safety Solutions <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Blog & Guides</span>
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Expert articles, price guides, comparison reviews, and installation tips from Maharashtra's leading safety solutions company.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="luxury-card overflow-hidden group"
              >
                <div className="bg-gradient-to-br from-blue-100 to-slate-200 h-48 flex items-center justify-center relative">
                  <BookOpen className="w-16 h-16 text-blue-300" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold bg-blue-700 text-white px-2.5 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(post.publishedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime} min read</span>
                  </div>
                  <h2 className="font-bold text-slate-900 text-base mb-3 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xs">{post.author[0]}</div>
                      <span className="text-xs text-slate-600 font-medium">{post.author}</span>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="flex items-center gap-1 text-blue-600 text-sm font-medium hover:text-blue-700">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
