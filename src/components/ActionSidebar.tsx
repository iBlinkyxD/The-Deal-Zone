import type { Deal } from '../types'
import { CountdownTimer } from './CountdownTimer'
import { ProgressBar } from './ProgressBar'

const TRUST_ITEMS = [
  {
    label: 'Asset-backed security',
    icon: <path d="M7 1.5C4 1.5 2 4 2 7s2 5.5 5 5.5S12 10 12 7 10 1.5 7 1.5z"/>,
    extra: <path d="M5 7l1.5 1.5L9.5 5.5"/>,
  },
  {
    label: 'Full offering documents available',
    icon: <><rect x="1.5" y="2.5" width="11" height="9" rx="1.5"/><path d="M4.5 6h5M4.5 8.5h3"/></>,
  },
  {
    label: 'Monthly investor reporting',
    icon: <><circle cx="7" cy="7" r="5.5"/><path d="M7 4.5v3l1.5 1.5"/></>,
  },
  {
    label: 'Accredited investors only · Reg D 506(c)',
    icon: <path d="M7 1L9 5l4 .5-3 3 .5 4L7 10.5 3.5 12.5 4 8.5 1 5.5 5 5z"/>,
  },
]

interface Props {
  deal: Deal
}

function doAction(type: 'reserve' | 'breakdown' | 'schedule' | 'deposit', dealName: string) {
  const msgs = {
    reserve:   `To reserve your spot in ${dealName}, email invest@dealzone.com with subject "Reserve — ${dealName}". We'll send you the subscription agreement within 24 hours.`,
    breakdown: `Full offering documents for ${dealName} will be emailed within 24 hours. Email invest@dealzone.com with "Breakdown — ${dealName}" in the subject line.`,
    schedule:  `To schedule a 30-minute investor call about ${dealName}, email invest@dealzone.com or visit our scheduling link.`,
    deposit:   `To leave a soft deposit on ${dealName}, email invest@dealzone.com with "Deposit — ${dealName}" and your intended amount. No commitment until docs are signed.`,
  }
  alert(msgs[type])
}

export function ActionSidebar({ deal }: Props) {
  const filledPct = Math.round(((deal.spotsTotal - deal.spotsLeft) / deal.spotsTotal) * 100)

  return (
    <div className="sticky top-18.5">
      <div className="bg-surface border border-border rounded-lg p-5.5 mb-3.5">
        <h2 className="font-serif text-[1.05rem] font-normal tracking-[-0.01em] mb-4.5">
          Take Action
        </h2>

        {/* Urgency panel */}
        <div
          className="rounded-md p-4 mb-4.5"
          style={{ background: 'oklch(20% 0.014 50)', border: '1px solid oklch(64% 0.16 35 / 0.22)' }}
          role="status"
          aria-label="Deal urgency"
        >
          <div className="text-[0.5625rem] tracking-widest uppercase font-bold text-accent mb-2.5">
            Closing Window
          </div>
          <CountdownTimer
            daysLeft={deal.daysLeft}
            className="font-mono text-2xl font-bold text-warn tabular-nums tracking-[0.04em] block mb-1.5"
          />
          <div className="text-[0.6875rem] text-muted mb-3">
            Until funding closes · Act before allocation fills
          </div>
          <div className="flex justify-between items-center mb-1.75">
            <span className="text-[0.6875rem] text-muted">Investor spots remaining</span>
            <span className="font-mono text-[0.6875rem] font-bold text-danger">
              {deal.spotsLeft} of {deal.spotsTotal}
            </span>
          </div>
          <ProgressBar pct={filledPct} height="thick" />
        </div>

        {/* Action buttons */}
        <button
          className="w-full py-3.25 border-none rounded-sm text-[0.9rem] font-semibold tracking-[0.01em] mb-2.25 bg-accent hover:bg-accent-hi hover:shadow-[0_0_20px_var(--color-accent-glo)] hover:-translate-y-px transition-all"
          style={{ color: 'oklch(12% 0.018 50)' }}
          onClick={() => doAction('reserve', deal.name)}
        >
          Reserve My Spot →
        </button>
        <button
          className="w-full py-3.25 border border-border rounded-sm text-[0.9rem] font-semibold tracking-[0.01em] mb-2.25 bg-surface2 text-fg hover:border-border2 hover:bg-[oklch(25%_0.016_50)] transition-all"
          onClick={() => doAction('breakdown', deal.name)}
        >
          Request Full Breakdown
        </button>
        <button
          className="w-full py-3.25 border border-border rounded-sm text-[0.9rem] font-semibold tracking-[0.01em] mb-2.25 bg-surface2 text-fg hover:border-border2 hover:bg-[oklch(25%_0.016_50)] transition-all"
          onClick={() => doAction('schedule', deal.name)}
        >
          Schedule Investor Call
        </button>
        <button
          className="w-full py-3.25 border border-border rounded-sm text-[0.9rem] font-semibold tracking-[0.01em] bg-transparent text-muted hover:text-fg hover:border-border2 transition-all"
          onClick={() => doAction('deposit', deal.name)}
        >
          Leave a Deposit
        </button>

        {/* Trust indicators */}
        <ul className="flex flex-col gap-2 mt-4.5" aria-label="Trust indicators">
          {TRUST_ITEMS.map(item => (
            <li key={item.label} className="flex items-center gap-2.25 text-xs text-muted">
              <svg className="w-3.5 h-3.5 text-accent shrink-0" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                {item.icon}
                {item.extra}
              </svg>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Min investment */}
      <div className="flex justify-between items-center px-4.5 py-3.5 bg-surface border border-border rounded-md">
        <span className="text-[0.6875rem] tracking-[0.06em] uppercase text-muted">Minimum Investment</span>
        <span className="font-mono text-[1.1rem] font-bold tabular-nums text-fg">{deal.minInvest}</span>
      </div>
    </div>
  )
}
