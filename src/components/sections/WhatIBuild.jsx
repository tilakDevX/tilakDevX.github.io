import { Server, Brain, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import StaggerContainer from '../animations/StaggerContainer'
import { capabilities } from '../../data/whatIBuild'

const icons = { Server, Brain, Cloud }

export default function WhatIBuild() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <SectionLabel>CAPABILITIES</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">What I Specialise In</h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = icons[cap.icon]
            return (
              <motion.div
                key={cap.title}
                className="bg-slate rounded-2xl border border-border p-6 md:p-8 hover:border-cyan/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center mb-5">
                  {Icon && <Icon size={20} className="text-cyan" />}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-3">{cap.title}</h3>
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-5">{cap.body}</p>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs text-text-secondary/60 bg-navy/30 px-2.5 py-1 rounded-full border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
