import SectionLabel from '../ui/SectionLabel'
import CaseStudyCard from '../ui/CaseStudyCard'
import { caseStudies } from '../../data/caseStudies'

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>DEEP DIVES</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Architecture Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
