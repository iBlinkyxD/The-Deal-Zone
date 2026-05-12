interface Props {
  pct: number
  height?: 'thin' | 'thick'
}

export function ProgressBar({ pct, height = 'thin' }: Props) {
  const h = height === 'thin' ? 'h-0.75' : 'h-1.25'
  const r = height === 'thin' ? 'rounded-xs' : 'rounded-[3px]'

  return (
    <div
      className={`${h} bg-[oklch(22%_0.016_50)] ${r} overflow-hidden mt-1.25`}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`${h} bg-gradient-to-r from-[oklch(52%_0.14_35)] to-accent ${r}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  )
}
