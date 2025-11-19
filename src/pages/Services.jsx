import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { Layout, Figma, Server, Rocket, Boxes, Gauge } from 'lucide-react'

const services = [
  { icon: Layout, title: 'Product Design', desc: 'From discovery to high-fidelity. Design systems, tokens and component libraries.' },
  { icon: Figma, title: 'Design Systems', desc: 'Accessible, scalable and multi-brand. Shipped with documentation and tokens.' },
  { icon: Boxes, title: 'Frontend Engineering', desc: 'React/Next.js with shadcn, motion and 3D. Type-safe and accessible.' },
  { icon: Server, title: 'Backend & APIs', desc: 'FastAPI, serverless and cloud-native architectures with great DX.' },
  { icon: Gauge, title: 'Performance', desc: 'Core Web Vitals, image/CDN strategy and profiling—speed as a feature.' },
  { icon: Rocket, title: 'Launch & Growth', desc: 'Analytics, experiments, SEO and continuous improvement.' },
]

export default function Services() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Navbar />
      <section className="pt-28 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Cross-functional teams that blend product design, engineering and motion to deliver business outcomes.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
            >
              <div className="h-11 w-11 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-sky-300">
                <s.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
