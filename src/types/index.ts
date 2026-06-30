export interface Product {
  id: string
  slug: string
  name: string
  shortName: string
  category: string
  tagline: string
  description: string
  longDescription: string
  features: string[]
  benefits: string[]
  specifications: Record<string, string>
  applications: string[]
  priceRange: string
  priceUnit: string
  image: string
  gallery: string[]
  videoUrl?: string
  relatedProducts: string[]
  faqs: FAQ[]
  seo: SEOMeta
  schema?: Record<string, unknown>
}

export interface City {
  id: string
  slug: string
  name: string
  district: string
  state: string
  tier: 'tier1' | 'tier2' | 'tier3'
  population?: string
  coordinates?: { lat: number; lng: number }
  description?: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  review: string
  product: string
  date: string
  avatar?: string
  verified: boolean
}

export interface Project {
  id: string
  title: string
  category: 'residential' | 'commercial' | 'industrial'
  city: string
  client: string
  products: string[]
  area: string
  image: string
  gallery: string[]
  description: string
  completedDate: string
  featured: boolean
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  author: Author
  publishedAt: string
  updatedAt: string
  readTime: number
  featuredImage: string
  faqs?: FAQ[]
  seo: SEOMeta
}

export interface Author {
  name: string
  bio: string
  avatar: string
  role: string
}

export interface SEOMeta {
  title: string
  description: string
  keywords: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  canonical?: string
  noIndex?: boolean
}

export interface LeadForm {
  name: string
  phone: string
  email?: string
  city: string
  product: string
  message?: string
  source?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
}

export interface QuoteCalculatorInput {
  productType: string
  width: number
  height: number
  quantity: number
  floor: number
  city: string
  installation: boolean
  accessories: string[]
}

export interface QuoteResult {
  productCost: number
  installationCost: number
  accessoriesCost: number
  gst: number
  total: number
  pricePerSqFt: number
  breakdown: { item: string; amount: number }[]
}
