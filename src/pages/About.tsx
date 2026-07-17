import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { Heart, Users, BookOpen, Star } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Seva — Service',
    description:
      'The Yadav tradition of selfless service flows from Lord Krishna\'s own example. We serve our community, our city, and our nation without expectation of reward.',
  },
  {
    icon: Users,
    title: 'Samajik Ekta — Unity',
    description:
      'Across all differences of region, occupation, and circumstance, we stand as one community. Our diversity is our strength; our unity is our shield.',
  },
  {
    icon: BookOpen,
    title: 'Gyan — Knowledge',
    description:
      'From the wisdom of the Bhagavad Gita to modern education, we believe learning is the foundation of both personal growth and community progress.',
  },
  {
    icon: Star,
    title: 'Sanskriti — Culture',
    description:
      'Our music, dance, language, and traditions connect us to a 5,000-year-old heritage. We preserve and share these gifts for future generations.',
  },
]

const pillars = [
  { label: 'Members', value: 250000, suffix: '+' },
  { label: 'Mandals', value: 24, suffix: '' },
  { label: 'Scholarships Given', value: 5000, suffix: '+' },
  { label: 'Years of Organization', value: 38, suffix: '+' },
]

export default function About() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Who We Are"
        title="About the Community"
        subtitle="A 5,000-year heritage, 2.5 lakh members, and one shared vision for a better tomorrow."
      />

      {/* Mission section */}
      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                eyebrow="Our Mission"
                title="Preserving the Past. Empowering the Future."
                align="left"
                className="mb-6"
              />
              <div className="space-y-4 text-ink-600 dark:text-cream-400 leading-relaxed">
                <p>
                  The Hyderabad Yadav Community is one of Telangana's most vibrant and diverse communities,
                  tracing its roots to the pastoral Yadava clans of ancient India who were the kin of
                  Lord Krishna himself.
                </p>
                <p>
                  Today, our community spans professionals, entrepreneurs, farmers, doctors, engineers, artists,
                  and civil servants — united by a shared pride in our heritage and a commitment to collective progress.
                </p>
                <p>
                  The Hyderabad Yadav Mahasabha, founded in 1987, serves as the apex representative body,
                  working in education, social welfare, cultural preservation, and political advocacy.
                  Our community portal is the digital extension of this mission.
                </p>
              </div>
            </motion.div>

            {/* Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {pillars.map(({ label, value, suffix }) => (
                <div
                  key={label}
                  className="rounded-2xl p-6 bg-white dark:bg-ink-800 border border-cream-400/60 dark:border-ink-700 text-center"
                >
                  <div className="font-display text-4xl font-bold text-gold-500 tabular mb-1">
                    <AnimatedCounter target={value} suffix={suffix} />
                  </div>
                  <div className="text-ink-500 dark:text-cream-500 text-sm">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-temple-weave relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Our Values"
            title="What Guides Us"
            subtitle="Four principles drawn from our heritage that shape everything we do as a community."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-heritage p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 mb-2">{title}</h3>
                <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Krishna connection */}
      <section className="py-20 bg-ink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-peacock-900/60 to-ink-900 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold-500 block mb-4">
                Our Spiritual Heritage
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-cream-100 mb-6">
                The Children of Krishna
              </h2>
              <div className="w-8 h-px bg-gold-500 mx-auto mb-8" />
              <p className="text-cream-400 text-lg leading-relaxed mb-6">
                The Yadava clan is named for Yadu, the ancestor of Lord Krishna. Krishna himself was born
                into the Yadava clan in Mathura, and his life — as cowherd, warrior, philosopher, and divine
                teacher — has shaped our community's identity across millennia.
              </p>
              <p className="text-cream-500 leading-relaxed">
                His teachings in the Bhagavad Gita — on duty, devotion, and liberation — remain not just
                scripture but lived principles for our community. We do not merely follow Krishna; in spirit,
                we are of his clan.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}


