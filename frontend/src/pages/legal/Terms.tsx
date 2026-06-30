import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'

export const TermsPage = () => (
  <>
    <SEOHead title="Terms & Conditions | Ameya Sales Corporation" description="Terms and conditions governing use of Ameya Sales Corporation's website and services." noIndex />
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms & Conditions</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2025</p>
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>By accessing and using the website of {SITE_CONFIG.name} ({SITE_CONFIG.url}), you agree to be bound by these Terms and Conditions.</p>
        <h2 className="text-xl font-bold text-slate-900">1. Use of Website</h2>
        <p>This website is for informational purposes only. The content is intended to provide general information about our products and services. All quotations provided through the website are indicative and subject to site inspection.</p>
        <h2 className="text-xl font-bold text-slate-900">2. Products and Services</h2>
        <p>All product prices, specifications, and availability are subject to change without notice. Final prices are confirmed only after a site visit and written quotation is issued.</p>
        <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property</h2>
        <p>All content on this website including text, images, logos, and designs is the property of {SITE_CONFIG.name} and is protected by applicable copyright laws.</p>
        <h2 className="text-xl font-bold text-slate-900">4. Warranty and Liability</h2>
        <p>Product warranties are as specified in our written agreements. We are not liable for any indirect or consequential damages arising from the use of our products beyond the scope of the applicable warranty.</p>
        <h2 className="text-xl font-bold text-slate-900">5. Governing Law</h2>
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Pune, Maharashtra.</p>
        <h2 className="text-xl font-bold text-slate-900">6. Contact</h2>
        <p>{SITE_CONFIG.address.full} | {SITE_CONFIG.email} | {SITE_CONFIG.phoneDisplay}</p>
      </div>
    </div>
  </>
)
