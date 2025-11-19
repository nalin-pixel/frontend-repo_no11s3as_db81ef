import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const work = Array.from({ length: 9 }).map((_, i) => ({
  title: `Project ${i + 1}`,
  desc: 'A modern web experience with emphasis on speed, clarity and motion.',
}))

export default function Work() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Navbar />
      <section className="pt-28 pb-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Work</h1>
        <p className="mt-3 text-slate-300 max-w-2xl">Case studies across fintech, health, ecommerce and devtools. Made with care and measurable outcomes.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {work.map((w, i) => (
            <motion.a
              href="#"
              key={w.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-4 hover:border-white/20"
            >
              <div className="aspect-video rounded-xl bg-black/40 border border-white/10 mb-3" />
              <h3 className="text-white font-medium">{w.title}</h3>
              <p className="text-sm text-slate-300">{w.desc}</p>
            </motion.a>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
