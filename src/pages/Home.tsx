import { HeroSection } from '@/components/home/HeroSection'
import { QuickLinks } from '@/components/home/QuickLinks'
import { ActivityFeed } from '@/components/home/ActivityFeed'
import { DailyQuote } from '@/components/home/DailyQuote'
import { StatsSection } from '@/components/home/StatsSection'
import { PersonalitiesSection } from '@/components/home/PersonalitiesSection'
import { BusinessSection } from '@/components/home/BusinessSection'
import { GalleryPreview } from '@/components/home/GalleryPreview'
import { CTASection } from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <ActivityFeed />
      <DailyQuote />
      <StatsSection />
      <PersonalitiesSection />
      <BusinessSection />
      <GalleryPreview />
      <CTASection />
    </>
  )
}
