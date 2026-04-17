import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyHapaii from './components/WhyHapaii'
import Process from './components/Process'
import ForWho from './components/ForWho'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar onContact={() => setShowModal(true)} />
      <Hero onContact={() => setShowModal(true)} />
      <Services />
      <WhyHapaii />
      <Process />
      <ForWho onContact={() => setShowModal(true)} />
      <Testimonials />
      <CtaBanner onContact={() => setShowModal(true)} />
      <Footer onContact={() => setShowModal(true)} />
      <ContactModal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}
