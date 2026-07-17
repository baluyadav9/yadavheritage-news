export interface Business {
  id: number
  slug: string
  name: string
  owner: string
  category: 'dairy' | 'it' | 'construction' | 'hospitality' | 'agriculture' | 'textiles' | 'healthcare' | 'education' | 'retail' | 'finance'
  tagline: string
  description: string
  founded: string
  employees?: string
  location: string
  phone?: string
  email?: string
  website?: string
  imageUrl: string
  verified: boolean
  featured: boolean
  tags: string[]
}

export const businesses: Business[] = [
  {
    id: 1,
    slug: 'krishna-dairy-products',
    name: 'Krishna Dairy Products',
    owner: 'Shri Gopal Yadav',
    category: 'dairy',
    tagline: 'Pure Milk. Pure Heritage.',
    description:
      'Hyderabad\'s most trusted dairy brand since 1978, Krishna Dairy Products supplies fresh milk, ghee, paneer, curd, and butter across 200+ retail points in the twin cities. Their grass-fed cows produce exceptional A2 milk.',
    founded: '1978',
    employees: '250+',
    location: 'Alwal, Secunderabad',
    phone: '+91 98480 11234',
    email: 'info@krishnadairy.com',
    imageUrl: 'https://picsum.photos/id/659/800/500',
    verified: true,
    featured: true,
    tags: ['dairy', 'milk', 'A2 milk', 'ghee', 'Secunderabad'],
  },
  {
    id: 2,
    slug: 'govinda-tech-solutions',
    name: 'Govinda Tech Solutions',
    owner: 'Shri Krishna Mohan Yadav',
    category: 'it',
    tagline: 'Technology with Purpose',
    description:
      'A leading IT services and product company founded in 2005. Govinda Tech offers cloud solutions, enterprise software, and digital transformation services to clients across India, the US, and Europe.',
    founded: '2005',
    employees: '6,000+',
    location: 'HITEC City, Hyderabad',
    phone: '+91 40 6789 0000',
    email: 'careers@govindatech.in',
    website: 'govindatech.in',
    imageUrl: 'https://picsum.photos/id/180/800/500',
    verified: true,
    featured: true,
    tags: ['IT', 'software', 'cloud', 'HITEC City', 'enterprise'],
  },
  {
    id: 3,
    slug: 'yadav-constructions',
    name: 'Yadav Constructions & Developers',
    owner: 'Shri Raghuvir Yadav',
    category: 'construction',
    tagline: 'Building Homes, Building Futures',
    description:
      'One of Hyderabad\'s most reliable construction and real estate groups with over 40 years of experience. Specialising in affordable housing, commercial complexes, and infrastructure projects across Telangana.',
    founded: '1984',
    employees: '1,200+',
    location: 'Kukatpally, Hyderabad',
    phone: '+91 90000 45678',
    email: 'info@yadavconstruct.com',
    imageUrl: 'https://picsum.photos/id/335/800/500',
    verified: true,
    featured: true,
    tags: ['real estate', 'construction', 'housing', 'Kukatpally'],
  },
  {
    id: 4,
    slug: 'mathura-hotels',
    name: 'Mathura Hotels & Resorts',
    owner: 'Smt. Padmavathi Yadav',
    category: 'hospitality',
    tagline: 'Warmth. Taste. Tradition.',
    description:
      'A chain of 6 vegetarian hotels and resorts across Hyderabad, known for their authentic Telugu and North Indian cuisine, warm hospitality, and community-focused culture. All outlets are certified organic.',
    founded: '1999',
    employees: '400+',
    location: 'Multiple Locations, Hyderabad',
    phone: '+91 98490 22345',
    email: 'reservations@mathurahotels.com',
    imageUrl: 'https://picsum.photos/id/431/800/500',
    verified: true,
    featured: true,
    tags: ['hospitality', 'vegetarian', 'hotel', 'restaurant', 'organic'],
  },
  {
    id: 5,
    slug: 'brindavan-organic-farms',
    name: 'Brindavan Organic Farms',
    owner: 'Shri Nanda Kumar Yadav',
    category: 'agriculture',
    tagline: 'From Soil to Soul',
    description:
      'Pioneering organic farming in Telangana since 2008, Brindavan Farms supplies chemical-free vegetables, pulses, and grains directly from 300 acres of certified farmland to homes, hospitals, and restaurants.',
    founded: '2008',
    employees: '150+',
    location: 'Vikarabad, Hyderabad Rural',
    phone: '+91 94400 67890',
    imageUrl: 'https://picsum.photos/id/582/800/500',
    verified: true,
    featured: false,
    tags: ['organic', 'farming', 'vegetables', 'healthy food', 'Vikarabad'],
  },
  {
    id: 6,
    slug: 'nandini-textiles',
    name: 'Nandini Textiles & Sarees',
    owner: 'Smt. Rukmini Yadav',
    category: 'textiles',
    tagline: 'Weaving Heritage into Every Thread',
    description:
      'A three-generation textile business specializing in handloom sarees, traditional Pochampally silk, and ethnic wear. Nandini Textiles works directly with 200 handloom weavers, preserving traditional crafts.',
    founded: '1965',
    employees: '300+',
    location: 'Laad Bazaar, Charminar, Hyderabad',
    phone: '+91 40 2345 6789',
    imageUrl: 'https://picsum.photos/id/674/800/500',
    verified: true,
    featured: false,
    tags: ['textiles', 'sarees', 'handloom', 'Pochampally', 'Charminar'],
  },
  {
    id: 7,
    slug: 'yadav-finance-services',
    name: 'Yadav Finance & Investment Services',
    owner: 'Shri Ashok Yadav',
    category: 'finance',
    tagline: 'Your Future, Secured',
    description:
      'A SEBI-registered financial advisory and investment firm providing mutual fund guidance, insurance planning, and wealth management services with special focus on community members and small businesses.',
    founded: '2001',
    employees: '80+',
    location: 'Banjara Hills, Hyderabad',
    phone: '+91 95000 34567',
    email: 'invest@yadavfinance.in',
    imageUrl: 'https://picsum.photos/id/20/800/500',
    verified: true,
    featured: false,
    tags: ['finance', 'investment', 'insurance', 'wealth management'],
  },
  {
    id: 8,
    slug: 'gopala-healthcare',
    name: 'Gopala Healthcare Chain',
    owner: 'Dr. Mahesh Yadav',
    category: 'healthcare',
    tagline: 'Care at Every Corner',
    description:
      'A network of 15 primary healthcare clinics across Hyderabad offering affordable general medicine, pathology, dental, and eye care services. Special community discount for Yadav Mahasabha members.',
    founded: '2012',
    employees: '200+',
    location: 'Citywide, Hyderabad',
    phone: '+91 95500 11111',
    imageUrl: 'https://picsum.photos/id/390/800/500',
    verified: true,
    featured: false,
    tags: ['healthcare', 'clinic', 'affordable', 'dental', 'pathology'],
  },
]

export function getFeaturedBusinesses(): Business[] {
  return businesses.filter((b) => b.featured)
}

export const businessCategories = [
  'All',
  'dairy',
  'it',
  'construction',
  'hospitality',
  'agriculture',
  'textiles',
  'healthcare',
  'education',
  'retail',
  'finance',
] as const
