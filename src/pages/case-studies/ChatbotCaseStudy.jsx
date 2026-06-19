import CaseStudyLayout from '../../components/ui/CaseStudyLayout'
import { caseStudies } from '../../data/caseStudies'

const study = caseStudies.find((s) => s.slug === 'chatbot')

export default function ChatbotCaseStudy() {
  return <CaseStudyLayout study={study} />
}
