import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import DemoSection from './components/Sections/DemoSection'
import HeroSection from './components/Sections/HeroSection'
import ServicesSection from './components/Sections/ServicesSection'
import TestimonialsSection from './components/Sections/TestimonialsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <DemoSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}