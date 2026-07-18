import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Clock, User, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: 'The Pastoral Roots of Yadav Identity: From Vrindavan to Modern Telangana',
    excerpt: 'How the ancient cattle-herding traditions of the Yadava clan shaped a distinctive culture that persists — and thrives — in 21st-century Hyderabad.',
    author: 'Dr. Ramesh Yadav',
    date: '2025-06-01',
    readTime: '8 min read',
    category: 'Culture',
    imageUrl: 'https://picsum.photos/seed/article-1/800/400',
  },
  {
    id: 2,
    title: 'The Bhagavad Gita and Modern Leadership: Lessons for Today\'s Entrepreneurs',
    excerpt: 'Krishna\'s teaching on nishkama karma — action without attachment to outcome — offers a surprisingly modern framework for ethical and effective leadership.',
    author: 'Smt. Padmavathi Yadav',
    date: '2025-05-22',
    readTime: '6 min read',
    category: 'Spiritual',
    imageUrl: 'https://picsum.photos/seed/article-2/800/400',
  },
  {
    id: 3,
    title: 'Kuchipudi: The Classical Dance That Carries Our Heritage',
    excerpt: 'An exploration of how the Kuchipudi dance tradition — born in a small Andhra village — became one of India\'s most celebrated art forms and a source of deep Yadav pride.',
    author: 'Smt. Radha Devi Yadav',
    date: '2025-05-10',
    readTime: '10 min read',
    category: 'Arts',
    imageUrl: 'https://picsum.photos/seed/article-3/800/400',
  },
  {
    id: 4,
    title: 'The Yadav Dairy Revolution: How Our Community Feeds Hyderabad',
    excerpt: 'From a handful of traditional dairy farms in Secunderabad to a ₹5,000 crore industry — the untold story of how Yadav dairy entrepreneurs built the backbone of Hyderabad\'s food supply.',
    author: 'Shri Gopal Yadav',
    date: '2025-04-28',
    readTime: '7 min read',
    category: 'Business',
    imageUrl: 'https://picsum.photos/seed/article-4/800/400',
  },
  {
    id: 5,
    title: 'Education as Liberation: The Scholarship Movement in Our Community',
    excerpt: 'How community-funded scholarships have transformed the educational and professional profiles of Yadav youth over the past two decades.',
    author: 'Dr. Sudha Yadav',
    date: '2025-04-15',
    readTime: '9 min read',
    category: 'Education',
    imageUrl: 'https://picsum.photos/seed/article-5/800/400',
  },
  {
    id: 6,
    title: 'Govardhan Puja: The Festival That Remembers Our Roots',
    excerpt: 'The story behind Govardhan Puja — the festival where Lord Krishna lifted a mountain to protect his people — and what it means for a community with deep pastoral heritage.',
    author: 'Editorial Team',
    date: '2025-04-01',
    readTime: '5 min read',
    category: 'Culture',
    imageUrl: 'https://picsum.photos/seed/article-6/800/400',
  },
]

const categoryColor: Record<string, string> = {
  Culture: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
  Spiritual: 'bg-saffron-100 text-saffron-700 dark:bg-saffron-900/30 dark:text-saffron-300',
  Arts: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  Business: 'bg-peacock-100 text-peacock-700 dark:bg-peacock-900/30 dark:text-peacock-300',
  Education: 'bg-gold-100 text-gold-700 dark:bg-gold-900/30 dark:text-gold-300',
}

export default function Articles() {
  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Articles"
        title="Perspectives & Stories"
        subtitle="Essays, cultural explorations, and community voices from the pages of our portal."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured article */}
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 group card-heritage overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden bg-cream-300 dark:bg-ink-700">
                <img
                  src={articles[0].imageUrl}
                  alt={articles[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${categoryColor[articles[0].category]}`}>
                  {articles[0].category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-ink-400 dark:text-cream-600 mb-3">
                  <span className="flex items-center gap-1"><User size={11}/>{articles[0].author}</span>
                  <span className="flex items-center gap-1"><Clock size={11}/>{articles[0].readTime}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-ink-800 dark:text-cream-100 leading-snug mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {articles[0].title}
                </h2>
                <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed line-clamp-3 mb-4">{articles[0].excerpt}</p>
                <span className="inline-flex items-center gap-1 text-gold-600 dark:text-gold-400 text-sm font-semibold">
                  Read Article <ArrowRight size={14}/>
                </span>
              </div>
            </motion.article>

            {/* Side articles */}
            <div className="flex flex-col gap-4">
              {articles.slice(1, 4).map((a, i) => (
                <motion.article
                  key={a.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group card-heritage p-4 flex gap-3"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-cream-300 dark:bg-ink-700">
                    <img src={a.imageUrl} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" loading="lazy" />
                  </div>
                  <div>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${categoryColor[a.category]}`}>{a.category}</span>
                    <h3 className="font-semibold text-sm text-ink-700 dark:text-cream-200 leading-snug mt-1 line-clamp-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{a.title}</h3>
                    <span className="text-xs text-ink-400 dark:text-cream-600">{a.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* More articles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {articles.slice(4).map((a, i) => (
              <motion.article
                key={a.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group card-heritage overflow-hidden"
              >
                <div className="h-36 overflow-hidden bg-cream-300 dark:bg-ink-700">
                  <img src={a.imageUrl} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${categoryColor[a.category]}`}>{a.category}</span>
                  <h3 className="font-display text-lg font-bold text-ink-800 dark:text-cream-100 mt-2 mb-2 leading-snug line-clamp-2 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">{a.title}</h3>
                  <div className="text-xs text-ink-400 dark:text-cream-600 flex gap-2">
                    <span>{a.author}</span> · <span>{a.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

