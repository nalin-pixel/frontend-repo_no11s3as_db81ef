import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Showcase from '../components/Showcase'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </div>
  )
}
