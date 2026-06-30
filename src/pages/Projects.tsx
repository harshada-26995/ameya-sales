import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Home, Factory, MapPin, Phone, MessageCircle, Shield } from 'lucide-react'
import { SEOHead } from '@/components/seo/SEOHead'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { LeadForm } from '@/components/forms/LeadForm'
import { SITE_CONFIG } from '@/config/site'

const projectsData = [
  {
    id: '1', title: 'Luxury 3BHK Apartment — Invisible Grill & Mosquito Mesh', category: 'residential',
    city: 'Kothrud, Pune', client: 'Private Homeowner', products: ['Invisible Grill', 'Mosquito Mesh'],
    area: '280 sq.ft.', description: 'Complete safety solution for a high-rise luxury apartment. Invisible grills on all 4 balconies and mosquito mesh on 8 windows. SS316 wire, white powder-coated channels.', year: '2024',
  },
  {
    id: '2', title: '50-Unit Residential Complex — UPVC Windows', category: 'residential',
    city: 'Hinjewadi, Pune', client: 'Dev Builders Pvt. Ltd.', products: ['UPVC Windows', 'Mosquito Mesh'],
    area: '4,200 sq.ft.', description: 'Complete UPVC window installation for a 50-unit residential complex. German multi-chamber profiles with double glazing. Delivered in 18 days ahead of schedule.', year: '2024',
  },
  {
    id: '3', title: 'Corporate Office — Glass Partition & Office Glass', category: 'commercial',
    city: 'Baner, Pune', client: 'TechCorp India Pvt. Ltd.', products: ['Office Glass Partition', 'Glass Canopy'],
    area: '1,800 sq.ft.', description: 'Modern office glass partition system for a 200-seater corporate office. Frameless glass partitions with frosted privacy strips, sliding glass doors, and glass entrance canopy.', year: '2024',
  },
  {
    id: '4', title: 'Luxury Villa — Complete Safety Package', category: 'residential',
    city: 'Aundh, Pune', client: 'Dr. Sanjay Mehta', products: ['Invisible Grill', 'SS Railing', 'Glass Railing', 'Mosquito Mesh'],
    area: '620 sq.ft.', description: 'Full safety and aesthetic solution for a 4-floor luxury bungalow. SS316 railings on all staircases, frameless glass railing on terrace, invisible grills on 6 balconies.', year: '2024',
  },
  {
    id: '5', title: 'Hotel Rooftop — Pergola & Glass Canopy', category: 'commercial',
    city: 'Koregaon Park, Pune', client: 'Hotel Grandeur', products: ['Pergola Systems', 'Glass Canopy', 'Glass Railing'],
    area: '2,400 sq.ft.', description: 'Rooftop dining area transformation with premium pergola systems, glass canopy, and glass railings. Weather protection for 120-seater outdoor restaurant.', year: '2023',
  },
  {
    id: '6', title: 'Industrial Warehouse — Safety Nets & Bird Nets', category: 'industrial',
    city: 'Chakan, Pune', client: 'Precision Auto Components Ltd.', products: ['Safety Net', 'Bird Net'],
    area: '12,000 sq.ft.', description: 'Comprehensive safety net installation for a large industrial warehouse. IS 11057 certified fall protection nets for 8-meter elevated work platforms.', year: '2023',
  },
  {
    id: '7', title: 'School Building — Safety Grill & Bird Proofing', category: 'commercial',
    city: 'Wakad, Pune', client: 'Pune Public School', products: ['Invisible Grill', 'Bird Net', 'Mosquito Mesh'],
    area: '3,200 sq.ft.', description: 'Complete child safety solution for a 3-storey school building. Invisible grills on all corridor windows, bird netting for ventilation openings, mosquito mesh on classrooms.', year: '2023',
  },
  {
    id: '8', title: 'Luxury Farmhouse — ACP Cladding & Pergola', category: 'residential',
    city: 'Lavasa, Pune', client: 'Private Client', products: ['ACP Cladding', 'Pergola Systems', 'Glass Railing'],
    area: '5,600 sq.ft.', description: 'Premium exterior transformation of a luxury farmhouse with composite ACP cladding, premium teak pergola, and frameless glass pool fencing.', year: '2023',
  },
]

const categories = [
  { key: 'all', label: 'All Projects', icon: Shield },
  { key: 'residential', label: 'Residential', icon: Home },
  { key: 'commercial', label: 'Commercial', icon: Building2 },
  { key: 'industrial', label: 'Industrial', icon: Factory },
]

const categoryColors: Record<string, string> = {
  residential: 'bg-blue-100 text-blue-700',
  commercial: 'bg-purple-100 text-purple-700',
  industrial: 'bg-orange-100 text-orange-700',
}

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = activeCategory === 'all' ? projectsData : projectsData.filter(p => p.category === activeCategory)

  return (
    <>
      <SEOHead
        title="Completed Projects | Invisible Grill, UPVC Windows, Glass Railing Projects in Pune"
        description={`Browse ${projectsData.length}+ completed projects by Ameya Sales Corporation across Pune and Maharashtra. Residential, commercial, and industrial installations.`}
        keywords={['invisible grill projects pune', 'UPVC window installation projects', 'glass railing completed projects']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Projects', url: '/projects' }]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" /> 5,000+ Completed Installations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Completed Projects</span>
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              A showcase of our finest installations across residential, commercial, and industrial projects in Maharashtra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3 overflow-x-auto">
          {categories.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.key ? 'bg-blue-700 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="luxury-card overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-800 to-blue-900 h-48 flex items-center justify-center relative">
                  <Shield className="w-20 h-20 text-blue-700/40" />
                  <div className="absolute top-3 left-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full capitalize ${categoryColors[project.category]}`}>{project.category}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded">{project.year}</div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{project.title}</h3>
                  <div className="flex items-center gap-1 text-slate-400 text-xs mb-2">
                    <MapPin className="w-3.5 h-3.5" /> {project.city}
                  </div>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-slate-100">
                    {project.products.map(p => (
                      <span key={p} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">{p}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-3 text-xs text-slate-400">
                    <span>Area: <span className="font-semibold text-slate-700">{project.area}</span></span>
                    <span>Client: <span className="font-semibold text-slate-700 truncate">{project.client.split(' ').slice(0, 2).join(' ')}</span></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading tag="Start Your Project" title="Let's Build Something " highlight="Remarkable" subtitle="Join 5,000+ satisfied customers who trust Ameya Sales for their safety and architectural needs." />
              <div className="mt-8 flex gap-4">
                <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center gap-2 px-5 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-all text-sm">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=I'd like to discuss a project.`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all text-sm">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <LeadForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
