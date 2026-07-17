import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import About from '@/pages/About'
import History from '@/pages/History'
import Timeline from '@/pages/Timeline'
import Leaders from '@/pages/Leaders'
import Personalities from '@/pages/Personalities'
import Achievements from '@/pages/Achievements'
import BusinessDirectory from '@/pages/BusinessDirectory'
import StudentCorner from '@/pages/StudentCorner'
import Jobs from '@/pages/Jobs'
import News from '@/pages/News'
import Events from '@/pages/Events'
import Gallery from '@/pages/Gallery'
import TempleDirectory from '@/pages/TempleDirectory'
import BhagavadGita from '@/pages/BhagavadGita'
import KrishnaTeachings from '@/pages/KrishnaTeachings'
import Articles from '@/pages/Articles'
import Contact from '@/pages/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/personalities" element={<Personalities />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/business-directory" element={<BusinessDirectory />} />
            <Route path="/student-corner" element={<StudentCorner />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/temples" element={<TempleDirectory />} />
            <Route path="/bhagavad-gita" element={<BhagavadGita />} />
            <Route path="/krishna-teachings" element={<KrishnaTeachings />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
