import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { quotes } from '@/data/quotes'
import { SectionTitle } from '@/components/shared/SectionTitle'

const teachings = [
  {
    title: 'Nishkama Karma — Desireless Action',
    icon: '🪷',
    description: 'Act without attachment to the fruits of your action. Do what is right because it is right, not for what you will receive in return. This is the central ethical teaching of the Gita.',
    verse: 'Gita 2.47',
  },
  {
    title: 'Atman — The Eternal Self',
    icon: '✨',
    description: 'You are not your body, not your mind, not your emotions. You are the Atman — the eternal, indestructible, changeless consciousness that witnesses all experience.',
    verse: 'Gita 2.23',
  },
  {
    title: 'Yoga — Union & Discipline',
    icon: '🧘',
    description: 'Yoga is not merely exercise — it is any disciplined path that unites the individual soul with the divine. The Gita describes four primary yogas: Karma (action), Jnana (knowledge), Bhakti (devotion), and Raja (meditation).',
    verse: 'Gita 6.1–47',
  },
  {
    title: 'Svadharma — Your Own Duty',
    icon: '⚖️',
    description: 'Better is one\'s own dharma, though imperfectly performed, than the dharma of another well performed. Find your own calling and pursue it with full heart.',
    verse: 'Gita 3.35',
  },
  {
    title: 'Bhakti — Devotion',
    icon: '🙏',
    description: 'Of all paths to liberation, devotion is the most direct. When love for the divine becomes the centre of one\'s life, all other virtues follow naturally.',
    verse: 'Gita 12.14',
  },
  {
    title: 'Surrender — Sharanagati',
    icon: '🌸',
    description: 'The highest teaching: surrender your ego, your outcomes, your very self to the divine. "I will free you from all sins" — this is Krishna\'s promise to the surrendered soul.',
    verse: 'Gita 18.66',
  },
]

export default function KrishnaTeachings() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Spiritual Wisdom"
        title="Krishna's Teachings"
        subtitle="The core principles from Lord Krishna's teachings that have guided our community for generations."
      />

      {/* Core teachings */}
      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="Key Principles"
            title="The Way of Krishna"
            subtitle="Universal teachings that transcend religion and speak to every human being seeking meaning and purpose."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teachings.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-heritage p-6"
              >
                <div className="text-3xl mb-4">{t.icon}</div>
                <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 mb-2">{t.title}</h3>
                <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed mb-4">{t.description}</p>
                <span className="text-xs font-bold text-gold-600 dark:text-gold-400">{t.verse}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes wall */}
      <section className="py-20 bg-ink-900">
        <div className="section-container">
          <SectionTitle
            eyebrow="Sacred Verses"
            title="Words of the Divine"
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quotes.slice(0, 8).map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass rounded-xl p-6 border border-white/10"
              >
                {q.sanskrit && (
                  <p className="font-display text-gold-400 italic mb-3 text-lg">{q.sanskrit}</p>
                )}
                <blockquote className="text-cream-300 leading-relaxed mb-4">"{q.text}"</blockquote>
                <footer className="flex items-center justify-between">
                  <cite className="not-italic text-gold-500 text-sm font-semibold">{q.source}</cite>
                  {q.chapter && (
                    <span className="text-cream-600 text-xs">Ch. {q.chapter}, V. {q.verse}</span>
                  )}
                </footer>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

