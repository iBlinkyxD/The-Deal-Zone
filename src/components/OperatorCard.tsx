import type { Operator } from '../types'

export function OperatorCard({ operator }: { operator: Operator }) {
  return (
    <div className="flex items-center gap-3.5 px-4 py-3.5 bg-surface2 border border-border rounded-md">
      <div
        className="w-11 h-11 rounded-full shrink-0 flex items-center justify-center font-serif text-[1.05rem]"
        style={{
          background: 'linear-gradient(135deg, oklch(40% 0.13 35), oklch(62% 0.16 40))',
          color: 'oklch(13% 0.018 50)',
        }}
        aria-hidden="true"
      >
        {operator.init}
      </div>
      <div>
        <div className="text-sm font-semibold text-fg mb-0.5">{operator.name}</div>
        <div className="text-[0.6875rem] text-muted leading-[1.4]">{operator.role}</div>
      </div>
    </div>
  )
}
