export interface Achievement {
  id: number
  title: string
  description: string
  year: string
  category: 'education' | 'politics' | 'sports' | 'arts' | 'business' | 'social' | 'awards'
  personName?: string
  imageUrl?: string
  significance: 'landmark' | 'major' | 'notable'
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'First Yadav IAS Officer from Telangana',
    description:
      'Shri Ranga Rao Yadav became the first person from the Telangana Yadav community to clear the UPSC civil services examination, paving the way for dozens of others to follow.',
    year: '1978',
    category: 'education',
    personName: 'Shri Ranga Rao Yadav',
    significance: 'landmark',
  },
  {
    id: 2,
    title: 'Yadav Community\'s First Padma Shri',
    description:
      'Dr. Ramachandra Yadav received the Padma Shri for his pioneering work in rural health, becoming the first member of our community to receive this national honour.',
    year: '1986',
    category: 'awards',
    personName: 'Dr. Ramachandra Yadav',
    significance: 'landmark',
  },
  {
    id: 3,
    title: '200+ Scholarships Awarded Annually',
    description:
      'The Yadav Community Welfare Trust now awards over 200 scholarships annually totalling ₹2 crore, supporting students in engineering, medicine, law, and liberal arts.',
    year: '2025',
    category: 'education',
    significance: 'major',
  },
  {
    id: 4,
    title: 'National Wrestling Championship — 3 Consecutive Golds',
    description:
      'Vijay Kumar Yadav\'s three consecutive national wrestling championship titles (2017–2019) put the community on the national sports map and revived interest in traditional wrestling.',
    year: '2019',
    category: 'sports',
    personName: 'Shri Vijay Kumar Yadav',
    significance: 'major',
  },
  {
    id: 5,
    title: 'Kuchipudi Master — UNESCO Heritage Recognition',
    description:
      'Smt. Radha Devi Yadav\'s contribution to Kuchipudi dance was featured in UNESCO\'s documentation of India\'s Intangible Cultural Heritage, a first for a Hyderabad-based artist.',
    year: '2016',
    category: 'arts',
    personName: 'Smt. Radha Devi Yadav',
    significance: 'landmark',
  },
  {
    id: 6,
    title: 'Govinda Tech Listed on BSE Emerge',
    description:
      'Govinda Tech Solutions became the first company owned by a Yadav entrepreneur from Telangana to be listed on a national stock exchange, valuing at ₹1,200 crore.',
    year: '2022',
    category: 'business',
    personName: 'Shri Krishna Mohan Yadav',
    significance: 'landmark',
  },
  {
    id: 7,
    title: '40,000 Children Educated Through Brindavan Schools',
    description:
      'Dr. Sudha Yadav\'s Brindavan Educational Trust has now educated over 40,000 children across 25 schools in rural Telangana, achieving 100% board pass rates for 15 consecutive years.',
    year: '2025',
    category: 'education',
    personName: 'Dr. Sudha Yadav',
    significance: 'landmark',
  },
  {
    id: 8,
    title: 'Mahasabha Membership Crosses 2.5 Lakh',
    description:
      'The Hyderabad Yadav Mahasabha has grown to over 2.5 lakh registered members across 24 mandals, making it the largest community organization in Telangana.',
    year: '2024',
    category: 'social',
    significance: 'major',
  },
  {
    id: 9,
    title: 'First Yadav Woman to Lead Telangana IPS',
    description:
      'Smt. Rekha Yadav, IPS, became the first woman from the Yadav community to be appointed to a senior position in the Telangana Police Service, serving with distinction.',
    year: '2021',
    category: 'politics',
    personName: 'Smt. Rekha Yadav, IPS',
    significance: 'landmark',
  },
  {
    id: 10,
    title: '10 Lakh Meals Served — Community Kitchen Initiative',
    description:
      'The Yadav Community Kitchen Network crossed 10 lakh meals served since its founding, operating 8 free community kitchens feeding 1,500 people daily across Hyderabad.',
    year: '2024',
    category: 'social',
    significance: 'major',
  },
]
