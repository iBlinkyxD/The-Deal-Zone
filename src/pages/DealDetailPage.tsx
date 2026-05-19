import { useState } from 'react'
import type { Deal } from '../types'
import { StatsStrip } from '../components/StatsStrip'
import { FinancialTable } from '../components/FinancialTable'
import { StructureGrid } from '../components/StructureGrid'
import { Timeline } from '../components/Timeline'
import { OperatorCard } from '../components/OperatorCard'
import { ActionSidebar } from '../components/ActionSidebar'
import { ReserveModal } from '../components/ReserveModal'
import { BreakdownModal } from '../components/BreakdownModal'

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string

interface Props {
  deal: Deal
  onBack: () => void
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-surface border border-border rounded-lg p-5.5 mb-3.5 last:mb-0">
      <h2 className="font-serif text-[1.05rem] font-normal tracking-[-0.01em] text-fg mb-3.5 pb-3 border-b border-border">
        {title}
      </h2>
      {children}
    </div>
  )
}

export function DealDetailPage({ deal, onBack }: Props) {
  const [reserveOpen, setReserveOpen] = useState(false)
  const [breakdownOpen, setBreakdownOpen] = useState(false)

  return (
    <div className="animate-pg-in">
      {/* Back button */}
      <div className="max-w-300 mx-auto pt-4 px-5">
        <button
          className="inline-flex items-center gap-1.75 bg-transparent border-none p-0 text-[0.8125rem] text-muted hover:text-fg transition-colors"
          onClick={onBack}
          type="button"
          aria-label="Back to all deals"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path d="M9 2L4 7l5 5" />
          </svg>
          All Deals
        </button>
      </div>

      {/* Hero image */}
      <div className="max-w-300 mx-auto mt-4 px-5">
        <div
          className="h-65 sm:h-90 rounded-lg overflow-hidden relative flex items-end p-6"
          aria-hidden="true"
        >
          <img
            src={deal.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, oklch(9% 0.02 50 / 0.92) 0%, oklch(9% 0.02 50 / 0.35) 55%, transparent 100%)' }}
          />
          <div className="relative z-10">
            <div className="text-[0.5625rem] tracking-widest uppercase font-bold text-accent mb-1.75">
              {deal.type}
            </div>
            <h1
              className="font-serif font-normal tracking-tight leading-[1.08] text-fg"
              style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)' }}
            >
              {deal.name}
            </h1>
            <p className="font-mono text-[0.6875rem] mt-1.75 tracking-[0.04em]" style={{ color: 'oklch(68% 0.008 55)' }}>
              {deal.location} · {deal.sub}
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <StatsStrip stats={deal.stats} />

      {/* Main layout */}
      <div className="max-w-300 mx-auto px-5 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 items-start">
        {/* Main content */}
        <div>
          <SectionCard title="Deal Overview">
            {deal.overview.map((p, i) => (
              <p key={i} className="text-[0.9375rem] leading-[1.68] text-fg-sub mb-2.5 last:mb-0">{p}</p>
            ))}
          </SectionCard>

          <SectionCard title="Financial Highlights">
            <FinancialTable rows={deal.financials} />
          </SectionCard>

          <SectionCard title="Investment Structure">
            <StructureGrid cells={deal.structure} />
          </SectionCard>

          <SectionCard title="Timeline">
            <Timeline items={deal.timeline} />
          </SectionCard>

          <SectionCard title="Exit Strategy">
            <p className="text-[0.9375rem] leading-[1.68] text-fg-sub">{deal.exit}</p>
          </SectionCard>

          <SectionCard title="Operator Credibility">
            <OperatorCard operator={deal.operator} />
          </SectionCard>

          <p
            className="text-[0.625rem] leading-[1.6] pt-4.5 border-t border-border mt-3.5"
            style={{ color: 'oklch(34% 0.014 50)' }}
          >
            Investments involve risk. Past performance is not indicative of future results. This is not an offer to sell or solicitation to buy securities. All opportunities are for accredited investors only under Reg D / 506(c). Please review all offering documents carefully before investing.
          </p>

          {/* Mobile spacer */}
          <div className="h-22 lg:h-10" />
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <ActionSidebar
            deal={deal}
            onReserve={() => setReserveOpen(true)}
            onBreakdown={() => setBreakdownOpen(true)}
            calendlyUrl={CALENDLY_URL}
          />
        </aside>
      </div>

      {/* Mobile CTA bar */}
      <div
        className="fixed bottom-0 left-0 right-0 z-100 flex gap-2.5 px-5 pt-3 pb-[calc(12px+env(safe-area-inset-bottom))] border-t border-border backdrop-blur-[18px] lg:hidden"
        style={{ background: 'oklch(13% 0.018 50 / 0.94)' }}
        role="complementary"
        aria-label="Quick actions"
      >
        <button
          className="flex-1 py-3.5 border border-border rounded-sm text-[0.9375rem] font-bold bg-surface2 text-fg hover:bg-[oklch(25%_0.016_50)] transition-all"
          onClick={() => window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer')}
        >
          Schedule Call
        </button>
        <button
          className="flex-1 py-3.5 border-none rounded-sm text-[0.9375rem] font-bold bg-accent hover:bg-accent-hi transition-all"
          style={{ color: 'oklch(12% 0.018 50)' }}
          onClick={() => setReserveOpen(true)}
        >
          Reserve Spot →
        </button>
      </div>

      {/* Modals */}
      {reserveOpen && <ReserveModal deal={deal} onClose={() => setReserveOpen(false)} />}
      {breakdownOpen && <BreakdownModal deal={deal} onClose={() => setBreakdownOpen(false)} />}
    </div>
  )
}
