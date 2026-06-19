import { motion } from 'framer-motion'
import SectionLabel from '../ui/SectionLabel'
import SkillTag from '../ui/SkillTag'
import { skills as skillsData } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>STACK</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Technologies I Work With</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillsData.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-mono text-xs font-semibold tracking-wider text-text-secondary/60 uppercase mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((skill, i) => (
                  <SkillTag key={skill} name={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
