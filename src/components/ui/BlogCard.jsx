import { motion } from 'framer-motion'
import { ExternalLink, Clock } from 'lucide-react'

export default function BlogCard({ article, index }) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="block bg-slate rounded-2xl border border-border p-6 hover:border-cyan/30 hover:-translate-y-0.5 transition-all duration-300 group"
    >
      <div className="flex items-center gap-2 mb-3">
        {article.status === 'draft' && (
          <span className="font-mono text-[11px] text-amber bg-amber/10 px-2 py-0.5 rounded-full">Draft</span>
        )}
      </div>
      <h3 className="font-display text-base font-bold text-text-primary mb-2 group-hover:text-cyan transition-colors">
        {article.title}
      </h3>
      <p className="font-body text-sm text-text-secondary leading-relaxed mb-4">
        {article.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span key={tag} className="font-mono text-[11px] text-text-secondary/60 bg-navy/30 px-2 py-0.5 rounded-full border border-border/50">
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 text-xs text-text-secondary/60 shrink-0 ml-3">
          <Clock size={12} />
          {article.readTime}
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan group-hover:gap-2 transition-all">
          Read on Hashnode <ExternalLink size={14} />
        </span>
      </div>
    </motion.a>
  )
}
