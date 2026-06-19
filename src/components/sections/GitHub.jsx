import { GitHubCalendar } from 'react-github-calendar'
import SectionLabel from '../ui/SectionLabel'

export default function GitHub() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>OPEN SOURCE</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">GitHub Activity</h2>
        </div>

        <div className="bg-slate rounded-2xl border border-border p-6 md:p-8 overflow-x-auto flex justify-center">
          <GitHubCalendar username="tilakDevX" />
        </div>
      </div>
    </section>
  )
}
