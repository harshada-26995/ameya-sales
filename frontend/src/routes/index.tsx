import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const HomePage = lazy(() => import('@/pages/Home').then(m => ({ default: m.HomePage })))
const AboutPage = lazy(() => import('@/pages/About').then(m => ({ default: m.AboutPage })))
const ProductsPage = lazy(() => import('@/pages/Products').then(m => ({ default: m.ProductsPage })))
const ProductDetailPage = lazy(() => import('@/pages/ProductDetail').then(m => ({ default: m.ProductDetailPage })))
const CityLandingPage = lazy(() => import('@/pages/CityLanding').then(m => ({ default: m.CityLandingPage })))
const ContactPage = lazy(() => import('@/pages/Contact').then(m => ({ default: m.ContactPage })))
const TestimonialsPage = lazy(() => import('@/pages/Testimonials').then(m => ({ default: m.TestimonialsPage })))
const BlogPage = lazy(() => import('@/pages/Blog').then(m => ({ default: m.BlogPage })))
const CalculatorPage = lazy(() => import('@/pages/Calculator').then(m => ({ default: m.CalculatorPage })))
const FAQPage = lazy(() => import('@/pages/FAQ').then(m => ({ default: m.FAQPage })))
const PrivacyPolicyPage = lazy(() => import('@/pages/legal/PrivacyPolicy').then(m => ({ default: m.PrivacyPolicyPage })))
const TermsPage = lazy(() => import('@/pages/legal/Terms').then(m => ({ default: m.TermsPage })))
const ProjectsPage = lazy(() => import('@/pages/Projects').then(m => ({ default: m.ProjectsPage })))
const NotFoundPage = lazy(() => import('@/pages/NotFound').then(m => ({ default: m.NotFoundPage })))

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-700 rounded-full animate-spin" />
      <p className="text-slate-400 text-sm">Loading...</p>
    </div>
  </div>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Suspense fallback={<Loader />}><HomePage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<Loader />}><AboutPage /></Suspense> },
      { path: 'products', element: <Suspense fallback={<Loader />}><ProductsPage /></Suspense> },
      { path: 'products/:slug', element: <Suspense fallback={<Loader />}><ProductDetailPage /></Suspense> },
      // Programmatic SEO: product + city landing pages
      { path: ':productSlug/:citySlug', element: <Suspense fallback={<Loader />}><CityLandingPage /></Suspense> },
      { path: 'contact', element: <Suspense fallback={<Loader />}><ContactPage /></Suspense> },
      { path: 'testimonials', element: <Suspense fallback={<Loader />}><TestimonialsPage /></Suspense> },
      { path: 'projects', element: <Suspense fallback={<Loader />}><ProjectsPage /></Suspense> },
      { path: 'blog', element: <Suspense fallback={<Loader />}><BlogPage /></Suspense> },
      { path: 'calculator', element: <Suspense fallback={<Loader />}><CalculatorPage /></Suspense> },
      { path: 'faq', element: <Suspense fallback={<Loader />}><FAQPage /></Suspense> },
      { path: 'privacy-policy', element: <Suspense fallback={<Loader />}><PrivacyPolicyPage /></Suspense> },
      { path: 'terms', element: <Suspense fallback={<Loader />}><TermsPage /></Suspense> },
      { path: '*', element: <Suspense fallback={<Loader />}><NotFoundPage /></Suspense> },
    ],
  },
])

export const AppRouter = () => <RouterProvider router={router} />
