import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import DemoSection from '@/components/Sections/DemoSection'
import HeroSection from '@/components/Sections/HeroSection'
import ServicesSection from '@/components/Sections/ServicesSection'
import TestimonialsSection from '@/components/Sections/TestimonialsSection'

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

      {/* Custom CSS for animations */}
      {/* <style jsx="true">{`
        [data-aos] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        [data-aos="fade-right"] {
          transform: translateX(-20px);
        }
        
        [data-aos="fade-left"] {
          transform: translateX(20px);
        }
        
        .aos-animate {
          opacity: 1;
          transform: translate(0, 0);
        }
      `}</style> */}
    </div>
  )
}
