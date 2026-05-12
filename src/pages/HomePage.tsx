import { DEALS } from '../data/deals'
import { DealCard } from '../components/DealCard'

interface Props {
  onOpenDeal: (id: number) => void
}

export function HomePage({ onOpenDeal }: Props) {
  return (
    <main className="animate-pg-in">
      {/* Hero */}
      <section
        className="max-w-300 mx-auto pt-13 px-5 pb-9"
        aria-labelledby="hero-h1"
      >
        <p className="inline-flex items-center gap-2 text-[0.6875rem] font-semibold tracking-widest uppercase text-accent mb-4.5 before:content-[''] before:block before:w-5.5 before:h-px before:bg-accent" aria-hidden="true">
          Private Investment Opportunities
        </p>
        <h1
          id="hero-h1"
          className="font-serif font-normal leading-[1.08] tracking-tight text-fg mb-4.5 max-w-150"
          style={{ fontSize: 'clamp(2.1rem, 6.5vw, 3.75rem)' }}
        >
          Curated Deals.<br />Real Returns.
        </h1>
        <p className="text-base text-fg-sub max-w-115 mb-9 leading-[1.65]">
          Institutional-grade real estate opportunities presented with complete transparency for qualified investors.
        </p>

        <dl
          className="flex gap-9 flex-wrap pb-9"
          style={{ borderBottom: '1px solid oklch(64% 0.16 35 / 0.18)' }}
          aria-label="Platform statistics"
        >
          {[
            { lbl: 'Capital Deployed', val: '$42M+' },
            { lbl: 'Avg. Target IRR', val: '18.4%' },
            { lbl: 'Deals Closed', val: '34' },
            { lbl: 'Investor Default Rate', val: '0%' },
          ].map(kpi => (
            <div key={kpi.lbl}>
              <dt className="text-[0.625rem] tracking-[0.08em] uppercase text-muted mt-0.75">{kpi.lbl}</dt>
              <dd className="font-serif text-2xl font-normal tracking-[-0.01em] text-fg">{kpi.val}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Section bar */}
      <div className="max-w-300 mx-auto mt-9 mb-5 px-5 flex items-baseline justify-between" aria-hidden="true">
        <h2 className="font-serif text-[1.2rem] font-normal tracking-[-0.01em]">Active Opportunities</h2>
        <span className="font-mono text-[0.6875rem] tracking-[0.06em] text-muted">03 ACTIVE</span>
      </div>

      {/* Deal grid */}
      <section
        className="max-w-300 mx-auto px-5 pb-25 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4.5"
        aria-label="Investment opportunities"
      >
        {DEALS.map(deal => (
          <DealCard key={deal.id} deal={deal} onClick={() => onOpenDeal(deal.id)} />
        ))}
      </section>

      <footer className="max-w-300 mx-auto px-5 pb-10 pt-5 text-[0.6875rem] leading-[1.6] border-t border-border" style={{ color: 'oklch(36% 0.014 50)' }}>
        Investments involve risk. Past performance is not indicative of future results. All opportunities are for accredited investors only under Reg D / 506(c). This is not an offer to sell or solicitation to buy securities. Deal Zone LLC does not provide financial, legal, or tax advice. Please review all offering documents before investing.
      </footer>
    </main>
  )
}
