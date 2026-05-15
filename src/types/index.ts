export interface Stat {
  v: string
  l: string
  hi?: boolean
}

export interface StructureCell {
  l: string
  v: string
  hi?: boolean
}

export interface TimelineItem {
  phase: string
  desc: string
  date: string
}

export interface Operator {
  init: string
  name: string
  role: string
}

export type StatusVariant = 'hot' | 'warn' | 'ok'

export interface StatusBadge {
  text: string
  variant: StatusVariant
}

export interface CardMetric {
  val: string
  lbl: string
  hi?: boolean
}

export interface Deal {
  id: number
  type: string
  name: string
  location: string
  sub: string
  image: string
  gradient: string
  daysLeft: number
  spotsLeft: number
  spotsTotal: number
  funded: number
  minInvest: string
  urgencyLabel: string
  spotsLabel: string
  statusBadge: StatusBadge
  cardMetrics: CardMetric[]
  stats: Stat[]
  overview: string[]
  financials: [string, string, boolean?][]
  structure: StructureCell[]
  timeline: TimelineItem[]
  exit: string
  operator: Operator
}
