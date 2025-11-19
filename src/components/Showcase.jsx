import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Astra Finance',
    desc: 'High-frequency trading dashboard with real-time WebSocket data and 3D visuals.',
    tags: ['Next.js', 'WebGL', 'Framer Motion'],
    color: 'from-cyan-500/20 to-blue-500/20'
  },
  {
    title: 'Orbital Health',
    desc: 'HIPAA-ready telemedicine suite with AI triage and delightful motion.',
    tags: ['FastAPI', 'Postgres', 'Shadcn'],
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    title: 'Voyagr',
    desc: 'Travel discovery that feels like a video game — immersive, fast, unforgettable.',
    tags: ['Remix', 'Three.js', 'Edge'],
    color: 'from-violet-500/20 to-fuchsia-500/20'
  },
]

export default function Showcase() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Selected work</h2>
            <p className="mt-3 text-slate-300 max-w-xl">A peek at complex, high-polish builds that balance aesthetics with measurable outcomes.</p>
          </div>
          <a href="/work" className="hidden md:inline-flex px-4 py-2 rounded-lg border border-white/10 text-white hover:bg-white/10">Explore all</a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="/work"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group rounded-2xl border border-white/10 bg-gradient-to-b ${p.color} p-6 hover:border-white/20 transition-colors`}
            >
              <div className="aspect-video rounded-xl bg-black/40 border border-white/10 mb-4" />
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium">{p.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
                </div>
                <span className="text-white/60 text-xs">Case study →</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs text-slate-200 bg-white/10 border border-white/10 px-2 py-1 rounded-md">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
