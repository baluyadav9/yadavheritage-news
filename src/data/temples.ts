export interface Temple {
  id: number
  name: string
  deity: string
  location: string
  address: string
  established?: string
  description: string
  timings: {
    morning: string
    evening: string
    special?: string
  }
  specialEvents?: string[]
  phone?: string
  imageUrl: string
  mapLink?: string
  featured: boolean
}

export const temples: Temple[] = [
  {
    id: 1,
    name: 'Sri Krishna Mandir',
    deity: 'Lord Krishna & Radha Rani',
    location: 'Jubilee Hills',
    address: 'Plot No. 1238, Road No. 12, Jubilee Hills, Hyderabad — 500033',
    established: '1984',
    description:
      'The most revered Krishna temple in Hyderabad, known for its exquisite South Indian architecture and deeply devotional atmosphere. The main idol is an 8-foot black granite Krishna playing the flute.',
    timings: {
      morning: '5:00 AM – 12:00 PM',
      evening: '4:00 PM – 9:00 PM',
      special: 'Midnight darshan on Janmashtami',
    },
    specialEvents: ['Janmashtami Mahotsav', 'Radha Ashtami', 'Govardhan Puja', 'Gita Jayanti'],
    phone: '+91 40 2356 7890',
    imageUrl: 'https://picsum.photos/seed/temple-1/800/500',
    featured: true,
  },
  {
    id: 2,
    name: 'Radha Krishna Seva Mandir',
    deity: 'Radha Krishna',
    location: 'Banjara Hills',
    address: 'Road No. 2, Banjara Hills, Hyderabad — 500034',
    established: '1995',
    description:
      'A peaceful mandir known for its daily bhajan sessions, the Radha Krishna Seva Mandir is managed by a trust that also runs a free meal program for 200 devotees daily.',
    timings: {
      morning: '6:00 AM – 12:00 PM',
      evening: '5:00 PM – 9:00 PM',
    },
    specialEvents: ['Akhand Bhajan (monthly)', 'Holi Mahotsav', 'Deepawali Celebrations'],
    phone: '+91 40 2345 1234',
    imageUrl: 'https://picsum.photos/seed/temple-2/800/500',
    featured: true,
  },
  {
    id: 3,
    name: 'Brindavan Goshala & Mandir',
    deity: 'Lord Krishna (Govardhana form)',
    location: 'Secunderabad',
    address: 'Picket, Secunderabad — 500003',
    established: '1952',
    description:
      'One of the oldest Krishna temples in Hyderabad, Brindavan Goshala maintains 80 cows and distributes free milk to poor families daily. The Yadav community has a special historical bond with this temple.',
    timings: {
      morning: '5:30 AM – 11:30 AM',
      evening: '4:30 PM – 8:30 PM',
    },
    specialEvents: ['Govardhan Puja (grand)', 'Cow Puja on Deepawali', 'Gopastami'],
    phone: '+91 40 2789 0123',
    imageUrl: 'https://picsum.photos/seed/temple-3/800/500',
    featured: true,
  },
  {
    id: 4,
    name: 'Sri Govindapuram Devasthanam',
    deity: 'Lord Venkateswara-Krishna',
    location: 'Kukatpally',
    address: 'Phase 7, KPHB Colony, Kukatpally, Hyderabad — 500072',
    established: '2001',
    description:
      'A large community temple that hosts bhajan groups and weekly cultural programs, Sri Govindapuram Devasthanam is a hub for the Yadav community in the western parts of Hyderabad.',
    timings: {
      morning: '6:00 AM – 12:30 PM',
      evening: '4:00 PM – 9:00 PM',
    },
    specialEvents: ['Monthly Satyanarayan Puja', 'Ugadi Celebrations', 'Vaikuntha Ekadashi'],
    phone: '+91 40 2304 5678',
    imageUrl: 'https://picsum.photos/seed/temple-4/800/500',
    featured: false,
  },
  {
    id: 5,
    name: 'Krishna Priya Mandir',
    deity: 'Radha Krishna',
    location: 'LB Nagar',
    address: 'Near Saroornagar Stadium, LB Nagar, Hyderabad — 500074',
    established: '1988',
    description:
      'Serving the South Hyderabad Yadav community for over three decades, Krishna Priya Mandir is known for its spectacular Diwali celebrations and the annual Rath Yatra procession that draws 25,000 devotees.',
    timings: {
      morning: '6:00 AM – 12:00 PM',
      evening: '5:00 PM – 8:30 PM',
    },
    specialEvents: ['Annual Rath Yatra', 'Diwali Light Festival', 'Gokulastami'],
    phone: '+91 40 2401 3456',
    imageUrl: 'https://picsum.photos/seed/temple-5/800/500',
    featured: false,
  },
  {
    id: 6,
    name: 'Nandanagari Sri Krishna Mandir',
    deity: 'Lord Krishna (Bal Gopal form)',
    location: 'Uppal',
    address: 'Nandanagari Colony, Uppal, Hyderabad — 500039',
    established: '1976',
    description:
      'A beloved neighbourhood temple in East Hyderabad, Nandanagari Mandir\'s presiding deity is a charming Bal Gopal (child Krishna) idol said to be over 200 years old, brought from Mathura.',
    timings: {
      morning: '5:00 AM – 11:00 AM',
      evening: '4:00 PM – 8:00 PM',
    },
    specialEvents: ['Bal Gopal Janam Utsav', 'Bhajan Sandhya (weekly)'],
    phone: '+91 40 2700 1122',
    imageUrl: 'https://picsum.photos/seed/temple-6/800/500',
    featured: false,
  },
]
