import type { Deal, StatusVariant } from '../types'
import { CountdownTimer } from './CountdownTimer'
import { ProgressBar } from './ProgressBar'
import { CardSvgArt } from './CardSvgArt'

const badgeCls: Record<StatusVariant, string> = {
  hot: 'text-danger border-[oklch(65%_0.18_28/0.35)]',
  warn: 'text-warn border-[oklch(70%_0.17_65/0.35)]',
  ok: 'text-ok border-[oklch(64%_0.15_145/0.35)]',
}

interface Props {
  deal: Deal
  onClick: () => void
}

export function DealCard({ deal, onClick }: Props) {
  const filledPct = Math.round(((deal.spotsTotal - deal.spotsLeft) / deal.spotsTotal) * 100)

  return (
    <article
      className="bg-surface border border-border rounded-lg overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-y-1.25 hover:shadow-[0_12px_40px_oklch(5%_0.02_50/0.5)] hover:border-border2 active:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 flex flex-col"
      tabIndex={0}
      role="button"
      aria-label={`${deal.name} — ${deal.type}, ${deal.location}`}
      onClick={onClick}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
    >
      {/* Image */}
      <div className="relative h-49 overflow-hidden shrink-0" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: deal.gradient }} />
        <CardSvgArt id={deal.id} />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, oklch(13% 0.018 50 / 0.82) 0%, transparent 55%)' }}
        />
        <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
          <span className="text-[0.5625rem] font-bold tracking-[0.09em] uppercase px-2.25 py-1 rounded-sm bg-[oklch(10%_0.02_50/0.75)] backdrop-blur-sm border text-accent border-[oklch(64%_0.16_35/0.35)]">
            {deal.type.split('·')[0].trim()}
          </span>
          <span className={`text-[0.5625rem] font-bold tracking-[0.09em] uppercase px-2.25 py-1 rounded-sm bg-[oklch(10%_0.02_50/0.75)] backdrop-blur-sm border ${badgeCls[deal.statusBadge.variant]}`}>
            {deal.statusBadge.text}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-4.5 pb-4 flex-1 flex flex-col">
        <p className="font-mono text-[0.625rem] tracking-[0.07em] uppercase text-muted mb-1.5">
          {deal.location} · {deal.type.split('·').slice(1).join('·').trim()}
        </p>
        <h3 className="font-serif text-[1.2rem] font-normal tracking-[-0.01em] leading-[1.2] mb-3.5 text-fg">
          {deal.name}
        </h3>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2.5 pb-3.5 border-b border-border mb-3.5" aria-label="Key metrics">
          {deal.cardMetrics.map(m => (
            <div key={m.lbl}>
              <div className={`font-mono text-[0.9375rem] font-bold tabular-nums tracking-[-0.01em] ${m.hi ? 'text-accent' : 'text-fg'}`}>
                {m.val}
              </div>
              <div className="text-[0.5625rem] tracking-[0.07em] uppercase text-muted mt-0.5">
                {m.lbl}
              </div>
            </div>
          ))}
        </div>

        {/* Urgency */}
        <div className="mb-3.5 flex-1">
          <div className="flex justify-between items-center mb-1.75">
            <span className="text-[0.625rem] tracking-wider uppercase font-medium text-muted">
              {deal.urgencyLabel}
            </span>
            <CountdownTimer
              daysLeft={deal.daysLeft}
              className="font-mono text-[0.6875rem] text-warn tabular-nums tracking-[0.02em]"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[0.625rem] text-muted">{deal.spotsLabel}</span>
            <span className="font-mono text-[0.625rem] font-bold text-danger">
              {deal.id === 2 ? '$340K of $500K' : `${deal.spotsLeft} of ${deal.spotsTotal}`}
            </span>
          </div>
          <ProgressBar pct={filledPct} />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.5rem] tracking-[0.09em] uppercase text-muted">Min. Investment</span>
            <span className="font-mono text-[0.9rem] font-bold tabular-nums text-fg">{deal.minInvest}</span>
          </div>
          <button
            className="bg-accent border-none rounded-sm px-4.5 py-2.25 text-[0.8125rem] font-bold tracking-[0.01em] hover:bg-accent-hi hover:shadow-[0_0_14px_var(--color-accent-glo)] transition-all"
            style={{ color: 'oklch(13% 0.018 50)' }}
            type="button"
            onClick={e => { e.stopPropagation(); onClick() }}
          >
            View Deal →
          </button>
        </div>
      </div>
    </article>
  )
}
