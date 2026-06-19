import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <Link
        to={`/case-study/${study.slug}`}
        className="block bg-slate rounded-2xl border border-border p-6 md:p-8 hover:border-cyan/30 hover:-translate-y-1 transition-all duration-300 group h-full"
      >
        <span className="font-mono text-xs text-cyan/60 mb-3 block">Case Study {study.number}</span>
        <h3 className="font-display text-lg font-bold text-text-primary mb-3 group-hover:text-cyan transition-colors">
          {study.title}
        </h3>
        <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">
          {study.teaser}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-text-secondary/60 bg-navy/30 px-2.5 py-1 rounded-full border border-border/50">
              {tag}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan group-hover:gap-2.5 transition-all">
          Read Case Study <ArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  )
}
