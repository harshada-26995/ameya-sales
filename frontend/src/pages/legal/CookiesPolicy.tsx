import { SEOHead } from '@/components/seo/SEOHead'
import { SITE_CONFIG } from '@/config/site'

export const CookiesPolicyPage = () => (
  <>
    <SEOHead title="Cookies Policy | Ameya Sales Corporation" description="Learn how Ameya Sales Corporation uses cookies on its website." noIndex />
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-slate-900 mb-2">Cookies Policy</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: January 1, 2025</p>
      <div className="space-y-6 text-slate-700 leading-relaxed">
        <p>This Cookies Policy explains how {SITE_CONFIG.name} uses cookies and similar tracking technologies on our website ({SITE_CONFIG.url}).</p>
        
        <h2 className="text-xl font-bold text-slate-900">1. What are Cookies?</h2>
        <p>Cookies are small text files stored on your device when you visit a website. They help us make the website run efficiently, analyze traffic, and personalize your experience.</p>
        
        <h2 className="text-xl font-bold text-slate-900">2. How We Use Cookies</h2>
        <p>We use cookies for various purposes, including:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
          <li><strong>Analytics Cookies:</strong> To understand how visitors interact with our website, helping us improve performance and navigation.</li>
          <li><strong>Preference Cookies:</strong> To remember your preferences, like your last selected product categories.</li>
        </ul>
        
        <h2 className="text-xl font-bold text-slate-900">3. Third-Party Cookies</h2>
        <p>We may also use third-party services like Google Analytics and Meta Pixel to track website performance and deliver relevant advertisements. These third parties use cookies according to their own privacy policies.</p>
        
        <h2 className="text-xl font-bold text-slate-900">4. Controlling Cookies</h2>
        <p>You can manage or disable cookies directly through your browser settings. Please note that disabling cookies may affect the functionality of some parts of this website.</p>
        
        <h2 className="text-xl font-bold text-slate-900">5. Contact Us</h2>
        <p>If you have any questions about our use of cookies, please contact us at:</p>
        <p>{SITE_CONFIG.address.full} | {SITE_CONFIG.email} | {SITE_CONFIG.phoneDisplay}</p>
      </div>
    </div>
  </>
)
