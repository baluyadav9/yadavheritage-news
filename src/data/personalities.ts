export interface Personality {
  id: number
  slug: string
  name: string
  title: string
  field: 'politics' | 'business' | 'arts' | 'sports' | 'education' | 'social' | 'spiritual' | 'literature'
  birth?: string
  description: string
  fullBio?: string
  achievements: string[]
  imageUrl: string
  quote?: string
  awards?: string[]
  featured: boolean
  isLegend: boolean
}

export const personalities: Personality[] = [
  {
    id: 1,
    slug: 'dr-suresh-yadav',
    name: 'Dr. Suresh Yadav',
    title: 'Cardiologist & Community Health Champion',
    field: 'social',
    description:
      'Padma Shri awardee and founder of the Yadav Community Health Foundation, Dr. Suresh Yadav has provided free medical care to over 2 lakh underprivileged patients across Telangana.',
    achievements: [
      'Founded 14 free health camps across Hyderabad district',
      'Trained 300+ community health workers',
      'Established first free cardiac care unit for the community',
      'Recipient of Padma Shri for social service (2022)',
    ],
    imageUrl: 'https://picsum.photos/id/177/800/500',
    quote:
      'Service to humanity is service to God. When I treat a patient who cannot afford care, I see Krishna in them.',
    awards: ['Padma Shri (2022)', 'State Medical Excellence Award (2019)', 'Community Hero Award (2017)'],
    featured: true,
    isLegend: false,
  },
  {
    id: 2,
    slug: 'radha-devi-yadav',
    name: 'Smt. Radha Devi Yadav',
    title: 'Kuchipudi Maestro & Cultural Ambassador',
    field: 'arts',
    description:
      'A Sangeet Natak Akademi awardee and Padma Bhushan recipient, Smt. Radha Devi Yadav has devoted 50 years to preserving and propagating Kuchipudi dance, training over 3,000 students worldwide.',
    achievements: [
      'Performed at Carnegie Hall, New York and Royal Albert Hall, London',
      'Established the Brindavan Kuchipudi Academy with 3,000+ students',
      'Featured in UNESCO\'s Intangible Cultural Heritage documentation',
      'Choreographed the epic Mahabharata ballet performed in 12 countries',
    ],
    imageUrl: 'https://picsum.photos/id/64/800/500',
    quote:
      'Dance is our prayer made visible. Every performance is an offering to Krishna.',
    awards: ['Padma Bhushan (2018)', 'Sangeet Natak Akademi Award (2010)', 'Kalidas Samman (2015)'],
    featured: true,
    isLegend: false,
  },
  {
    id: 3,
    slug: 'krishna-mohan-yadav',
    name: 'Shri Krishna Mohan Yadav',
    title: 'Tech Entrepreneur & Job Creator',
    field: 'business',
    description:
      'From a small dairy business in Secunderabad, Krishna Mohan Yadav built a ₹1,200 crore IT services company employing 6,000+ professionals, 40% from rural Telangana.',
    achievements: [
      'Founded Govinda Tech Solutions, now listed on BSE Emerge',
      'Created employment for 6,000+ youth across Telangana',
      'Established Yadav Startup Fund with ₹50 crore corpus',
      'Built computer centers in 50 rural schools',
    ],
    imageUrl: 'https://picsum.photos/id/91/800/500',
    quote:
      'My grandfather was a cowherd. I am a tech entrepreneur. The community gives us wings — it is our duty to fly high and bring others along.',
    awards: ['ET Entrepreneur of the Year (2021)', 'CII Young Business Leader (2019)', 'Forbes India 40 Under 40 (2020)'],
    featured: true,
    isLegend: false,
  },
  {
    id: 4,
    slug: 'ias-vijayalakshmi-yadav',
    name: 'Smt. Vijayalakshmi Yadav, IAS',
    title: 'IAS Officer & Women\'s Rights Pioneer',
    field: 'politics',
    description:
      'A 1998 batch IAS officer from the Telangana cadre, Smt. Vijayalakshmi Yadav has served with distinction in 8 departments, championing women\'s self-help groups and rural development.',
    achievements: [
      'Implemented SHG program linking 50,000 women to microfinance',
      'Reduced school dropout rate by 65% in Medak district as Collector',
      'Designed the "Yadav Yuva" skill development program',
      'India\'s first Collector to receive the Prime Minister\'s Excellence Award twice',
    ],
    imageUrl: 'https://picsum.photos/id/169/800/500',
    quote:
      'A good officer is one whose departure makes no difference — because the systems she builds outlast her.',
    awards: ['PM Excellence Award (2012 & 2019)', 'Best IAS Officer Award (2015)', 'Women Achiever Award (2018)'],
    featured: true,
    isLegend: false,
  },
  {
    id: 5,
    slug: 'vijay-kumar-yadav-wrestler',
    name: 'Shri Vijay Kumar Yadav',
    title: 'National Wrestling Champion',
    field: 'sports',
    description:
      'A three-time National Wrestling Champion and Arjuna Awardee, Vijay Kumar Yadav is a living embodiment of the Yadav community\'s historic association with physical prowess and the martial arts.',
    achievements: [
      'Gold medal at National Wrestling Championship (3 consecutive years)',
      'Represented India at the Commonwealth Games (2018, 2022)',
      'Established the Yadav Wrestling Academy training 500+ youth',
      'Arjuna Award for Wrestling (2020)',
    ],
    imageUrl: 'https://picsum.photos/id/219/800/500',
    quote:
      'The strength of a Yadav comes first from character, then from the body.',
    awards: ['Arjuna Award (2020)', 'National Wrestling Championship Gold (2017, 2018, 2019)'],
    featured: false,
    isLegend: false,
  },
  {
    id: 6,
    slug: 'dr-sudha-yadav-education',
    name: 'Dr. Sudha Yadav',
    title: 'Educationist & Rural School Founder',
    field: 'education',
    description:
      'A retired university professor who sold her property to establish a chain of 25 free English-medium schools in rural Telangana. Her Brindavan Educational Trust has educated over 40,000 children.',
    achievements: [
      'Founded Brindavan Educational Trust with 25 schools',
      'Educated 40,000+ rural children since 1995',
      'First in state to introduce computer labs in govt schools via CSR',
      '100% board exam pass rate at all Brindavan schools for 15 years',
    ],
    imageUrl: 'https://picsum.photos/id/259/800/500',
    quote:
      'Knowledge is the inheritance we leave to every child. It cannot be taken away.',
    awards: ['National Teacher Award (2008)', 'UNESCO Education Award (2014)', 'Padma Shri (2020)'],
    featured: true,
    isLegend: false,
  },
  {
    id: 7,
    slug: 'lakshmi-narayana-yadav-politician',
    name: 'Shri Lakshmi Narayana Yadav',
    title: '4-Time MLA & Community Statesman',
    field: 'politics',
    description:
      'Serving the Serilingampally constituency for over two decades, Shri Lakshmi Narayana Yadav has championed urban infrastructure, affordable housing, and community welfare legislation.',
    achievements: [
      'Elected MLA for Serilingampally (2004, 2009, 2014, 2018)',
      'Spearheaded construction of 1,200 community housing units',
      'Established Yadav Cultural Complex in Hyderabad',
      'Led the passage of the Community Welfare Act in state assembly',
    ],
    imageUrl: 'https://picsum.photos/id/309/800/500',
    quote:
      'Politics is the art of public service. My voter is my master, my constituency is my family.',
    featured: false,
    isLegend: false,
  },
  {
    id: 8,
    slug: 'anand-yadav-music',
    name: 'Pandit Anand Yadav',
    title: 'Hindustani Classical Music Maestro',
    field: 'arts',
    description:
      'A disciple of the great Pt. Jasraj, Pandit Anand Yadav\'s soulful voice and mastery of the Mewati Gharana have earned him international acclaim, performing at prestigious stages across the world.',
    achievements: [
      'Performed at Sawai Gandharv Bhimsen Mahotsav for 20 consecutive years',
      'Released 12 critically acclaimed albums including Bhajan collections',
      'Trained 200+ students in classical vocal at his Nada Brindavan Gurukul',
      'Represented Indian classical music at UNESCO World Music Conference',
    ],
    imageUrl: 'https://picsum.photos/id/399/800/500',
    quote:
      'Music is the language in which the soul speaks to Krishna. Every raga is a path to the divine.',
    awards: ['Sangeet Natak Akademi Yuva Puraskar (2005)', 'Sur Mani (2012)', 'Tansen Samman (2021)'],
    featured: false,
    isLegend: false,
  },
]

export function getFeaturedPersonalities(): Personality[] {
  return personalities.filter((p) => p.featured)
}
