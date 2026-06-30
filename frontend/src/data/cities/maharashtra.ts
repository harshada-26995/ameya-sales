import type { City } from '@/types'

export const maharashtraCities: City[] = [
  // Tier 1
  { id: 'pune', slug: 'pune', name: 'Pune', district: 'Pune', state: 'Maharashtra', tier: 'tier1' },
  { id: 'mumbai', slug: 'mumbai', name: 'Mumbai', district: 'Mumbai', state: 'Maharashtra', tier: 'tier1' },
  { id: 'nagpur', slug: 'nagpur', name: 'Nagpur', district: 'Nagpur', state: 'Maharashtra', tier: 'tier1' },
  { id: 'nashik', slug: 'nashik', name: 'Nashik', district: 'Nashik', state: 'Maharashtra', tier: 'tier1' },
  { id: 'aurangabad', slug: 'aurangabad', name: 'Aurangabad', district: 'Aurangabad', state: 'Maharashtra', tier: 'tier1' },
  { id: 'solapur', slug: 'solapur', name: 'Solapur', district: 'Solapur', state: 'Maharashtra', tier: 'tier1' },
  { id: 'amravati', slug: 'amravati', name: 'Amravati', district: 'Amravati', state: 'Maharashtra', tier: 'tier1' },
  // Tier 2
  { id: 'kolhapur', slug: 'kolhapur', name: 'Kolhapur', district: 'Kolhapur', state: 'Maharashtra', tier: 'tier2' },
  { id: 'sangli', slug: 'sangli', name: 'Sangli', district: 'Sangli', state: 'Maharashtra', tier: 'tier2' },
  { id: 'satara', slug: 'satara', name: 'Satara', district: 'Satara', state: 'Maharashtra', tier: 'tier2' },
  { id: 'ratnagiri', slug: 'ratnagiri', name: 'Ratnagiri', district: 'Ratnagiri', state: 'Maharashtra', tier: 'tier2' },
  { id: 'jalgaon', slug: 'jalgaon', name: 'Jalgaon', district: 'Jalgaon', state: 'Maharashtra', tier: 'tier2' },
  { id: 'ahmednagar', slug: 'ahmednagar', name: 'Ahmednagar', district: 'Ahmednagar', state: 'Maharashtra', tier: 'tier2' },
  { id: 'latur', slug: 'latur', name: 'Latur', district: 'Latur', state: 'Maharashtra', tier: 'tier2' },
  { id: 'dhule', slug: 'dhule', name: 'Dhule', district: 'Dhule', state: 'Maharashtra', tier: 'tier2' },
  { id: 'nanded', slug: 'nanded', name: 'Nanded', district: 'Nanded', state: 'Maharashtra', tier: 'tier2' },
  { id: 'akola', slug: 'akola', name: 'Akola', district: 'Akola', state: 'Maharashtra', tier: 'tier2' },
  { id: 'osmanabad', slug: 'osmanabad', name: 'Osmanabad', district: 'Osmanabad', state: 'Maharashtra', tier: 'tier2' },
  { id: 'buldhana', slug: 'buldhana', name: 'Buldhana', district: 'Buldhana', state: 'Maharashtra', tier: 'tier2' },
  { id: 'yavatmal', slug: 'yavatmal', name: 'Yavatmal', district: 'Yavatmal', state: 'Maharashtra', tier: 'tier2' },
  { id: 'wardha', slug: 'wardha', name: 'Wardha', district: 'Wardha', state: 'Maharashtra', tier: 'tier2' },
  { id: 'beed', slug: 'beed', name: 'Beed', district: 'Beed', state: 'Maharashtra', tier: 'tier2' },
  { id: 'hingoli', slug: 'hingoli', name: 'Hingoli', district: 'Hingoli', state: 'Maharashtra', tier: 'tier2' },
  { id: 'parbhani', slug: 'parbhani', name: 'Parbhani', district: 'Parbhani', state: 'Maharashtra', tier: 'tier2' },
  { id: 'raigad', slug: 'raigad', name: 'Raigad', district: 'Raigad', state: 'Maharashtra', tier: 'tier2' },
  { id: 'sindhudurg', slug: 'sindhudurg', name: 'Sindhudurg', district: 'Sindhudurg', state: 'Maharashtra', tier: 'tier2' },
  { id: 'gondia', slug: 'gondia', name: 'Gondia', district: 'Gondia', state: 'Maharashtra', tier: 'tier2' },
  { id: 'chandrapur', slug: 'chandrapur', name: 'Chandrapur', district: 'Chandrapur', state: 'Maharashtra', tier: 'tier2' },
  { id: 'gadchiroli', slug: 'gadchiroli', name: 'Gadchiroli', district: 'Gadchiroli', state: 'Maharashtra', tier: 'tier2' },
  // Tier 3 — key towns
  { id: 'pimpri-chinchwad', slug: 'pimpri-chinchwad', name: 'Pimpri-Chinchwad', district: 'Pune', state: 'Maharashtra', tier: 'tier2' },
  { id: 'thane', slug: 'thane', name: 'Thane', district: 'Thane', state: 'Maharashtra', tier: 'tier1' },
  { id: 'navi-mumbai', slug: 'navi-mumbai', name: 'Navi Mumbai', district: 'Thane', state: 'Maharashtra', tier: 'tier1' },
  { id: 'kalyan', slug: 'kalyan', name: 'Kalyan', district: 'Thane', state: 'Maharashtra', tier: 'tier2' },
  { id: 'dombivli', slug: 'dombivli', name: 'Dombivli', district: 'Thane', state: 'Maharashtra', tier: 'tier2' },
  { id: 'vasai', slug: 'vasai', name: 'Vasai-Virar', district: 'Palghar', state: 'Maharashtra', tier: 'tier2' },
  { id: 'mira-road', slug: 'mira-road', name: 'Mira Road', district: 'Thane', state: 'Maharashtra', tier: 'tier2' },
  { id: 'bhiwandi', slug: 'bhiwandi', name: 'Bhiwandi', district: 'Thane', state: 'Maharashtra', tier: 'tier2' },
  { id: 'panvel', slug: 'panvel', name: 'Panvel', district: 'Raigad', state: 'Maharashtra', tier: 'tier2' },
  { id: 'lonavala', slug: 'lonavala', name: 'Lonavala', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'mahabaleshwar', slug: 'mahabaleshwar', name: 'Mahabaleshwar', district: 'Satara', state: 'Maharashtra', tier: 'tier3' },
  { id: 'shirdi', slug: 'shirdi', name: 'Shirdi', district: 'Ahmednagar', state: 'Maharashtra', tier: 'tier3' },
  { id: 'wai', slug: 'wai', name: 'Wai', district: 'Satara', state: 'Maharashtra', tier: 'tier3' },
  { id: 'baramati', slug: 'baramati', name: 'Baramati', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'talegaon', slug: 'talegaon', name: 'Talegaon Dabhade', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'chakan', slug: 'chakan', name: 'Chakan', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'hadapsar', slug: 'hadapsar', name: 'Hadapsar', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'hinjewadi', slug: 'hinjewadi', name: 'Hinjewadi', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'wakad', slug: 'wakad', name: 'Wakad', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'kharadi', slug: 'kharadi', name: 'Kharadi', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'viman-nagar', slug: 'viman-nagar', name: 'Viman Nagar', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'baner', slug: 'baner', name: 'Baner', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'kothrud', slug: 'kothrud', name: 'Kothrud', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'aundh', slug: 'aundh', name: 'Aundh', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
  { id: 'shivajinagar', slug: 'shivajinagar', name: 'Shivajinagar', district: 'Pune', state: 'Maharashtra', tier: 'tier3' },
]

export const getCityBySlug = (slug: string) =>
  maharashtraCities.find((c) => c.slug === slug)

export const getCitiesByTier = (tier: City['tier']) =>
  maharashtraCities.filter((c) => c.tier === tier)
