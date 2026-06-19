import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Award } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { awards } from '../../data/awards'

export default function AwardsSection() {
  const [lightbox, setLightbox] = useState(null)

  if (awards.length === 0) return null

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>RECOGNITION</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Awards & Recognition</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate rounded-2xl border border-border p-6 md:p-8"
            >
              <div className="w-10 h-10 rounded-lg bg-amber/10 flex items-center justify-center mb-4">
                <Award size={20} className="text-amber" />
              </div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-1">{item.title}</h3>
              <p className="font-body text-sm text-amber mb-3">{item.organization}</p>
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-text-secondary/60">{item.date}</span>
                {item.certificate && (
                  <button
                    onClick={() => setLightbox(item.certificate)}
                    className="font-mono text-xs text-cyan hover:text-cyan/80 transition-colors"
                  >
                    View Certificate &rarr;
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-navy/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-5 right-5 text-text-secondary hover:text-text-primary transition-colors"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <img
            src={lightbox}
            alt="Certificate"
            className="max-w-full max-h-[85vh] rounded-2xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
