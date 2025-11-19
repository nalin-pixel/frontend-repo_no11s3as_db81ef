export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-blue-500 to-cyan-400" />
            <span className="text-white/80 text-sm">© {new Date().getFullYear()} Southern Studio</span>
          </div>
          <div className="text-slate-400 text-sm">
            Crafted in the Southern hemisphere • Minimal and fast
          </div>
        </div>
      </div>
    </footer>
  )
}
