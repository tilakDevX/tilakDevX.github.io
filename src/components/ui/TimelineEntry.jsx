import { motion } from 'framer-motion'

export default function TimelineEntry({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 md:pl-10 pb-10 last:pb-0"
    >
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-cyan ring-4 ring-navy z-10" />
      <div className="absolute left-[5px] top-4 bottom-0 w-px bg-border hidden md:block" />

      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
        <div>
          <h3 className="font-display text-lg font-bold text-text-primary">{experience.role}</h3>
          <p className="font-body text-sm text-cyan">{experience.company}</p>
          {experience.project && (
            <p className="font-body text-sm text-text-secondary mt-0.5">{experience.project}</p>
          )}
        </div>
        <div className="text-right mt-1 md:mt-0">
          <p className="font-mono text-xs text-text-secondary">{experience.period}</p>
          <p className="font-mono text-xs text-text-secondary/60">{experience.location}</p>
        </div>
      </div>

      <ul className="space-y-2 mt-3">
        {experience.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
            <span className="text-cyan mt-2 shrink-0 w-1 h-1 rounded-full bg-cyan/60" />
            {h}
          </li>
        ))}
      </ul>

      {experience.awards && experience.awards.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.awards.map((award) => (
            <span key={award} className="font-mono text-[11px] text-amber bg-amber/10 px-2 py-0.5 rounded-full border border-amber/20 inline-flex items-center gap-1">
              {'\uD83C\uDFC6'} {award}
            </span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-3">
        {experience.tags.map((tag) => (
          <span key={tag} className="font-mono text-[11px] text-text-secondary/60 bg-navy/30 px-2 py-0.5 rounded-full border border-border/50">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
