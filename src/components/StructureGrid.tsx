import type { StructureCell } from '../types'

export function StructureGrid({ cells }: { cells: StructureCell[] }) {
  return (
    <div className="grid grid-cols-2 gap-2.5">
      {cells.map(c => (
        <div key={c.l} className="bg-surface2 border border-border rounded-sm px-3.5 py-3">
          <div className="text-[0.5rem] tracking-[0.09em] uppercase text-muted mb-1">{c.l}</div>
          <div className={`font-mono text-sm font-bold tabular-nums ${c.hi ? 'text-accent' : 'text-fg'}`}>
            {c.v}
          </div>
        </div>
      ))}
    </div>
  )
}
