import { motion } from 'framer-motion'
import { ExternalLink, AlertCircle } from 'lucide-react'

const badgeColors = {
  cyan: 'bg-cyan/10 text-cyan border-cyan/20',
  violet: 'bg-violet/10 text-violet border-violet/20',
  amber: 'bg-amber/10 text-amber border-amber/20',
}

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-slate rounded-2xl border border-border p-6 md:p-8 hover:border-cyan/30 transition-colors duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <span className={`text-xs font-mono px-3 py-1 rounded-full border ${badgeColors[project.badgeColor] || badgeColors.cyan}`}>
          {project.badge}
        </span>
      </div>

      <h3 className="font-display text-xl font-bold text-text-primary mb-1">
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="font-body text-sm text-text-secondary mb-4">{project.subtitle}</p>
      )}

      <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
        {project.description}
      </p>

      <ul className="space-y-2 mb-5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
            <span className="text-cyan mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs text-text-secondary bg-navy/50 px-2.5 py-1 rounded-full border border-border">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-border">
        {project.caseStudyUrl && (
          <a
            href={project.caseStudyUrl}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan hover:text-cyan/80 transition-colors"
          >
            <ExternalLink size={14} />
            Case Study
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" /></svg>
            Source
          </a>
        )}
      </div>

      {project.note && (
        <div className="flex items-start gap-2 mt-4 text-xs text-text-secondary/60">
          <AlertCircle size={12} className="mt-0.5 shrink-0" />
          {project.note}
        </div>
      )}
    </motion.div>
  )
}
