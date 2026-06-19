import { Download, ArrowDown } from 'lucide-react'
import Terminal from '../ui/Terminal'
import Button from '../ui/Button'
import portfolio from '../../config/portfolio'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:pb-0">
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] text-emerald uppercase mb-4">
              {portfolio.heroEyebrow}
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-[1.1] mb-4">
              Full-Stack Developer<br />
              <span className="text-cyan">& AI-Integrated Engineer</span>
            </h1>

            <p className="font-body text-base md:text-lg text-text-secondary max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {portfolio.tagline}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
              <Button href="#projects">
                <ArrowDown size={16} />
                View My Work
              </Button>
              <Button href={portfolio.resumeUrl} variant="outline" download>
                <Download size={16} />
                Download Resume
              </Button>
              <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cyan transition-colors p-2" aria-label="GitHub">
                <GithubIcon />
              </a>
              <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-cyan transition-colors p-2" aria-label="LinkedIn">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
            <Terminal lines={portfolio.terminalLines} />
          </div>
        </div>
      </div>
    </section>
  )
}
