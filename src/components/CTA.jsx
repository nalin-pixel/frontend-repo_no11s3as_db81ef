import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_80%_10%,rgba(56,189,248,0.08),transparent),radial-gradient(700px_circle_at_20%_20%,rgba(59,130,246,0.08),transparent)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 sm:p-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Have an ambitious project?</h2>
            <p className="mt-3 text-slate-300">Tell us about the outcomes you want. We’ll craft the product, team and timeline to get you there.</p>
          </div>
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 grid md:grid-cols-3 gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Your name" />
            <input type="email" className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Email" />
            <button className="px-4 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">Request a proposal</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
