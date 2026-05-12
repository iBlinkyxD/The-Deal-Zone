import type { Stat } from '../types'

export function StatsStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="max-w-300 mx-auto my-5 px-5" aria-label="Key investment metrics">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border rounded-md overflow-hidden">
        {stats.map(s => (
          <div key={s.l} className="bg-surface px-3.5 py-4 text-center">
            <div className={`font-mono text-[1.2rem] font-bold tabular-nums tracking-[-0.01em] ${s.hi ? 'text-accent' : 'text-fg'}`}>
              {s.v}
            </div>
            <div className="text-[0.5625rem] tracking-[0.08em] uppercase text-muted mt-1">
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
