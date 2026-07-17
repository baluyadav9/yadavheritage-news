export interface NewsItem {
  id: number
  slug: string
  title: string
  excerpt: string
  body: string
  category: 'community' | 'culture' | 'business' | 'education' | 'politics' | 'sports'
  author: string
  publishedAt: string
  imageUrl: string
  featured: boolean
  tags: string[]
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    slug: 'welfare-trust-scholarship-fund-2025',
    title: 'Yadav Community Welfare Trust Announces ₹2 Crore Scholarship Fund',
    excerpt:
      'The Trust has committed ₹2 crore to support higher education for deserving students from our community, covering engineering, medical, and law courses at premier institutions.',
    body: `The Hyderabad Yadav Community Welfare Trust has announced a landmark scholarship initiative at their annual general meeting held at Ravindra Bharathi. The ₹2 crore fund will support 200 students annually through merit-cum-means scholarships covering tuition, hostel, and exam fees at government and private institutions across Telangana and Andhra Pradesh.

Trust Chairman Shri Ramaiah Yadav stated, "Education is the most powerful investment we can make in our community's future. Every child who earns a degree carries the entire community forward."

Applications will open on August 1, 2025. Students from Class XI through post-graduation are eligible.`,
    category: 'education',
    author: 'Editorial Team',
    publishedAt: '2025-06-15',
    imageUrl: 'https://picsum.photos/id/160/800/500',
    featured: true,
    tags: ['scholarship', 'education', 'welfare', 'youth'],
  },
  {
    id: 2,
    slug: 'janmashtami-2025-celebration',
    title: 'Krishna Janmashtami 2025: Record 60,000 Devotees Expected at Jubilee Hills Temple',
    excerpt:
      'The grand Janmashtami Mahotsav at Sri Krishna Mandir, Jubilee Hills, is set to be the largest celebration in the temple\'s 40-year history, with cultural programs spanning three days.',
    body: `Preparations for Janmashtami 2025 at Sri Krishna Mandir, Jubilee Hills are in full swing. The temple trust, in coordination with the Hyderabad Yadav Mahasabha, has planned a three-day program beginning August 15.

Highlights include classical Kuchipudi and Bharatanatyam performances, a recitation of the Bhagavad Gita by schoolchildren, devotional music concerts, and a grand Abhishekam at midnight on Janmashtami.

"Every year this celebration grows. It is not merely religious — it is our community affirming its identity and values," said temple trustee Smt. Padmavathi Yadav.`,
    category: 'culture',
    author: 'Ravi Kumar',
    publishedAt: '2025-06-10',
    imageUrl: 'https://picsum.photos/id/217/800/500',
    featured: true,
    tags: ['janmashtami', 'festival', 'krishna', 'temple'],
  },
  {
    id: 3,
    slug: 'mahasabha-executive-committee-2025',
    title: 'Hyderabad Yadav Mahasabha Elects New Executive Committee',
    excerpt:
      'In a historic election conducted across 24 mandals, the new executive committee of the Hyderabad Yadav Mahasabha was sworn in with a renewed vision for community development.',
    body: `The Hyderabad Yadav Mahasabha held its quadrennial elections for the executive committee, with participation from delegates representing 24 mandals across Greater Hyderabad.

Shri Mahendra Singh Yadav was elected as the new President with an overwhelming mandate. The new committee has pledged to focus on education, business development, and digital empowerment of youth.

The swearing-in ceremony was held at the grand Ambedkar Auditorium in Necklace Road, attended by over 3,000 community members.`,
    category: 'community',
    author: 'Suresh Yadav',
    publishedAt: '2025-05-28',
    imageUrl: 'https://picsum.photos/id/274/800/500',
    featured: false,
    tags: ['mahasabha', 'elections', 'leadership', 'community'],
  },
  {
    id: 4,
    slug: 'business-expo-2025-success',
    title: '400+ Entrepreneurs Shine at Yadav Business Expo 2025',
    excerpt:
      'The annual Business Expo at HICC drew record participation with entrepreneurs from dairy, IT, construction, and FMCG sectors showcasing innovations and forming new partnerships.',
    body: `The Hyderabad Yadav Business Expo 2025, held at the Hyderabad International Convention Centre, set a new record with 400+ exhibitors and more than 15,000 visitors over three days.

The expo featured sectors including dairy and agriculture, information technology, hospitality, textiles, and real estate. Business deals worth an estimated ₹180 crore were facilitated.

Chief Guest Smt. Vijayalakshmi Yadav, IAS, delivered the keynote on "Entrepreneurship as Community Service," inspiring the next generation of business leaders.`,
    category: 'business',
    author: 'Anand Rao',
    publishedAt: '2025-05-12',
    imageUrl: 'https://picsum.photos/id/335/800/500',
    featured: false,
    tags: ['business', 'expo', 'entrepreneurship', 'HICC'],
  },
  {
    id: 5,
    slug: 'free-health-camp-secunderabad',
    title: 'Community Hospital Initiative: Free Health Camps Serve 10,000 in Secunderabad',
    excerpt:
      'The Yadav Community Health Foundation conducted free medical camps across 12 locations in Secunderabad, providing diagnostics, medicines, and specialist consultations at no cost.',
    body: `The Yadav Community Health Foundation, led by Dr. Suresh Yadav, organized a month-long free health camp initiative covering 12 locations in Secunderabad and surrounding areas.

Over 10,000 patients received free consultations, blood tests, ECGs, and essential medicines. Specialist camps for diabetes, orthopaedics, gynaecology, and ophthalmology were also held.

"Health is wealth. When our community members are healthy, the entire community prospers," said Foundation President Dr. Sudha Yadav.`,
    category: 'community',
    author: 'Priya Devi',
    publishedAt: '2025-04-30',
    imageUrl: 'https://picsum.photos/id/390/800/500',
    featured: false,
    tags: ['health', 'welfare', 'community service', 'free camp'],
  },
  {
    id: 6,
    slug: 'youth-leadership-summit-hitec',
    title: 'First Yadav Youth Leadership Summit Concludes at HITEC City',
    excerpt:
      'Over 500 young professionals and students gathered for a two-day summit focused on leadership, technology careers, and community responsibility.',
    body: `The inaugural Hyderabad Yadav Youth Leadership Summit concluded with rousing calls to action from young leaders across industries. Held at a leading tech park in HITEC City, the summit featured workshops on startup creation, career planning in IT, civil services preparation, and community leadership.

Keynote addresses were delivered by Shri Arun Yadav, founder of a leading tech startup, and IPS officer Smt. Rekha Yadav, who shared her journey to the civil services.

The summit concluded with the formation of the Hyderabad Young Yadav Network (HYYN), a peer-mentorship platform for youth.`,
    category: 'education',
    author: 'Editorial Team',
    publishedAt: '2025-04-18',
    imageUrl: 'https://picsum.photos/id/430/800/500',
    featured: true,
    tags: ['youth', 'leadership', 'summit', 'careers'],
  },
  {
    id: 7,
    slug: 'yadav-mahasabha-national-rally-telangana-2025',
    title: 'Akhila Bharatha Yadav Mahasabha National Rally Enters Telangana',
    excerpt: 'The Akhila Bharatha Yadav Mahasabha\'s nationwide rally reached Hyderabad, demanding a dedicated Yadav Regiment in the Indian Army and felicitating outstanding community members across the state.',
    body: `The Akhila Bharatha Yadav Mahasabha's pan-India national rally entered Telangana on August 16, 2025 — coinciding with the day after Independence Day — bringing with it a wave of community pride and a powerful set of demands.

The Telangana state committee organised a large gathering in Hyderabad to welcome the rally and felicitate Yadav community members who have distinguished themselves in public service, education, business, and the armed forces.

The most prominent demand of the Mahasabha is the introduction of a dedicated Yadav Regiment in the Indian Army, recognising the historical martial contributions of the community to India's defence forces.

"The Yadav community has served this nation in every field — from farming the land to defending its borders. A Yadav Regiment is not a demand, it is a long-overdue recognition," said state committee president Baddula Babu Rao Yadav at the rally.

(Source: Deccan Chronicle, August 16, 2025)`,
    category: 'community',
    author: 'Editorial Team',
    publishedAt: '2025-08-16',
    imageUrl: 'https://picsum.photos/id/509/800/500',
    featured: true,
    tags: ['mahasabha', 'rally', 'army', 'Yadav regiment', 'national'],
  },
  {
    id: 8,
    slug: 'golla-kuruma-yadava-protest-cabinet-2025',
    title: 'Yadava & Golla Kuruma Communities Stage Protest at Gandhi Bhavan, Demand Cabinet Berth',
    excerpt: 'Members of the Yadava and Golla Kuruma communities gathered at Gandhi Bhavan in Hyderabad, demanding a ministerial post and a Rs 5,000 crore welfare fund from the Telangana Congress government.',
    body: `In a striking show of community solidarity, members of the Yadava and Golla Kuruma communities staged a unique protest at Gandhi Bhavan, Hyderabad, on June 23, 2025, demanding political representation and enhanced welfare support.

Demonstrators brought sheep to the protest venue — a symbolic gesture highlighting the pastoral heritage of their communities — while raising slogans demanding fair inclusion in the Congress-led Telangana cabinet.

The community delegation, led by Aleru MLA and government whip Beerla Ilaiah, submitted a representation to Deputy CM Mallu Bhatti Vikramarka seeking one cabinet minister post, one MLC seat, five corporation chairmanships, and Rs 5,000 crore in dedicated welfare funds.

The communities together represent approximately 28 lakh (2.8 million) voters in Telangana.

Congress leader Mahesh Kumar Goud met with the delegation and assured the community that their demands would be given due consideration.

(Source: Deccan Herald / Siasat Daily, June 23, 2025)`,
    category: 'politics',
    author: 'Editorial Team',
    publishedAt: '2025-06-23',
    imageUrl: 'https://picsum.photos/id/575/800/500',
    featured: false,
    tags: ['protest', 'politics', 'cabinet', 'Golla Kuruma', 'welfare', 'Gandhi Bhavan'],
  },
  {
    id: 9,
    slug: 'telangana-caste-survey-obc-yadava-2025',
    title: 'Telangana Caste Survey: Yadavas Among Key OBC Communities; State Passes 42% Reservation Bill',
    excerpt: 'CM Revanth Reddy unveiled Telangana\'s landmark socio-economic caste survey. Yadavas are identified as one of four major vulnerable communities, and the state passed a bill allocating 42% reservation for OBCs.',
    body: `Telangana CM A. Revanth Reddy unveiled the Telangana Socio-Economic Survey at Indira Bhawan, New Delhi, on July 25, 2025 — a landmark moment for OBC communities including Yadavas across the state.

Key findings: OBCs constitute 56.4% of Telangana's population. Yadavas are identified as one of four major castes (alongside Madiga, Mudiraj, and Lambadi) showing greater vulnerability, ranking below the state average on income indicators.

Following the survey, the Telangana government passed two reservation bills allocating 42% reservation for OBCs in education, employment, and political representation. SC reservations were raised from 15% to 17.5%, and ST from 6% to 10%.

Both bills are pending Presidential assent. CM Reddy urged Congress leaders Rahul Gandhi and Mallikarjun Kharge to advocate for their passage in Parliament.

(Source: Business Standard / ANI, July 25, 2025)`,
    category: 'politics',
    author: 'Editorial Team',
    publishedAt: '2025-07-25',
    imageUrl: 'https://picsum.photos/id/633/800/500',
    featured: true,
    tags: ['caste survey', 'OBC', 'reservation', 'Revanth Reddy', 'Telangana', 'welfare'],
  },
  {
    id: 10,
    slug: 'sadar-festival-state-festival-hyderabad-2025',
    title: 'Sadar Utsav Declared Telangana State Festival — Grand Celebrations Held Across Hyderabad',
    excerpt: 'The Telangana Congress government officially declared Sadar Sammelan a State Festival. The 2025 edition drew massive crowds at Narayanguda, Saidabad, Ameerpet, and Khairatabad.',
    body: `In a historic recognition of Yadav culture, the Telangana government under CM A. Revanth Reddy declared Sadar Utsav — the annual buffalo carnival of the Yadav community — an official State Festival. October 19, 2025 was fixed as the official day of commemoration.

Sadar, also known as Dunnapothula Pandaga (Festival of the Buffalo Cattle), is celebrated on the second day after Diwali. Buffaloes are adorned with garlands, painted horns, mirrors, and vibrant fabrics, and paraded through the streets in a carnival that draws lakhs of spectators.

The festival was founded in 1946 at Narayanguda YMCA, Hyderabad, by the late Sri Salandri Nyayam Chowdhary Mallaiah Yadav. It has grown from a single-locality event to a state-wide celebration held in all 33 districts of Telangana.

Key 2025 venues: Narayanguda YMCA (Pedha Sadar), Saidabad, Ameerpet, Khairatabad, and Shaikpet.

CM Revanth Reddy attended and declared: "Yadavon ka Kadar — Hyderabad Sadar!" The government also allocated state funds to support the festival as a tourism event.

(Source: The Hans India / ANI / Deccan Chronicle, October 2025)`,
    category: 'culture',
    author: 'Ravi Kumar',
    publishedAt: '2025-10-20',
    imageUrl: 'https://picsum.photos/id/680/800/500',
    featured: true,
    tags: ['Sadar', 'state festival', 'buffalo carnival', 'Dunnapothula', 'Diwali', 'culture'],
  },
  {
    id: 11,
    slug: 'golla-kuruma-bhavan-meeting-srinivas-yadav-2025',
    title: 'Minister Srinivas Yadav Chairs Meeting on Golla & Kuruma Community Bhavans',
    excerpt: 'Telangana Minister Talasani Srinivas Yadav convened a meeting on the construction of dedicated community halls for the Golla and Kuruma communities across Telangana.',
    body: `Telangana Minister Talasani Srinivas Yadav, a prominent Yadav community leader from Sanathnagar constituency, chaired an important meeting with officials and community representatives to plan the construction of Golla and Kuruma Bhavans (community halls) across Telangana.

The Bhavans are intended to serve as permanent community spaces for social gatherings, weddings, cultural events, and community welfare activities — a demand the Golla and Kuruma communities have raised for decades.

The meeting discussed potential sites in Hyderabad and major district headquarters, funding mechanisms, and architectural plans.

"Our community needs spaces to come together, celebrate, and conduct our events with dignity. These Bhavans will be centres of community life for generations to come," Minister Yadav stated.

(Source: Business Standard, 2025)`,
    category: 'community',
    author: 'Suresh Yadav',
    publishedAt: '2025-09-10',
    imageUrl: 'https://picsum.photos/id/725/800/500',
    featured: false,
    tags: ['Golla Kuruma', 'Bhavan', 'community hall', 'Srinivas Yadav', 'welfare'],
  },
  {
    id: 12,
    slug: 'revanth-reddy-sadar-sammelan-yadav-political-promise-2025',
    title: 'CM Revanth Reddy Attends Sadar Sammelan, Pledges Political Opportunities for Yadav Community',
    excerpt:
      'Telangana Chief Minister A. Revanth Reddy participated in the Sri Krishna Sadar Sammelan in Hyderabad and promised the Yadav community political representation and full government support.',
    body: `Telangana Chief Minister A. Revanth Reddy attended the "Sadar Sammelan" organised by the Sri Krishna Sadar Sammelan Utsav Committee in Hyderabad on October 19, 2025, reaffirming his government's commitment to the Yadav community.

Speaking at the event, CM Reddy said that the state government is giving importance to the Yadav community in providing political opportunities as well as extending the benefits of all welfare schemes. He assured the community that the government would remain accessible to address all their grievances.

"Yadavon ka Khadar, Hyderabad Sadar!" — the Chief Minister invoked the popular Yadav proverb, acknowledging that the Yadav community is synonymous with trust and reliance. He recalled the pivotal role played by the community in the formation and development of Telangana.

CM Reddy also credited the Congress government with declaring Sadar Utsav as an official State Festival and providing dedicated funds for its promotion — contrasting this with the previous BRS government which, he alleged, had neglected the festival.

State Ministers P. Srinivas Reddy, Ponnam Prabhakar, Vakati Srihari, former Haryana Governor Bandaru Dattatreya, BJP State President Ramchander Rao, and former MP Anjan Kumar Yadav were also present at the Sammelan.

(Source: The Hans India, October 19, 2025)`,
    category: 'politics',
    author: 'Editorial Team',
    publishedAt: '2025-10-19',
    imageUrl: 'https://picsum.photos/id/763/800/500',
    featured: true,
    tags: ['Revanth Reddy', 'Sadar Sammelan', 'political promise', 'welfare', 'state festival'],
  },
  {
    id: 13,
    slug: 'telangana-caste-census-yadava-golla-population-data-2026',
    title: 'Telangana Caste Census: Yadava (Golla) Community 20 Lakh Strong, 3rd Largest BC Group',
    excerpt:
      'The Telangana SEEEPC caste census reveals Yadava (Golla) is the third-largest Backward Class community in the state with a population of over 20 lakh across 6.39 lakh households.',
    body: `The Telangana Socio-Economic Education Employment Political and Caste (SEEEPC) census has published detailed district-wise data for all communities, revealing important demographic insights for the Yadava (Golla) community.

According to the official caste release, Yadava (Golla) accounts for 20,18,725 people and 6,39,479 households across Telangana — making up 5.7% of the total state population. Within the Backward Classes category, the community is ranked #3 overall and #2 within the BC-D sub-group, comprising 10.1% of BC family population.

The largest concentration of Yadava (Golla) families is found in Nalgonda district with 2,18,357 individuals (10.8% of the community's statewide total), followed by GHMC (Hyderabad) with 1,23,725, Suryapet with 1,10,119, Khammam with 1,00,260, and Mahabubnagar with 94,206.

The data provides valuable advocacy ammunition: with over 20 lakh members, the Yadava (Golla) community is one of the most significant OBC groups in Telangana and is using this data to press for proportional political representation and welfare allocation ahead of the 2026 Telangana Assembly Elections.

Community leaders have welcomed the district-level data, noting it enables precise targeting of welfare programmes and strengthens the case for reservation and political representation.

(Source: Telangana SEEEPC Caste Census, TGDataHub, April 2026)`,
    category: 'community',
    author: 'Editorial Team',
    publishedAt: '2026-04-20',
    imageUrl: 'https://picsum.photos/id/819/800/500',
    featured: true,
    tags: ['caste census', 'SEEEPC', 'Yadava Golla', 'OBC', 'Telangana', 'population data'],
  },
  {
    id: 14,
    slug: 'talasani-secunderabad-municipal-corporation-agitation-2026',
    title: 'Talasani Srinivas Yadav Leads BRS Agitation for Separate Secunderabad Municipal Corporation',
    excerpt:
      "Former Telangana Minister and BRS leader Talasani Srinivas Yadav vowed to continue the agitation demanding a separate Secunderabad Municipal Corporation, opposing the Congress government's merger plans.",
    body: `Former Telangana Minister Talasani Srinivas Yadav, one of the most prominent Yadav community leaders in Telangana politics, spearheaded an agitation for the formation of a separate Secunderabad Municipal Corporation in early 2026.

The BRS leader declared that the agitation would continue until the demand was met, criticising the Congress government's plans to merge Secunderabad into the Malkajgiri Municipal Corporation. "Secunderabad has a 220-year rich history and heritage, which is a matter of our identity and self-respect," Talasani stated.

The BRS party called for a peaceful rally from Secunderabad Railway Station to the Mahatma Gandhi statue on MG Road. However, police initially granted permission but revoked it late at night — a move Talasani criticised as politically motivated. Tensions gripped the city as BRS workers staged protests at multiple points.

Talasani announced plans for a larger rally in February 2026, pending court clearance. "We will fight till Secunderabad Corporation is created," he declared, drawing strong support from Secunderabad residents who fear the loss of their city's distinct identity.

As a BRS candidate from Sanathnagar constituency for the 2026 Telangana Assembly Elections, Talasani's activism underscores the Yadav community's significant political weight across the twin cities.

(Source: Telangana Today / Deccan Chronicle / The Hans India, January 2026)`,
    category: 'politics',
    author: 'Suresh Yadav',
    publishedAt: '2026-01-20',
    imageUrl: 'https://picsum.photos/id/866/800/500',
    featured: false,
    tags: ['Talasani Srinivas Yadav', 'Secunderabad', 'municipal corporation', 'BRS', 'agitation'],
  },
  {
    id: 15,
    slug: 'pm-yashasvi-scholarship-2026-obc-yadav-youth-apply',
    title: 'PM Yashasvi Scholarship 2026: Yadav & OBC Youth Can Apply — Deadline August 31',
    excerpt:
      'The PM Yashasvi Scholarship Scheme 2026-27 is open for OBC students including Yadav youth, offering up to ₹1.25 lakh per year. Last date to apply is August 31, 2026.',
    body: `The PM Yashasvi (Young Achievers Scholarship Award Scheme for Vibrant India) Scheme 2026-27 is now open for applications, offering a significant financial lifeline to students from OBC communities — including Yadav youth across Telangana and India.

Managed by the Ministry of Social Justice and Empowerment, the scheme provides up to ₹75,000 per year for Class 9–10 students and up to ₹1,25,000 per year for Class 11–12 students from OBC, EBC (Economically Backward Class), and DNT (De-Notified, Nomadic, and Semi-Nomadic Tribe) communities.

Yadav students whose family income is below ₹8 lakh per annum are eligible to apply. The application process is entirely online through the National Scholarship Portal. Candidates must have secured at least 60% marks in their previous class examination.

Telangana's Yadav community leaders have been urging students to take advantage of this scheme. With Yadava (Golla) youth forming 5.7% of Telangana's population, this national OBC scholarship programme presents a major opportunity for higher education funding.

Students can apply through the National Scholarship Portal at scholarships.gov.in. The deadline to apply is August 31, 2026.

(Source: Ministry of Social Justice and Empowerment / India Scholarships, July 2026)`,
    category: 'education',
    author: 'Editorial Team',
    publishedAt: '2026-07-14',
    imageUrl: 'https://picsum.photos/id/20/800/500',
    featured: false,
    tags: ['scholarship', 'PM Yashasvi', 'OBC', 'education', 'youth', 'welfare'],
  },

  {
    id: 16,
    slug: 'naveen-yadav-jubilee-hills-bypoll-win-2025',
    title: 'Congress\'s Naveen Yadav Wins Jubilee Hills By-Poll with 25,000 Vote Majority',
    excerpt:
      'Vallala Naveen Yadav of the Congress party secured a historic victory in the Jubilee Hills by-election, defeating BRS candidate Maganti Sunitha by over 25,000 votes — a significant political win for the Yadav community in Hyderabad.',
    body: `The November 2025 Jubilee Hills Assembly by-election produced a landmark result for the Yadav community, as Congress candidate Vallala Naveen Yadav romped home with a majority of 24,729 votes — one of the largest margins seen in a Hyderabad by-poll in recent years.

Naveen Yadav polled 98,988 votes against BRS candidate Maganti Sunitha's 74,259, with BJP's Lankala Deepak Reddy a distant third at 17,061 votes. The by-election was necessitated by the passing of sitting BRS MLA Maganti Gopinath.

The victory was celebrated across the Yadav community in Hyderabad as a sign of growing community influence in mainstream Telangana politics. Naveen Yadav becomes the MLA for Jubilee Hills — a high-profile urban constituency covering HITEC City, Banjara Hills, and Film Nagar — signalling a shift in the area's political loyalties.

CM Revanth Reddy personally congratulated Naveen Yadav and noted that the Congress government's inclusive approach had been endorsed by the voters. The result also bolstered the Congress party's grip on Telangana politics following earlier by-poll wins.

(Source: India.com / BusinessToday / The Federal, November 2025)`,
    category: 'politics',
    author: 'Editorial Team',
    publishedAt: '2025-11-14',
    imageUrl: 'https://picsum.photos/id/48/800/500',
    featured: true,
    tags: ['Naveen Yadav', 'Jubilee Hills', 'by-election', 'Congress', 'Telangana'],
  },
  {
    id: 17,
    slug: 'nagarjuna-yadav-ysrcp-arrested-hyderabad-july-2026',
    title: 'YSRCP Spokesperson Nagarjuna Yadav Arrested by Hyderabad Police Over TV Remarks',
    excerpt:
      'YSRCP spokesperson Nagarjuna Yadav was arrested by Telangana police on July 12, 2026, from Guntur, over comments made against Chief Minister Revanth Reddy during a television debate two years prior — sparking controversy over the timing of the arrest.',
    body: `In a politically charged development, Telangana police arrested YSRCP (YSR Congress Party) spokesperson Nagarjuna Yadav from Guntur district, Andhra Pradesh, on July 12, 2026, in connection with alleged derogatory remarks made against Telangana Chief Minister A. Revanth Reddy.

The case was registered at Begum Bazar Police Station, Hyderabad, on July 10, 2026, following a complaint filed by advocate Kailash Sajjan. The complaint alleged that Nagarjuna Yadav had referred to CM Revanth Reddy as a "Zomato-Swiggy delivery boy" and made other disparaging comments about his suitability for the Chief Minister's office.

The controversy stems from a television debate that took place in July 2024 — nearly two years before the arrest — raising questions about the timing of the action. An old video clip had resurfaced and gone viral on social media before the case was filed and the arrest followed within days.

YSRCP condemned the arrest as politically motivated, stating the comments were made as political criticism during a news debate and that the sudden action two years later reflected the Congress government's alleged intolerance of dissent. The party called for Nagarjuna Yadav's immediate release.

The episode underscores the heightened political tensions in Telangana in mid-2026, with ruling Congress and opposition parties clashing on multiple fronts ahead of upcoming local body elections.

(Source: Siasat Daily / The South First / Deccan Chronicle, July 12, 2026)`,
    category: 'politics',
    author: 'Editorial Team',
    publishedAt: '2026-07-12',
    imageUrl: 'https://picsum.photos/id/96/800/500',
    featured: false,
    tags: ['Nagarjuna Yadav', 'YSRCP', 'arrest', 'Hyderabad', 'politics'],
  },
  {
    id: 18,
    slug: 'doddi-komarayya-first-martyr-telangana-peasant-struggle-yadava',
    title: 'Doddi Komarayya: The Yadava Shepherd Who Became the First Martyr of Telangana\'s Peasant Struggle',
    excerpt:
      'As Telangana\'s caste census renews focus on BC community histories, the story of Doddi Komarayya — a Golla/Yadava shepherd who sacrificed his life for peasant rights — is gaining renewed recognition in state competitive exam curricula.',
    body: `The July 2026 Telangana Public Service Commission (TGPSC) current affairs bulletin has spotlighted Doddi Komarayya — a figure from the Golla/Kuruma/Yadava shepherd community — as the First Martyr of the Telangana Peasant Struggle. His story, once preserved mainly in local oral tradition, is now entering the mainstream curriculum of Telangana's competitive exam ecosystem.

Doddi Komarayya was born in the Jangaon region into a poor Golla/Yadava shepherd family during the years of the Nizam's Hyderabad State. He became one of the earliest participants in the Telangana armed peasant uprising — a movement led by the Communist Party of India against the feudal Deshmukh-Dora landlord system and the Nizam's oppressive rule over the Deccan.

He was killed by the Nizam's armed forces and Deshmukh retainers, making him the first known martyr of the peasant resistance that eventually swept through the Nalgonda, Warangal, and Bidar districts of Hyderabad State between 1946 and 1951. That armed struggle ultimately paved the way for police action and the integration of Hyderabad State into the Indian Union.

The renewed recognition of Komarayya's sacrifice is significant for the Yadava (Golla) community, which has a long-documented history of both pastoral leadership and anti-feudal resistance in the Deccan region. Community historians note that shepherd communities bore heavy burdens under the Nizam's cattle-taxation systems, making Komarayya's resistance a deeply community-rooted act of defiance.

Yadav community leaders have called for a statue and dedicated memorial to Doddi Komarayya to be established in Hyderabad, on the lines of memorials to other Telangana struggle martyrs such as Komaram Bheem and Alluri Sitarama Raju.

(Source: KPIAS Academy TGPSC Current Affairs, July 6, 2026)`,
    category: 'culture',
    author: 'Editorial Team',
    publishedAt: '2026-07-06',
    imageUrl: 'https://picsum.photos/id/129/800/500',
    featured: false,
    tags: ['Doddi Komarayya', 'Telangana peasant struggle', 'Yadava heritage', 'history', 'Golla Kuruma'],
  },
  {
    id: 19,
    slug: 'sadar-utsav-2026-preparations-underway-hyderabad',
    title: 'Sadar Utsav 2026 Preparations Begin Across Hyderabad — Grandest Edition Expected',
    excerpt:
      'Community committees across Hyderabad have begun planning for Sadar Utsav 2026, the Yadav community\'s iconic buffalo carnival now officially recognised as a Telangana State Festival, expected to draw over a lakh spectators.',
    body: `With Sadar Utsav 2026 set to fall on October 21 — the second day after Diwali — community organising committees across Hyderabad's major Yadav neighbourhoods have already begun preparations, promising the grandest edition of the buffalo carnival since Telangana declared it a State Festival.

The Pedha Sadar (Grand Sadar) at Narayanguda YMCA, which traces the festival's origins to 1946, will once again serve as the flagship event. Committees at Saidabad, Ameerpet, Khairatabad, Shaikpet, Bolarum, and Secunderabad's Risala Bazar are coordinating separately, with the Hyderabad Yadav Mahasabha overseeing the overall city-level programme.

For 2026, organisers plan to incorporate a cultural stage at each major venue featuring Yadava folk music, Sadar dance performances, and a special felicitation of cattle breeders and dairy farmers from across Telangana. The state government is expected to allocate funds under the Tourism Promotion Fund for the second consecutive year.

Sadar — also known as Dunnapothula Pandaga (Festival of the Buffalo Cattle) — sees buffaloes adorned with garlands of flowers, turmeric, painted horns, mirrors, and fabric, and paraded through streets to the beat of the iconic Special Yadav Band and teen maar drumming. The procession is as much a community celebration as it is a tribute to the pastoral heritage of Golla-Yadava families.

"Sadar is not just a festival. It is our culture, our identity, our pride. Every year when I see the procession, I see who we are," said Sri Krishna Sadar Sammelan Committee President Satish Yadav, speaking about preparations underway in July 2026.

(Source: Telangana Today / ANI / Community Organisers, July 2026)`,
    category: 'culture',
    author: 'Ravi Kumar',
    publishedAt: '2026-07-10',
    imageUrl: 'https://picsum.photos/id/582/800/500',
    featured: true,
    tags: ['Sadar', 'Dunnapothula Pandaga', 'Narayanguda', 'state festival', 'Hyderabad', '2026'],
  },
]
