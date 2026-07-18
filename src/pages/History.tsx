import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { historyMilestones } from '@/data/index'

export default function History() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Our History"
        title="From Vrindavan to Hyderabad"
        subtitle="A journey spanning 5,000 years — from the pastoral plains of Mathura to the modern city of Hyderabad."
      />

      {/* Timeline section */}
      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Timeline"
            title="A History Written in Courage"
            subtitle="Every era brought new challenges. Every generation met them with grace."
            className="mb-16"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 via-peacock-500 to-gold-500 opacity-30" />

            <div className="space-y-12">
              {historyMilestones.map((milestone, i) => {
                const isLeft = i % 2 === 0
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-12 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-12 sm:pl-0 ${isLeft ? 'sm:text-right' : 'sm:text-left'}`}>
                      <div className="rounded-2xl p-6 bg-white dark:bg-ink-800 border border-cream-400/60 dark:border-ink-700 hover:border-gold-500/40 transition-colors">
                        <span className="font-display text-3xl font-bold text-gold-500 block mb-2">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-xl font-bold text-ink-800 dark:text-cream-100 mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Centre dot */}
                    <div className="absolute left-0 sm:static flex-shrink-0 sm:w-12 flex sm:justify-center items-start pt-6">
                      <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-cream-200 dark:border-ink-900 shadow-gold ring-2 ring-gold-500/30" />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden sm:block" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Historical significance */}
      <section className="py-20 bg-temple-weave relative">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              eyebrow="Historical Context"
              title="The Yadav Kingdom of Devagiri"
              className="mb-8"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-ink-600 dark:text-cream-400">
              <div className="space-y-4 leading-relaxed">
                <p>
                  The Seuna Yadava dynasty ruled the Deccan from their capital at Devagiri
                  (modern Daulatabad, Maharashtra) from the 9th to the 14th century. At their peak,
                  the Yadava kings controlled vast territories across central and southern India.
                </p>
                <p>
                  King Singhana (r. 1200–1247 CE) brought the kingdom to its height, patronizing the
                  Sanskrit epic <em>Lilacharitra</em> and Marathi literature. The court was known for
                  its learned pandits, skilled craftsmen, and thriving trade networks.
                </p>
              </div>
              <div className="space-y-4 leading-relaxed">
                <p>
                  The pastoral tradition — so closely tied to the Yadav identity — remained strong even
                  as the community diversified into trade, military service, and administration under
                  successive Deccan sultanates and eventually the Nizam of Hyderabad.
                </p>
                <p>
                  In Hyderabad, the Yadav community established itself as an essential part of the
                  city's social fabric: providers of dairy, traders in grain and cattle, and soldiers
                  in the Nizam's cavalry — a role that earned them lasting respect in the twin cities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


