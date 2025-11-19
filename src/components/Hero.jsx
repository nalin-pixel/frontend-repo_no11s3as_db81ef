import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/40 to-slate-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Southern hemisphere • Top-tier studio
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Futuristic web design & development
          </h1>
          <p className="mt-4 text-slate-300 text-lg">
            We craft minimalist, high-performance digital experiences with cinematic motion and delightful micro-interactions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-200 transition-colors">
              Start a project
            </a>
            <a href="/work" className="inline-flex justify-center items-center rounded-lg border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition-colors">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
