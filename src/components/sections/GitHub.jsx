import { useEffect, useState } from 'react'
import { Star, GitFork, ExternalLink, Code } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import SectionLabel from '../ui/SectionLabel'
import portfolio from '../../config/portfolio'

const calendarTheme = {
  light: ['#0A0F1E', '#1E2A3A', '#005E73', '#0099B3', '#00D4FF'],
  dark: ['#0A0F1E', '#1E2A3A', '#005E73', '#0099B3', '#00D4FF'],
}

export default function GitHub() {
  const [profile, setProfile] = useState(null)
  const [repos, setRepos] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${portfolio.githubUsername}`),
          fetch(`https://api.github.com/users/${portfolio.githubUsername}/repos?sort=stars&per_page=6&type=public`),
        ])

        if (!profileRes.ok || !reposRes.ok) throw new Error('API error')

        const profileData = await profileRes.json()
        const reposData = await reposRes.json()

        if (!cancelled) {
          setProfile(profileData)
          setRepos(reposData.filter((r) => !r.fork).slice(0, 6))
        }
      } catch {
        if (!cancelled) setError(true)
      }
    }

    fetchData()
    return () => { cancelled = true }
  }, [])

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-14">
          <SectionLabel>OPEN SOURCE</SectionLabel>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mt-2">GitHub Activity</h2>
        </div>

        <div className="space-y-8">
           {/* Contribution Calendar */}
          <div className="bg-slate rounded-2xl border border-border p-6 md:p-8 overflow-x-auto">
            <div className="min-w-[700px] flex justify-center">
              <GitHubCalendar username={portfolio.githubUsername} theme={calendarTheme} color="#00D4FF" />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="bg-slate rounded-2xl border border-border p-4 hover:border-cyan/30 transition-colors flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${portfolio.githubUsername}&count_private=true&show_icons=true&theme=dark&bg_color=0A0F1E&border_color=1E2A3A&text_color=94A3B8&title_color=00D4FF&icon_color=00D4FF`}
                alt="GitHub Stats"
                className="w-full max-w-xs"
                loading="lazy"
              />
            </a> */}
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="bg-slate rounded-2xl border border-border p-4 hover:border-cyan/30 transition-colors flex items-center justify-center">
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${portfolio.githubUsername}&theme=dark&background=0A0F1E&stroke=1E2A3A&ring=00D4FF&fire=00D4FF&currStreakLabel=00D4FF&sideLabels=94A3B8&dates=94A3B8`}
                alt="GitHub Streak"
                className="w-full max-w-xs"
                loading="lazy"
              />
            </a>
            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="bg-slate rounded-2xl border border-border p-4 hover:border-cyan/30 transition-colors flex items-center justify-center">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${portfolio.githubUsername}&layout=compact&theme=dark&bg_color=0A0F1E&border_color=1E2A3A&text_color=94A3B8&title_color=00D4FF`}
                alt="Top Languages"
                className="w-full max-w-xs"
                loading="lazy"
              />
            </a>
          </div>

          {/* Top Repos */}
          {/* {repos.length > 0 && !error && (
            <div>
              <h3 className="font-display text-lg font-bold text-text-primary mb-5">Top Repositories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate rounded-xl border border-border p-5 hover:border-cyan/30 transition-colors group"
                  >
                    <h4 className="font-display text-sm font-bold text-text-primary group-hover:text-cyan transition-colors truncate mb-2">
                      {repo.name}
                    </h4>
                    {repo.description && (
                      <p className="font-body text-xs text-text-secondary/80 leading-relaxed mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-text-secondary/60">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1">
                          <Code size={12} />
                          {repo.language}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Star size={12} />
                        {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork size={12} />
                        {repo.forks_count}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )} */}

          {error && (
            <div className="text-center text-text-secondary font-body">
              <p>Unable to load GitHub data right now.</p>
              <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline mt-2 inline-block">
                View on GitHub &rarr;
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="font-display text-lg font-bold text-text-primary">{value ?? '—'}</p>
      <p className="font-mono text-xs text-text-secondary/60">{label}</p>
    </div>
  )
}
