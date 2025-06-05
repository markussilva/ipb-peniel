import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Ministries from './components/Ministries'
import Events from './components/Events'
import Location from './components/Location'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutSection />
      <Ministries />
      <Events />
      <Location />
      <Footer />
    </main>
  )
}
