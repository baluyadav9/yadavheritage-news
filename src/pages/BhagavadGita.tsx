import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { gitaChapters } from '@/data/gita'
import { BookOpen, ChevronRight } from 'lucide-react'

export default function BhagavadGita() {
  const [selected, setSelected] = useState<number | null>(null)

  const chapter = selected !== null ? gitaChapters[selected] : null

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Sacred Text"
        title="Bhagavad Gita"
        subtitle="The Song of God — 18 chapters of eternal wisdom spoken by Lord Krishna on the battlefield of Kurukshetra."
      />

      {/* Intro */}
      <section className="py-16 bg-gradient-to-br from-peacock-900 to-ink-900">
        <div className="section-container max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 border border-white/10"
          >
            <p className="font-display text-2xl text-gold-300 italic mb-4">
              "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।<br />
              तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥"
            </p>
            <p className="text-cream-400 text-sm leading-relaxed">
              "Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality." — Gita 18.78
            </p>
          </motion.div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <SectionTitle
            eyebrow="All Chapters"
            title="The 18 Chapters of the Gita"
            subtitle="Each chapter is a complete teaching. Together they form the most comprehensive guide to life ever written."
            className="mb-14"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chapter list */}
            <div className="lg:col-span-1 space-y-2">
              {gitaChapters.map((ch, i) => (
                <button
                  key={ch.number}
                  onClick={() => setSelected(i)}
                  className={`w-full text-left flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    selected === i
                      ? 'bg-gold-500 text-ink-900'
                      : 'bg-white dark:bg-ink-800 border border-cream-400/60 dark:border-ink-700 hover:border-gold-500/50 text-ink-600 dark:text-cream-400'
                  }`}
                >
                  <span className={`font-display text-2xl font-bold tabular ${selected === i ? 'text-ink-900' : 'text-gold-500'}`}>
                    {String(ch.number).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-semibold text-sm leading-tight">{ch.title}</div>
                    <div className={`text-xs ${selected === i ? 'text-ink-700' : 'text-ink-400 dark:text-cream-600'}`}>
                      {ch.verses} verses
                    </div>
                  </div>
                  {selected === i && <ChevronRight size={16} className="ml-auto" />}
                </button>
              ))}
            </div>

            {/* Chapter detail */}
            <div className="lg:col-span-2">
              {chapter ? (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35 }}
                  className="card-heritage p-8 h-full"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center">
                      <BookOpen size={24} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="text-gold-600 dark:text-gold-400 text-sm font-semibold">Chapter {chapter.number}</p>
                      <h3 className="font-display text-2xl font-bold text-ink-800 dark:text-cream-100">{chapter.title}</h3>
                      <p className="text-ink-400 dark:text-cream-500 text-sm italic">{chapter.sanskrit}</p>
                    </div>
                  </div>

                  <p className="text-ink-600 dark:text-cream-400 leading-relaxed mb-6">{chapter.summary}</p>

                  {/* Key verse */}
                  <div className="bg-gold-50 dark:bg-gold-900/10 border border-gold-200 dark:border-gold-500/20 rounded-xl p-5 mb-6">
                    <p className="text-gold-700 dark:text-gold-400 text-xs font-bold tracking-widest uppercase mb-2">Key Verse ({chapter.keyVerse.verse})</p>
                    <p className="text-ink-700 dark:text-cream-300 italic leading-relaxed">"{chapter.keyVerse.text}"</p>
                  </div>

                  {/* Themes */}
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-ink-400 dark:text-cream-500 mb-3">Core Themes</p>
                    <div className="flex flex-wrap gap-2">
                      {chapter.themes.map((theme) => (
                        <span key={theme} className="text-xs px-3 py-1 rounded-full bg-peacock-100 dark:bg-peacock-900/20 text-peacock-700 dark:text-peacock-300">
                          {theme}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="card-heritage h-full flex items-center justify-center p-12 text-center">
                  <div>
                    <BookOpen size={40} className="text-gold-500/30 mx-auto mb-4" />
                    <p className="text-ink-400 dark:text-cream-500">Select a chapter to read its summary and key teachings.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

