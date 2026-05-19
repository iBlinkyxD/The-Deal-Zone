import { useState } from 'react'
import type { Deal } from '../types'

interface Props {
  deal: Deal
  onClose: () => void
}

export function BreakdownModal({ deal, onClose }: Props) {
  const [form, setForm] = useState({ first_name: '', last_name: '', email: '', phone: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/breakdown`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          deal_name: deal.name,
          deal_id: deal.id,
          deal_location: deal.location,
          deal_type: deal.type,
          deal_sub: deal.sub,
          deal_min_invest: deal.minInvest,
          deal_overview: deal.overview,
          deal_financials: deal.financials.map(([l, v, hi]) => [l, v, hi ?? false]),
          deal_structure: deal.structure,
          deal_exit: deal.exit,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail ?? 'Something went wrong.')
      setStatus('success')
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.')
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'oklch(0% 0 0 / 0.72)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="w-full max-w-md bg-surface border border-border rounded-lg overflow-y-auto max-h-[90vh]">
        <div className="flex items-start justify-between p-5.5 pb-4 border-b border-border">
          <div>
            <div className="text-[0.5625rem] tracking-widest uppercase font-bold text-accent mb-1">
              Deal Breakdown
            </div>
            <h2 className="font-serif text-[1.05rem] font-normal tracking-[-0.01em] text-fg">
              {deal.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted hover:text-fg transition-colors p-0.5 mt-0.5"
            aria-label="Close"
            type="button"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M3 3l10 10M13 3L3 13" />
            </svg>
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-5.5 text-center">
            <svg className="w-10 h-10 mx-auto mb-3.5 text-accent" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="20" cy="20" r="18" />
              <path d="M12 20l6 6 10-12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className="text-fg font-semibold mb-1">Breakdown sent!</p>
            <p className="text-muted text-sm">Check your inbox within the next few minutes.</p>
            <button
              onClick={onClose}
              className="mt-5 px-6 py-2.5 bg-surface2 border border-border rounded-sm text-sm text-fg hover:border-border2 transition-all"
              type="button"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5.5 flex flex-col gap-4">
            <p className="text-[0.875rem] text-muted leading-[1.6]">
              Enter your details and we'll email you the full offering documents for{' '}
              <span className="text-fg">{deal.name}</span> within minutes.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Field label="First name">
                <Input value={form.first_name} onChange={v => set('first_name', v)} placeholder="Jane" required />
              </Field>
              <Field label="Last name">
                <Input value={form.last_name} onChange={v => set('last_name', v)} placeholder="Smith" required />
              </Field>
            </div>
            <Field label="Email">
              <Input type="email" value={form.email} onChange={v => set('email', v)} placeholder="jane@example.com" required />
            </Field>
            <Field label="Phone">
              <Input type="tel" value={form.phone} onChange={v => set('phone', v)} placeholder="+1 (555) 000-0000" required />
            </Field>

            {status === 'error' && (
              <p className="text-[0.8125rem]" style={{ color: 'var(--color-danger, oklch(65% 0.18 25))' }}>{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.25 border-none rounded-sm text-[0.9rem] font-semibold tracking-[0.01em] bg-accent hover:bg-accent-hi hover:shadow-[0_0_20px_var(--color-accent-glo)] hover:-translate-y-px transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none"
              style={{ color: 'oklch(12% 0.018 50)' }}
            >
              {status === 'loading' ? 'Sending…' : 'Send Me the Breakdown →'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.75rem] font-medium text-muted tracking-[0.02em]">
        {label} <span className="text-accent">*</span>
      </span>
      {children}
    </label>
  )
}

function Input({
  value, onChange, ...props
}: { value: string; onChange: (v: string) => void } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  return (
    <input
      {...props}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="bg-surface2 border border-border rounded-sm px-3 py-2.5 text-[0.9rem] text-fg placeholder:text-[oklch(38%_0.01_50)] focus:outline-none focus:border-[oklch(64%_0.16_35_/_0.5)] transition-colors"
    />
  )
}
