'use client'

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import About from './components/ui/About';
import Contact from './components/ui/Contact';
import Hero from './components/ui/Hero';
import Portfolio from './components/ui/Portfolio';
import Services from './components/ui/Services';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;