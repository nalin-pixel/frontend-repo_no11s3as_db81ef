import { AnimatePresence, motion } from 'framer-motion'
import { useLocation, Outlet } from 'react-router-dom'

export default function PageTransition({ children }) {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {children || <Outlet />}
      </motion.div>
    </AnimatePresence>
  )
}
