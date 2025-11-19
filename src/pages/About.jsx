import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Navbar />
      <section className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">About</h1>
        <p className="mt-4 text-slate-300 max-w-3xl">We’re an independent studio crafting interfaces that feel inevitable. We combine rigorous product thinking with a love for typography, motion and performance.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-medium text-white">Principles</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>Clarity over cleverness</li>
              <li>Latency is the enemy</li>
              <li>Design is how it works</li>
              <li>Motion with meaning</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
            <h3 className="text-lg font-medium text-white">Stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300 list-disc list-inside">
              <li>React/Next.js + Type Safety</li>
              <li>FastAPI / Python for robust backends</li>
              <li>Framer Motion & 3D for micro-interactions</li>
              <li>Cloud-native infra for scale & security</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
