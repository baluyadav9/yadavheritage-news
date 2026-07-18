import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { GraduationCap, BookOpen, Users, Award, ExternalLink } from 'lucide-react'

const scholarships = [
  {
    name: 'Yadav Community Welfare Scholarship',
    amount: '₹50,000 – ₹1,00,000 per year',
    eligibility: 'Class XI to Post Graduation',
    criteria: 'Merit + Family Income < ₹3 Lakh p.a.',
    deadline: 'August 1 every year',
    category: 'General',
  },
  {
    name: 'Dr. Suresh Yadav Medical Scholarship',
    amount: '₹1,50,000 per year',
    eligibility: 'MBBS, BDS students',
    criteria: 'Merit + Community membership',
    deadline: 'September 15 every year',
    category: 'Medical',
  },
  {
    name: 'Engineering Excellence Award',
    amount: '₹75,000 per year',
    eligibility: 'B.Tech / B.E. students',
    criteria: 'Top 10% in entrance + income limit',
    deadline: 'August 31 every year',
    category: 'Engineering',
  },
  {
    name: 'Yadav Mahila Vidya Scholarship',
    amount: '₹60,000 per year',
    eligibility: 'Girls: Any degree course',
    criteria: 'Female student, merit-based',
    deadline: 'October 1 every year',
    category: 'Women',
  },
]

const resources = [
  { title: 'UPSC Civil Services Preparation Group', icon: BookOpen, desc: 'Monthly strategy sessions and study material for aspirants.' },
  { title: 'Career Counselling Cell', icon: Users, desc: 'One-on-one guidance from professionals in IT, medicine, law, and business.' },
  { title: 'Competitive Exam Study Circles', icon: GraduationCap, desc: 'Peer study groups for EAMCET, JEE, NEET, and CAT.' },
  { title: 'Internship Network', icon: ExternalLink, desc: 'Connect with community businesses for internship and mentorship opportunities.' },
]

export default function StudentCorner() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Student Corner"
        title="Invest in Your Future"
        subtitle="Scholarships, career guidance, and educational resources for Yadav students across Telangana."
      />

      {/* Scholarships */}
      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Financial Aid"
            title="Scholarships Available"
            subtitle="Every year, our community awards scholarships totalling ₹2 crore to deserving students."
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {scholarships.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-heritage p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 leading-snug">{s.name}</h3>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 shrink-0">{s.category}</span>
                </div>
                <div className="text-2xl font-display font-bold text-gold-500 mb-4">{s.amount}</div>
                <div className="space-y-2 text-sm text-ink-500 dark:text-cream-500">
                  <div><span className="font-semibold text-ink-600 dark:text-cream-400">Eligibility: </span>{s.eligibility}</div>
                  <div><span className="font-semibold text-ink-600 dark:text-cream-400">Criteria: </span>{s.criteria}</div>
                  <div><span className="font-semibold text-ink-600 dark:text-cream-400">Deadline: </span>
                    <span className="text-saffron-600 dark:text-saffron-400 font-semibold">{s.deadline}</span>
                  </div>
                </div>
                <button className="mt-4 w-full py-2 rounded-lg text-sm font-semibold bg-gold-500/10 border border-gold-500/30 text-gold-600 dark:text-gold-400 hover:bg-gold-500/20 transition-colors">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-temple-weave relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Resources"
            title="Support for Your Journey"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {resources.map(({ title, icon: Icon, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-heritage p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-peacock-100 dark:bg-peacock-900/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-peacock-600 dark:text-peacock-400" />
                </div>
                <h3 className="font-semibold text-ink-800 dark:text-cream-100 mb-2 leading-snug text-sm">{title}</h3>
                <p className="text-ink-400 dark:text-cream-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


