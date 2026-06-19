import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { education, courses } from '../../data/education'

export default function Education() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>EDUCATION</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Academic Background</h2>
        </div>

        <div className="space-y-8">
          {education.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate rounded-2xl border border-border p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg font-bold text-text-primary">{item.degree}</h3>
                  <p className="font-body text-sm text-cyan mt-0.5">{item.school}</p>
                </div>
                <div className="text-right mt-1 md:mt-0">
                  <p className="font-mono text-xs text-text-secondary">{item.period}</p>
                  <p className="font-mono text-xs text-text-secondary/60">{item.location}</p>
                </div>
              </div>

              <ul className="space-y-2">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                    <span className="text-cyan mt-2 shrink-0 w-1 h-1 rounded-full bg-cyan/60" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {courses.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate rounded-2xl border border-border p-6 md:p-8"
            >
              <h3 className="font-display text-base font-bold text-text-primary mb-4">Certifications & Courses</h3>
              <div className="space-y-3">
                {courses.map((course, i) => (
                  <div key={i} className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <p className="font-body text-sm text-text-primary">{course.title}</p>
                      <p className="font-mono text-xs text-text-secondary/60">{course.platform}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-emerald bg-emerald/10 px-2 py-0.5 rounded-full">
                        {course.status}
                      </span>
                      {course.certificate && (
                        <button
                          onClick={() => setLightbox(course.certificate)}
                          className="font-mono text-xs text-cyan hover:text-cyan/80 transition-colors inline-flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          Certificate
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

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
