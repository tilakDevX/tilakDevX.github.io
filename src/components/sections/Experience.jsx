import SectionLabel from '../ui/SectionLabel'
import TimelineEntry from '../ui/TimelineEntry'
import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>CAREER</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Where I've Worked</h2>
        </div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineEntry key={exp.id} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
