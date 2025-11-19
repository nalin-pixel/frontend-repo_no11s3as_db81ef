import { motion } from 'framer-motion'
import { Sparkles, Code2, Rocket, Zap } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Design Systems',
    desc: 'Cohesive multi-brand libraries, tokens and accessible components.'
  },
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    desc: 'From Next.js and FastAPI to scalable cloud-native architectures.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Lighthouse 95+, optimized assets, and fluid 60fps motion.'
  },
  {
    icon: Rocket,
    title: 'Launch & Iterate',
    desc: 'Analytics, experiments and continuous improvement baked in.'
  },
]

export default function Features() {
  return (
    <section className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_circle_at_80%_20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">What we do</h2>
          <p className="mt-3 text-slate-300">End-to-end product teams shipping world-class web experiences with ruthless focus on clarity and craft.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
            >
              <div className="h-11 w-11 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-sky-300">
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
