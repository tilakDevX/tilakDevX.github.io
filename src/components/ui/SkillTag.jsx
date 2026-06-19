import { motion } from 'framer-motion'

export default function SkillTag({ name, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="font-mono text-sm text-text-secondary bg-slate/50 px-3 py-1.5 rounded-full border border-border hover:border-cyan/40 hover:text-text-primary transition-all duration-200 cursor-default"
    >
      {name}
    </motion.span>
  )
}
