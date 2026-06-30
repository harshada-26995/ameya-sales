import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'

export const PrivacyPolicyPage = () => (
  <>
    <SEOHead title="Privacy Policy | Ameya Sales Corporation" description="Privacy policy of Ameya Sales Corporation. Learn how we collect, use, and protect your personal information." noIndex />
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2025</p>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
        <p>Ameya Sales Corporation ("we", "our", or "us") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website {SITE_CONFIG.url} or contact us.</p>
        <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
        <p>We collect information you voluntarily provide, including your name, phone number, email address, city, and product enquiry details when you fill out our contact or lead forms. We also automatically collect device information, IP address, browser type, and pages visited via analytics tools.</p>
        <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your enquiries and provide quotations</li>
          <li>To schedule site visits and installations</li>
          <li>To send you product information and offers (with your consent)</li>
          <li>To improve our website and services</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2 className="text-xl font-bold text-slate-900">3. Sharing Your Information</h2>
        <p>We do not sell or rent your personal information to third parties. We may share information with our installation partners and service providers who assist us in delivering our services, subject to strict confidentiality agreements.</p>
        <h2 className="text-xl font-bold text-slate-900">4. Cookies</h2>
        <p>We use cookies to enhance your browsing experience, analyze website traffic, and serve relevant advertisements. You can control cookie preferences through your browser settings.</p>
        <h2 className="text-xl font-bold text-slate-900">5. Data Security</h2>
        <p>We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
        <h2 className="text-xl font-bold text-slate-900">6. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Contact us at {SITE_CONFIG.email} to exercise these rights.</p>
        <h2 className="text-xl font-bold text-slate-900">7. Contact Us</h2>
        <p>For privacy-related queries, contact: {SITE_CONFIG.name}, {SITE_CONFIG.address.full}. Email: {SITE_CONFIG.email}. Phone: {SITE_CONFIG.phoneDisplay}.</p>
      </div>
    </div>
  </>
)
