import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
            <span className="text-white font-semibold tracking-tight">Southern Studio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-slate-200 hover:bg-white/10"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm ${
                  isActive(item.to)
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
