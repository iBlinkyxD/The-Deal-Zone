import { useEffect, useState } from 'react'

function pad(n: number) { return String(n).padStart(2, '0') }

function fmtCountdown(ms: number): string {
  if (ms <= 0) return 'Closed'
  const d = Math.floor(ms / 86400000)
  const h = Math.floor((ms % 86400000) / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  if (d > 0) return `${pad(d)}d ${pad(h)}h ${pad(m)}m`
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

interface Props {
  daysLeft: number
  className?: string
}

export function CountdownTimer({ daysLeft, className = '' }: Props) {
  const [deadline] = useState(
    () => Date.now() + daysLeft * 86400000 + Math.floor(Math.random() * 3600000)
  )
  const [display, setDisplay] = useState(() => fmtCountdown(deadline - Date.now()))

  useEffect(() => {
    const id = setInterval(() => setDisplay(fmtCountdown(deadline - Date.now())), 1000)
    return () => clearInterval(id)
  }, [deadline])

  return (
    <span className={className} aria-live="polite">
      {display}
    </span>
  )
}
