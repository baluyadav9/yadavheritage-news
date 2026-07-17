export interface GalleryItem {
  id: number
  title: string
  description: string
  imageUrl: string
  category: 'festival' | 'culture' | 'community' | 'heritage' | 'nature' | 'leaders'
  date?: string
  photographer?: string
  featured: boolean
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Janmashtami Celebrations at Jubilee Hills',
    description: 'The midnight Abhishekam during Janmashtami 2024 drew thousands of devotees.',
    imageUrl: 'https://picsum.photos/id/116/800/500',
    category: 'festival',
    date: '2024-08-26',
    featured: true,
  },
  {
    id: 2,
    title: 'Annual Yadav Sammelan 2024',
    description: 'Community leaders and families gathering at the grand annual sammelan at HICC.',
    imageUrl: 'https://picsum.photos/id/213/800/500',
    category: 'community',
    date: '2024-09-15',
    featured: true,
  },
  {
    id: 3,
    title: 'Kuchipudi Performance — Radha Devi Yadav',
    description: 'A breathtaking performance at Ravindra Bharathi celebrating 50 years of Kuchipudi mastery.',
    imageUrl: 'https://picsum.photos/id/534/800/500',
    category: 'culture',
    date: '2024-11-12',
    featured: true,
  },
  {
    id: 4,
    title: 'Govardhan Puja at Brindavan Gardens',
    description: 'Community members gathering to celebrate Govardhan Puja with traditional rituals.',
    imageUrl: 'https://picsum.photos/id/447/800/500',
    category: 'festival',
    date: '2024-11-02',
    featured: false,
  },
  {
    id: 5,
    title: 'Free Health Camp — Secunderabad',
    description: 'Doctors and volunteers serving patients at the community health camp.',
    imageUrl: 'https://picsum.photos/id/180/800/500',
    category: 'community',
    date: '2024-04-15',
    featured: true,
  },
  {
    id: 6,
    title: 'Scholarship Felicitation Ceremony',
    description: 'Meritorious students receiving their scholarship letters at Shilpakala Vedika.',
    imageUrl: 'https://picsum.photos/id/683/800/500',
    category: 'community',
    date: '2024-10-08',
    featured: false,
  },
  {
    id: 7,
    title: 'Wrestling Championship Finals',
    description: 'Vijay Kumar Yadav defending his national championship title at the Hyderabad arena.',
    imageUrl: 'https://picsum.photos/id/620/800/500',
    category: 'community',
    date: '2024-03-22',
    featured: false,
  },
  {
    id: 8,
    title: 'Yadav Community Heritage Walk — Old City',
    description: 'Members tracing the historical roots of the Yadav community through the lanes of Golconda.',
    imageUrl: 'https://picsum.photos/id/318/800/500',
    category: 'heritage',
    date: '2024-02-14',
    featured: true,
  },
  {
    id: 9,
    title: 'Business Expo — Yadav Entrepreneurs',
    description: 'A vibrant showcase of products and innovations at the annual business expo.',
    imageUrl: 'https://picsum.photos/id/335/800/500',
    category: 'community',
    date: '2024-10-20',
    featured: false,
  },
  {
    id: 10,
    title: 'Youth Leadership Summit Panel',
    description: 'Young leaders from diverse fields sharing their journeys at the inaugural Youth Summit.',
    imageUrl: 'https://picsum.photos/id/453/800/500',
    category: 'community',
    date: '2024-04-20',
    featured: false,
  },
  {
    id: 11,
    title: 'Gita Jayanti Recitation — NTR Stadium',
    description: 'One thousand participants reciting the Bhagavad Gita in unison at NTR Stadium.',
    imageUrl: 'https://picsum.photos/id/488/800/500',
    category: 'festival',
    date: '2024-12-05',
    featured: true,
  },
  {
    id: 12,
    title: 'Community Kitchen — Langar Seva',
    description: 'Volunteers serving over 5,000 people at the community kitchen during Diwali.',
    imageUrl: 'https://picsum.photos/id/292/800/500',
    category: 'community',
    date: '2024-10-31',
    featured: false,
  },
]

export function getFeaturedGallery(count = 6): GalleryItem[] {
  return galleryItems.filter((g) => g.featured).slice(0, count)
}
