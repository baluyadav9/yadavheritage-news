export interface Leader {
  id: number
  name: string
  designation: string
  organization: string
  mandal?: string
  phone?: string
  email?: string
  imageUrl: string
  bio: string
  elected?: string
  term?: string
}

export const communityLeaders: Leader[] = [
  {
    id: 1,
    name: 'Shri Mahendra Singh Yadav',
    designation: 'President',
    organization: 'Hyderabad Yadav Mahasabha',
    phone: '+91 90000 12345',
    email: 'president@hydyadavmahasabha.org',
    imageUrl: 'https://picsum.photos/id/338/800/500',
    bio: 'A businessman and social worker with 30 years of community service, Shri Mahendra Singh Yadav was elected as President in 2025 with a mandate to modernize community outreach and expand the scholarship program.',
    elected: '2025',
    term: '2025–2029',
  },
  {
    id: 2,
    name: 'Smt. Kamala Devi Yadav',
    designation: 'General Secretary',
    organization: 'Hyderabad Yadav Mahasabha',
    phone: '+91 90000 23456',
    email: 'secretary@hydyadavmahasabha.org',
    imageUrl: 'https://picsum.photos/id/349/800/500',
    bio: 'A retired high school principal, Smt. Kamala Devi Yadav has been instrumental in organizing the scholarship program and coordinating with government bodies for community welfare.',
    elected: '2025',
    term: '2025–2029',
  },
  {
    id: 3,
    name: 'Shri Balram Yadav',
    designation: 'Treasurer',
    organization: 'Hyderabad Yadav Mahasabha',
    phone: '+91 90000 34567',
    imageUrl: 'https://picsum.photos/id/367/800/500',
    bio: 'A chartered accountant by profession, Shri Balram Yadav has brought financial transparency and accountability to the Mahasabha, implementing online fund tracking for the first time.',
    elected: '2025',
    term: '2025–2029',
  },
  {
    id: 4,
    name: 'Shri Devendra Yadav',
    designation: 'Vice President',
    organization: 'Hyderabad Yadav Mahasabha',
    mandal: 'Secunderabad',
    imageUrl: 'https://picsum.photos/id/378/800/500',
    bio: 'Representing the Secunderabad mandal, Shri Devendra Yadav has been a vocal advocate for the rights of dairy farmers and has helped organize the community\'s participation in agricultural policy.',
    elected: '2025',
    term: '2025–2029',
  },
  {
    id: 5,
    name: 'Smt. Sunita Yadav',
    designation: 'Women\'s Wing President',
    organization: 'Yadav Mahila Mandal',
    phone: '+91 90000 56789',
    imageUrl: 'https://picsum.photos/id/435/800/500',
    bio: 'A leading voice for women\'s empowerment in the community, Smt. Sunita Yadav heads the Yadav Mahila Mandal which runs skill training, microloan, and health awareness programs for 5,000+ women.',
    elected: '2023',
    term: '2023–2027',
  },
  {
    id: 6,
    name: 'Shri Anil Kumar Yadav',
    designation: 'Youth Wing President',
    organization: 'Hyderabad Young Yadav Network',
    phone: '+91 90000 78901',
    email: 'youth@hydyadavmahasabha.org',
    imageUrl: 'https://picsum.photos/id/503/800/500',
    bio: 'A 32-year-old software engineer, Shri Anil Kumar founded the HYYN platform to connect young professionals. Under his leadership the youth network has grown to 8,000+ members and hosts monthly meetups.',
    elected: '2024',
    term: '2024–2028',
  },
]
