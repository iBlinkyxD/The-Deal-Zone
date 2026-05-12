import type { TimelineItem } from '../types'

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <div key={item.phase} className="flex gap-3.5 pb-5.5 last:pb-0 relative">
          <div className="relative w-2.5 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-accent relative z-10 mt-1.25" />
            {i < items.length - 1 && (
              <div className="absolute left-[4.5px] top-3.75 -bottom-5.5 w-px bg-border" />
            )}
          </div>
          <div>
            <div className="text-[0.5625rem] tracking-[0.09em] uppercase font-bold text-accent mb-0.5">
              {item.phase}
            </div>
            <div className="text-sm text-fg-sub leading-normal">{item.desc}</div>
            <div className="font-mono text-[0.625rem] text-muted mt-0.5 tracking-[0.03em]">
              {item.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
