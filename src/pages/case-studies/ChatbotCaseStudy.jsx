import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionLabel from '../../components/ui/SectionLabel'
import Footer from '../../components/layout/Footer'

export default function ChatbotCaseStudy() {
  return (
    <div className="min-h-screen bg-navy">
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-cyan transition-colors mb-8">
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        <SectionLabel>Case Study 01</SectionLabel>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2 mb-8">
          Building a Deterministic LLM Chatbot with Text-to-SQL + RAG
        </h1>

        <div className="flex flex-wrap gap-2 mb-12">
          {["LLM", "Text-to-SQL", "RAG", "RBAC", "PostgreSQL", "Django"].map((tag) => (
            <span key={tag} className="font-mono text-xs text-text-secondary/60 bg-navy/30 px-2.5 py-1 rounded-full border border-border/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-8 text-text-secondary font-body leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Overview</h2>
            <p>
              The Compliance Management Tool needed a way for enterprise users to query their compliance data
              without writing SQL or navigating complex dashboards. The solution: a dual-source AI chatbot
              that routes queries to either a Text-to-SQL engine (for structured data queries) or a RAG pipeline
              (for knowledge base questions about compliance procedures).
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">The Challenge</h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Enterprise compliance data is highly sensitive — every query must respect RBAC boundaries</li>
              <li>SQL generation must be deterministic and safe — no DELETE, DROP, or UPDATE statements</li>
              <li>Schema is complex (60+ tables) — dynamic schema injection needed per tenant</li>
              <li>Users ask both data questions ("How many audits in Q3?") and knowledge questions ("What is the approval process?")</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Architecture</h2>
            <div className="bg-slate rounded-2xl border border-border p-6 font-mono text-sm leading-relaxed">
              <p>[User Message]</p>
              <p className="text-cyan">      ↓</p>
              <p>[Intent Classifier] — routes to SQL path or RAG path</p>
              <p className="text-cyan">      ↓                           ↓</p>
              <p>[Text-to-SQL Engine]          [RAG Pipeline]</p>
              <p>  · Schema injection            · Vector search</p>
              <p>  · RBAC filter injection       · Knowledge base</p>
              <p>  · SQL safety guardrails       · Context retrieval</p>
              <p className="text-cyan">      ↓                           ↓</p>
              <p>[PostgreSQL Query]           [LLM Response]</p>
              <p className="text-cyan">      ↓                           ↓</p>
              <p className="text-emerald">        [Transparency Engine — unified response]</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">Key Engineering Decisions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">Why Text-to-SQL over pure RAG?</h3>
                <p>RAG is excellent for unstructured knowledge but unreliable for precise numerical queries.
                  Text-to-SQL guarantees exact answers for structured data ("total audits in 2024: 1,247").
                  By combining both, we get the best of both worlds — precise data queries + flexible knowledge retrieval.</p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">Multi-layer intent classification</h3>
                <p>A lightweight classifier first determines query type (data vs knowledge). Data queries go through
                  a second layer that identifies which tables/columns are relevant, enabling dynamic schema injection
                  without exposing the full 60-table schema to the LLM.</p>
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-text-primary mb-2">SQL safety guardrails</h3>
                <p>Before execution, every generated SQL is parsed and checked against a deny list of operations (DROP, DELETE, UPDATE, ALTER).
                  A regex-based validator also ensures only SELECT queries pass through. This runs server-side and cannot be bypassed.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-text-primary mb-3">What I Learned</h2>
            <p>
              Building deterministic LLM features for enterprise requires a fundamentally different approach from
              consumer AI. Every output must be auditable, explainable, and bounded by business rules. The
              "transparency engine" — showing users exactly how each answer was derived — turned out to be
              as important as the AI capability itself. Users trust the system more when they can see the SQL
              that produced their answer or the source documents used in a RAG response.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}
