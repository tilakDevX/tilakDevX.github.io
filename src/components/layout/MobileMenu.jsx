import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          <nav className="flex flex-col items-center gap-8">
            {links.map(({ label, href }, i) => (
              <motion.a
                key={href}
                href={href}
                onClick={onClose}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="font-display text-2xl text-text-secondary hover:text-cyan transition-colors"
              >
                {label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
