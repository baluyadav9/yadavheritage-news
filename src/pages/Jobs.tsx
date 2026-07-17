import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Briefcase, MapPin, Clock, Users, ArrowRight } from 'lucide-react'

const jobs = [
  { id: 1, title: 'Software Engineer — Full Stack', company: 'Govinda Tech Solutions', location: 'HITEC City, Hyderabad', type: 'Full-time', salary: '₹8–15 LPA', sector: 'IT', postedAt: '2025-06-20', urgent: true },
  { id: 2, title: 'Dairy Operations Manager', company: 'Krishna Dairy Products', location: 'Alwal, Secunderabad', type: 'Full-time', salary: '₹5–8 LPA', sector: 'Dairy', postedAt: '2025-06-18', urgent: false },
  { id: 3, title: 'Hotel Manager', company: 'Mathura Hotels & Resorts', location: 'Multiple Locations', type: 'Full-time', salary: '₹6–10 LPA', sector: 'Hospitality', postedAt: '2025-06-15', urgent: false },
  { id: 4, title: 'Civil Engineer (Site)', company: 'Yadav Constructions & Developers', location: 'Kukatpally, Hyderabad', type: 'Full-time', salary: '₹4–7 LPA', sector: 'Construction', postedAt: '2025-06-12', urgent: true },
  { id: 5, title: 'Marketing Executive — Digital', company: 'Brindavan Organic Farms', location: 'Vikarabad / Remote', type: 'Full-time', salary: '₹3–5 LPA', sector: 'Agriculture', postedAt: '2025-06-10', urgent: false },
  { id: 6, title: 'Financial Advisor', company: 'Yadav Finance & Investment', location: 'Banjara Hills, Hyderabad', type: 'Full-time', salary: '₹4–8 LPA + incentives', sector: 'Finance', postedAt: '2025-06-08', urgent: false },
  { id: 7, title: 'School Teacher — Mathematics', company: 'Brindavan Educational Trust', location: 'Vikarabad District', type: 'Full-time', salary: '₹3–4.5 LPA', sector: 'Education', postedAt: '2025-06-05', urgent: false },
  { id: 8, title: 'App Developer (React Native)', company: 'Govinda Tech Solutions', location: 'Remote / Hyderabad', type: 'Full-time', salary: '₹10–18 LPA', sector: 'IT', postedAt: '2025-06-01', urgent: true },
]

const sectorColors: Record<string, string> = {
  IT: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  Dairy: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  Hospitality: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/30 dark:text-saffron-300',
  Construction: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  Agriculture: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  Finance: 'bg-ink-100 text-ink-700 dark:bg-ink-700 dark:text-cream-300',
  Education: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
}

export default function Jobs() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Job Board"
        title="Opportunities Within Our Community"
        subtitle="Jobs posted by Yadav-owned businesses. Hire from the community. Grow with the community."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionTitle eyebrow={`${jobs.length} Openings`} title="Current Vacancies" align="left" />
            <button className="btn-gold text-sm">Post a Job</button>
          </div>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-heritage p-5 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-peacock-500/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase size={22} className="text-gold-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-ink-800 dark:text-cream-100 text-base">{job.title}</h3>
                    {job.urgent && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-saffron-500 text-white">URGENT</span>
                    )}
                  </div>
                  <p className="text-ink-500 dark:text-cream-500 text-sm mb-2 font-medium">{job.company}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-400 dark:text-cream-600">
                    <span className="flex items-center gap-1"><MapPin size={11}/> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={11}/> {job.type}</span>
                    <span className="flex items-center gap-1"><Users size={11}/> {job.salary}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${sectorColors[job.sector] ?? ''}`}>
                    {job.sector}
                  </span>
                  <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold border border-gold-500/40 text-gold-600 dark:text-gold-400 hover:bg-gold-500/10 transition-colors">
                    Apply <ArrowRight size={14}/>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

