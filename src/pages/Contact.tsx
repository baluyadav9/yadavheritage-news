import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero } from '@/components/shared/PageHero'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { Input } from '@/components/ui/input'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-fade">
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you. Whether you have a question, suggestion, or want to join the community — reach out."
      />

      <section className="py-20 bg-mandala-dots relative">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionTitle
                  eyebrow="Reach Us"
                  title="We're Here for You"
                  align="left"
                  className="mb-6"
                />
                <p className="text-ink-500 dark:text-cream-500 text-sm leading-relaxed">
                  The Hyderabad Yadav Mahasabha community office is open Monday through Saturday.
                  For membership, events, scholarships, or general enquiries — we welcome all communication.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  {
                    icon: MapPin,
                    label: 'Visit Us',
                    text: 'Yadav Community Hall\nRoad No. 5, Jubilee Hills\nHyderabad — 500033',
                  },
                  {
                    icon: Phone,
                    label: 'Call Us',
                    text: '+91 40 2345 6789\n+91 90000 12345',
                  },
                  {
                    icon: Mail,
                    label: 'Email Us',
                    text: 'info@hydyadavcommunity.org\npresident@hydyadavmahasabha.org',
                  },
                  {
                    icon: Clock,
                    label: 'Office Hours',
                    text: 'Monday – Saturday\n10:00 AM – 6:00 PM',
                  },
                ].map(({ icon: Icon, label, text }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold-500" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-wider uppercase text-ink-400 dark:text-cream-500 mb-1">{label}</p>
                      {text.split('\n').map((line, i) => (
                        <p key={i} className="text-ink-700 dark:text-cream-300 text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="card-heritage p-6 sm:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={48} className="text-peacock-500 mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-ink-800 dark:text-cream-100 mb-2">
                      Message Received!
                    </h3>
                    <p className="text-ink-500 dark:text-cream-500">
                      Thank you for reaching out. We will get back to you within 2 business days.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                      className="mt-6 btn-outline-gold"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-bold text-ink-800 dark:text-cream-100">Send a Message</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink-600 dark:text-cream-400">Full Name *</label>
                        <Input
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink-600 dark:text-cream-400">Email Address *</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink-600 dark:text-cream-400">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-ink-600 dark:text-cream-400">Subject *</label>
                        <Input
                          placeholder="What is this regarding?"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-ink-600 dark:text-cream-400">Your Message *</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        className="flex w-full rounded-md border border-cream-400 dark:border-ink-600 bg-white dark:bg-ink-800 px-3 py-2 text-sm text-ink-800 dark:text-cream-200 placeholder:text-ink-400 dark:placeholder:text-ink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:border-transparent resize-none transition-colors"
                      />
                    </div>

                    <button type="submit" className="w-full btn-gold justify-center py-3">
                      <Send size={16} />
                      Send Message
                    </button>

                    <p className="text-xs text-ink-400 dark:text-cream-600 text-center">
                      We typically respond within 48 hours on business days.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

