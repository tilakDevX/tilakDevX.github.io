import CaseStudyLayout from '../../components/ui/CaseStudyLayout'
import { caseStudies } from '../../data/caseStudies'

const study = caseStudies.find((s) => s.slug === 'wikitrac')

export default function WikitracCaseStudy() {
  return <CaseStudyLayout study={study} />
}
