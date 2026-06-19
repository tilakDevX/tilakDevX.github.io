import { useEffect, useState } from 'react'

const promptSymbol = '\u276F'

export default function Terminal({ lines }) {
  const [visibleLines, setVisibleLines] = useState(0)
  const [chars, setChars] = useState(lines.map(() => 0))

  useEffect(() => {
    let cancel = false

    const typeLine = async (lineIndex) => {
      const line = lines[lineIndex]
      for (let c = 1; c <= line.length; c++) {
        if (cancel) return
        await new Promise((r) => setTimeout(r, 15 + Math.random() * 10))
        setChars((prev) => {
          const next = [...prev]
          next[lineIndex] = c
          return next
        })
      }
      setVisibleLines((prev) => {
        const next = lineIndex + 1
        if (next < lines.length) {
          setTimeout(() => typeLine(next), 300)
        }
        return next
      })
    }

    typeLine(0)

    return () => { cancel = true }
  }, [lines])

  return (
    <div className="w-full max-w-md bg-slate/80 rounded-2xl border border-border p-5 font-mono text-xs md:text-sm shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-amber-500/80" />
        <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-text-secondary text-xs">terminal — portfolio</span>
      </div>

      <div className="space-y-1.5">
        {lines.map((line, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-emerald shrink-0">{promptSymbol}</span>
            <span className="text-text-primary">
              {line.substring(0, Math.min(chars[i] || 0, line.length))}
              {i === visibleLines - 1 && i < lines.length - 1 && (
                <span className="inline-block w-2 h-4 bg-cyan ml-0.5 animate-pulse" />
              )}
            </span>
          </div>
        ))}
        {visibleLines >= lines.length && (
          <div className="flex items-center gap-2 pt-1">
            <span className="text-emerald">{promptSymbol}</span>
            <span className="inline-block w-2 h-4 bg-cyan animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
