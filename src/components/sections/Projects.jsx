import SectionLabel from '../ui/SectionLabel'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>WORK</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">Things I've Built</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
