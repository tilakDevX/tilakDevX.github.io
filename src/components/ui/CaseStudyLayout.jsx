import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionLabel from './SectionLabel'
import Footer from '../layout/Footer'

export default function CaseStudyLayout({ study }) {
  return (
    <div className="min-h-screen bg-navy">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-cyan transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <SectionLabel>Case Study {study.number}</SectionLabel>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-8">
          {study.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {study.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-text-secondary/60 bg-navy/30 px-2.5 py-1 rounded-full border border-border/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-8 text-text-secondary font-body leading-relaxed">
          {study.sections.map((section, i) => (
            <SectionRenderer key={i} section={section} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

function SectionRenderer({ section }) {
  switch (section.type) {
    case "paragraph":
      return (
        <section>
          <h2 className="font-display text-xl font-bold text-text-primary mb-3">{section.title}</h2>
          <p>{section.body}</p>
        </section>
      )

    case "list":
      return (
        <section>
          <h2 className="font-display text-xl font-bold text-text-primary mb-3">{section.title}</h2>
          <ul className="space-y-2 list-disc pl-5">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )

    case "architecture":
      return (
        <section>
          <h2 className="font-display text-xl font-bold text-text-primary mb-3">{section.title}</h2>
          <div className="bg-slate rounded-2xl border border-border p-6 font-mono text-sm leading-relaxed">
            {section.diagram.map((line, i) => (
              <p key={i} className={line.className || ""}>{line.text}</p>
            ))}
          </div>
        </section>
      )

    case "decisions":
      return (
        <section>
          <h2 className="font-display text-xl font-bold text-text-primary mb-3">{section.title}</h2>
          <div className="space-y-6">
            {section.decisions.map((d, i) => (
              <div key={i}>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">{d.heading}</h3>
                <p>{d.body}</p>
              </div>
            ))}
          </div>
        </section>
      )

    default:
      return null
  }
}
