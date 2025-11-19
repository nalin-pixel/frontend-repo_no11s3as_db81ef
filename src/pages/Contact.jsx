import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <Navbar />
      <section className="pt-28 pb-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-3 text-slate-300">Tell us about your product and the outcome you want. We’ll reply within one business day.</p>

        <form className="mt-8 space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Your name" />
          <input type="email" className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="Email" />
          <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50" placeholder="What are you building?" />
          <button className="px-5 py-3 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-200 transition-colors">Send</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}
