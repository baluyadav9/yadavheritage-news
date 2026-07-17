export interface Quote {
  id: number
  text: string
  source: string
  chapter?: string
  verse?: string
  sanskrit?: string
  category: 'gita' | 'krishna' | 'wisdom'
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: 'You have the right to perform your duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, and never be attached to not doing your duty.',
    source: 'Bhagavad Gita',
    chapter: '2',
    verse: '47',
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन',
    category: 'gita',
  },
  {
    id: 2,
    text: 'The soul can never be cut into pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.',
    source: 'Bhagavad Gita',
    chapter: '2',
    verse: '23',
    sanskrit: 'नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः',
    category: 'gita',
  },
  {
    id: 3,
    text: 'Whenever and wherever there is a decline in religious practice, O descendant of Bharata, and a predominant rise of irreligion — at that time I descend myself.',
    source: 'Bhagavad Gita',
    chapter: '4',
    verse: '7',
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत',
    category: 'gita',
  },
  {
    id: 4,
    text: 'For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind will remain the greatest enemy.',
    source: 'Bhagavad Gita',
    chapter: '6',
    verse: '6',
    category: 'gita',
  },
  {
    id: 5,
    text: 'Abandon all varieties of religion and just surrender unto me. I shall deliver you from all sinful reactions. Do not fear.',
    source: 'Bhagavad Gita',
    chapter: '18',
    verse: '66',
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज',
    category: 'gita',
  },
  {
    id: 6,
    text: 'Among all creations I am the beginning and the end and also the middle, O Arjuna. Of all sciences I am the spiritual science of the self, and among logicians I am the conclusive truth.',
    source: 'Bhagavad Gita',
    chapter: '10',
    verse: '32',
    category: 'krishna',
  },
  {
    id: 7,
    text: 'A person can rise through the efforts of his own mind, or draw himself down, in the same manner. For each person, the mind can be a friend or an enemy.',
    source: 'Bhagavad Gita',
    chapter: '6',
    verse: '5',
    category: 'wisdom',
  },
  {
    id: 8,
    text: 'The one who sees inaction in action, and action in inaction, is intelligent among men.',
    source: 'Bhagavad Gita',
    chapter: '4',
    verse: '18',
    category: 'wisdom',
  },
  {
    id: 9,
    text: 'Fear not. Whatever you fear will not happen; what is meant to be will not stop. This is the eternal law.',
    source: 'Krishna\'s wisdom',
    category: 'krishna',
  },
  {
    id: 10,
    text: 'Set your heart upon your work but never its reward. Work done for selfish reasons is far inferior to work done with a steady and serene mind.',
    source: 'Bhagavad Gita',
    chapter: '2',
    verse: '49',
    category: 'gita',
  },
  {
    id: 11,
    text: 'In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has become accomplished in the practice of devotional service enjoys this knowledge within himself in due course of time.',
    source: 'Bhagavad Gita',
    chapter: '4',
    verse: '38',
    category: 'gita',
  },
  {
    id: 12,
    text: 'He who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.',
    source: 'Bhagavad Gita',
    chapter: '2',
    verse: '56',
    category: 'wisdom',
  },
]

export function getDailyQuote(): Quote {
  const today = new Date()
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000
  )
  return quotes[dayOfYear % quotes.length]
}
