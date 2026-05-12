import type { Deal } from '../types'

export const DEALS: Deal[] = [
  // ─────────────────────────────────────────────────────────────
  // DEAL 1 — 253 Hillcrest Ave · Co-Living Conversion
  // ─────────────────────────────────────────────────────────────
  {
    id: 0,
    type: 'Co-Living Conversion · Private Lending',
    name: '253 Hillcrest Ave',
    location: 'TBD',           // ❌ MISSING: city / state
    sub: '3/2 → 5-Room Co-Living · Renovation',
    gradient: 'linear-gradient(155deg,oklch(19% 0.04 40),oklch(27% 0.06 45),oklch(21% 0.05 38))',
    daysLeft: 14,              // ❌ MISSING: actual funding deadline
    spotsLeft: 1,              // ❌ MISSING: spots available
    spotsTotal: 3,             // ❌ MISSING: total investor slots
    funded: 0,                 // ❌ MISSING: current funded %
    minInvest: '$35,000',
    urgencyLabel: 'Funding closes in',
    spotsLabel: 'Spots remaining',
    statusBadge: { text: 'Now Open', variant: 'hot' },
    cardMetrics: [
      { val: '12%', lbl: 'Annualized Return', hi: true },
      { val: '6–9 mo', lbl: 'Term' },
      { val: '$35K', lbl: 'Ask' },
    ],
    stats: [
      { v: '12%',      l: 'Annualized Return',  hi: true },
      { v: '6–9 mo',   l: 'Term' },
      { v: '$35,000',  l: 'Ask' },
      { v: '1st Pos.', l: 'Lien Security' },
    ],
    overview: [
      'This 3/2 is being converted to a 5-room co-living property projected to gross $6,500–$8,000/month — vs. $1,600/month as a standard rental. Your capital finishes the renovation.',
      'You are secured by a Promissory Note and recorded Mortgage on the property, with ~$56K in existing equity beneath your position. Capital is returned via balloon payment at refinance at the end of the 6–9 month term. Short, clean, high-yield.',
    ],
    financials: [
      ['Ask / Loan Amount', '$35,000'],
      ['Annualized Return', '12%', true],
      ['Term', '6–9 months'],
      ['Projected Gross Rents (co-living)', '$6,500–$8,000 / mo', true],
      ['Standard Rental Comp', '$1,600 / mo'],
      ['Existing Equity Beneath Position', '~$56,000'],
      ['Security', 'Promissory Note + Recorded Mortgage'],
      ['Exit', 'Balloon return at refinance', true],
      // ❌ MISSING: purchase price, renovation budget, all-in basis
    ],
    structure: [
      { l: 'Deal Structure', v: 'Private Lending' },
      { l: 'Security', v: 'Promissory Note + Mortgage' },
      { l: 'Annualized Return', v: '12%', hi: true },
      { l: 'Minimum Investment', v: '$35,000' },
      { l: 'Term', v: '6–9 months' },
      { l: 'Exit', v: 'Balloon at Refi' },
      // ❌ MISSING: lien position (1st or 2nd?)
    ],
    timeline: [
      { phase: 'Funding', desc: 'Capital secured; promissory note and mortgage recorded on property', date: 'TBD' },
      { phase: 'Renovation', desc: 'Unit converted from 3/2 to 5-room co-living layout', date: 'TBD' },
      { phase: 'Lease-Up', desc: 'Rooms rented individually; projected $6,500–$8,000/mo gross', date: 'TBD' },
      { phase: 'Refinance & Return', desc: 'Property refinanced; investor capital + 12% annualized return paid via balloon', date: '6–9 months from funding' },
      // ❌ MISSING: specific dates for each phase
    ],
    exit: 'Capital is returned via balloon payment at refinance, projected 6–9 months from funding. The conversion from a standard rental ($1,600/mo) to a 5-room co-living property ($6,500–$8,000/mo) drives the NOI increase that enables a cash-out refinance. Investor position is secured by a promissory note and recorded mortgage on the property, with ~$56K in existing equity beneath your position.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING: operator name
      role: 'TBD', // ❌ MISSING: credentials, experience, AUM
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 2 — 716 N Charles St · Co-Living or Flip
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    type: 'Co-Living or Flip · Private Lending + Equity Option',
    name: '716 N Charles St',
    location: 'Baltimore, MD',
    sub: '4/1 · Dual-Exit Strategy',
    gradient: 'linear-gradient(155deg,oklch(18% 0.03 35),oklch(26% 0.05 40),oklch(20% 0.04 32))',
    daysLeft: 10,              // ❌ MISSING: actual deadline
    spotsLeft: 2,              // ❌ MISSING
    spotsTotal: 4,             // ❌ MISSING
    funded: 0,                 // ❌ MISSING
    minInvest: '$35,000',
    urgencyLabel: 'Funding closes in',
    spotsLabel: 'Spots remaining',
    statusBadge: { text: 'Dual Path', variant: 'warn' },
    cardMetrics: [
      { val: '12–15%', lbl: 'Annualized Return', hi: true },
      { val: '6–9 mo', lbl: 'Term' },
      { val: 'Equity Opt.', lbl: 'Bonus Path' },
    ],
    stats: [
      { v: '12–15%',  l: 'Annualized Return',    hi: true },
      { v: '6–9 mo',  l: 'Term' },
      { v: '$35,000', l: 'Ask' },
      { v: '~$70K',   l: 'Equity Buffer Above Loan' },
    ],
    overview: [
      'A 4/1 with ~$70K in equity above your loan position. Two clear exit paths — (a) flip for a clean 6–10 month return, or (b) co-living conversion at $5,500–$7,000/month gross, with an option to convert your lending position to a cash-flow equity stake post-stabilization.',
      'Your capital, your call. Investors who prefer income over a lump-sum exit can exercise the equity conversion option after the property stabilizes, participating in ongoing monthly co-living cash flow.',
    ],
    financials: [
      ['Ask / Loan Amount', '$35,000'],
      ['Annualized Return', '12–15%', true],
      ['Term', '6–9 months'],
      ['Equity Above Loan Position', '~$70,000'],
      ['Projected Gross Rents (co-living)', '$5,500–$7,000 / mo', true],
      ['Exit Option A', 'Flip — 6–10 month lump-sum return'],
      ['Exit Option B', 'Co-Living → Equity stake post-stabilization', true],
      // ❌ MISSING: purchase price, renovation budget, all-in basis, projected flip sale price
    ],
    structure: [
      { l: 'Deal Structure', v: 'Private Lending' },
      { l: 'Equity Conversion', v: 'Option Available', hi: true },
      { l: 'Annualized Return', v: '12–15%', hi: true },
      { l: 'Minimum Investment', v: '$35,000' },
      { l: 'Term', v: '6–9 months' },
      { l: 'Equity Buffer', v: '~$70K above loan' },
      // ❌ MISSING: lien position, security instrument details
    ],
    timeline: [
      { phase: 'Funding', desc: 'Capital secured; lending instrument recorded on property', date: 'TBD' },
      { phase: 'Strategy Lock', desc: 'Final renovation numbers and comps determine flip vs. co-living path', date: 'TBD' },
      { phase: 'Renovation', desc: 'Targeted renovation executed per selected strategy', date: 'TBD' },
      { phase: 'Exit / Conversion', desc: 'Flip close and lump-sum return, or equity conversion + co-living lease-up', date: '6–9 months from funding' },
      // ❌ MISSING: specific dates
    ],
    exit: 'Two exits protect investor position. Option A: Property is flipped within 6–10 months; investor receives principal plus 12–15% annualized return as a lump-sum. Option B: Property converts to co-living ($5,500–$7,000/mo gross); investor may convert their lending position to a cash-flow equity stake and participate in ongoing distributions. ~$70K in equity sits above your loan position across both scenarios.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 3 — Canton Church Redevelopment · Commercial
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    type: 'Commercial Repositioning · Private Lending',
    name: 'Canton Church Redevelopment',
    location: 'Canton, Baltimore MD', // ❌ CONFIRM: Canton neighborhood in Baltimore, or Canton OH?
    sub: 'Former Church · Daycare / Nonprofit Repositioning',
    gradient: 'linear-gradient(155deg,oklch(15% 0.03 240),oklch(22% 0.05 235),oklch(17% 0.04 245))',
    daysLeft: 21,              // ❌ MISSING
    spotsLeft: 3,              // ❌ MISSING
    spotsTotal: 5,             // ❌ MISSING
    funded: 0,                 // ❌ MISSING
    minInvest: '$110,000',     // low end of the ask range
    urgencyLabel: 'Funding closes in',
    spotsLabel: 'Spots remaining',
    statusBadge: { text: '3 Exit Paths', variant: 'ok' },
    cardMetrics: [
      { val: '10–12%', lbl: 'Annualized Return', hi: true },
      { val: '6–12 mo', lbl: 'Term' },
      { val: '3', lbl: 'Exit Paths' },
    ],
    stats: [
      { v: '10–12%',      l: 'Annualized Return',   hi: true },
      { v: '6–12 mo',     l: 'Term' },
      { v: '$110K–$130K', l: 'Ask' },
      { v: '$250K–$300K', l: 'Stabilized Value' },
    ],
    overview: [
      'A large former church property in Canton acquired at ~$90K — a fraction of its $250K–$300K stabilized value. The business plan: light improvements, lease to a daycare, church, or nonprofit, stabilize income, then refinance or sell.',
      'This is not a speculative flip — it\'s a strategic acquisition with extremely low basis, multiple tenant types, and strong asset-backed downside protection. Three exits protect your position. Your capital is secured by real estate.',
    ],
    financials: [
      ['Acquisition Basis', '~$90,000'],
      ['Stabilized Value', '$250,000–$300,000', true],
      ['Ask / Loan Amount', '$110,000–$130,000'],
      ['Annualized Return', '10–12%', true],
      ['Term', '6–12 months'],
      ['Target Tenants', 'Daycare / Church / Nonprofit'],
      ['Security', 'Real estate asset-backed'],
      // ❌ MISSING: renovation / improvement budget, projected rental income from tenant,
      //            specific security instrument (promissory note? mortgage?),
      //            exact acquisition price (listed as ~$90K)
    ],
    structure: [
      { l: 'Deal Structure', v: 'Private Lending' },
      { l: 'Annualized Return', v: '10–12%', hi: true },
      { l: 'Ask', v: '$110,000–$130,000' },
      { l: 'Term', v: '6–12 months' },
      { l: 'Acquisition Basis', v: '~$90,000' },
      { l: 'Exit Paths', v: '3 Options' },
      // ❌ MISSING: lien position, security instrument type, improvement budget
    ],
    timeline: [
      { phase: 'Acquisition & Funding', desc: 'Property acquired at ~$90K; investor capital deployed for improvements', date: 'TBD' },
      { phase: 'Light Improvements', desc: 'Targeted improvements to make property tenant-ready for daycare/nonprofit', date: 'TBD' },
      { phase: 'Tenant Lease-Up', desc: 'Lease executed with daycare, church, or nonprofit tenant; income stabilized', date: 'TBD' },
      { phase: 'Exit', desc: 'Refinance or sale at stabilized value; investor capital + return distributed', date: '6–12 months from funding' },
      // ❌ MISSING: specific dates, improvement scope and cost, tenant pipeline
    ],
    exit: 'Three exits protect investor position: (1) Refinance after stabilization — stabilized income supports a cash-out refi at the $250K–$300K valuation, returning investor capital plus annualized return; (2) Direct sale to an owner-operator or investor at stabilized value; (3) Long-term hold with ongoing lease income. The extremely low acquisition basis (~$90K vs. $250K–$300K stabilized) provides strong downside protection across all scenarios.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 4 — 685 Jefferson Ave, Brooklyn NY · Mixed-Use Equity
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    type: 'Mixed-Use Multifamily · Equity Partnership',
    name: '685 Jefferson Ave',
    location: 'Brooklyn, NY',
    sub: 'Mixed-Use Building · STR Bridge + Co-Op Conversion',
    gradient: 'linear-gradient(155deg,oklch(13% 0.02 220),oklch(20% 0.04 215),oklch(15% 0.03 225))',
    daysLeft: 7,               // ❌ MISSING: actual deadline (PSA is next — urgent)
    spotsLeft: 1,              // 1 × 20% equity position available
    spotsTotal: 1,
    funded: 0,                 // ❌ MISSING
    minInvest: 'TBD',          // ❌ MISSING: dollar amount for the 20% equity position
    urgencyLabel: 'PSA window closes in',
    spotsLabel: 'Equity positions remaining',
    statusBadge: { text: 'LOI Signed', variant: 'hot' },
    cardMetrics: [
      { val: '20%', lbl: 'Equity Position', hi: true },
      { val: '$95K–$231K', lbl: 'Projected Return' },
      { val: '18–36 mo', lbl: 'Term' },
    ],
    stats: [
      { v: '20%',          l: 'Equity Position',    hi: true },
      { v: '$95K–$231K',   l: 'Projected Return' },
      { v: '18–36 mo',     l: 'Term' },
      { v: 'LOI Executed', l: 'Deal Status' },
    ],
    overview: [
      'A $1.2M Brooklyn building being acquired via creative structure — $775K in financing, $100K working capital for tenant buyouts and co-op conversion. The bridge strategy operates vacant units as short-term rentals (Airbnb) to cover debt service while the conversion is executed.',
      'The exit strategy converts individual units to co-op and sells at $400–550K each. You come in as a 20% equity partner in the operating entity — participating in STR cash flow, unit sales, and net profit distributions. LOI is executed. PSA is next. Early partners get the best entry.',
    ],
    financials: [
      ['Building Purchase Price', '$1,200,000'],
      ['Financing', '$775,000'],
      ['Working Capital (buyouts + conversion)', '$100,000'],
      ['Projected Return on Equity', '$95,000–$231,000', true],
      ['Equity Position Available', '20%'],
      ['Bridge Strategy', 'STR (Airbnb) on vacant units'],
      ['Exit: Unit Sale Price (each)', '$400,000–$550,000', true],
      ['Term', '18–36 months'],
      // ❌ MISSING: total equity raise amount, number of units, cost per equity position (dollar in),
      //            STR income projections, co-op conversion costs, number of units converting
    ],
    structure: [
      { l: 'Deal Structure', v: 'Equity Partnership' },
      { l: 'Equity Position', v: '20%', hi: true },
      { l: 'Projected Return', v: '$95K–$231K', hi: true },
      { l: 'Minimum Investment', v: 'TBD' },     // ❌ MISSING
      { l: 'Term', v: '18–36 months' },
      { l: 'Bridge Income', v: 'STR Cash Flow' },
      // ❌ MISSING: equity split on unit sales, preferred return structure (if any),
      //            total number of partners / equity structure breakdown
    ],
    timeline: [
      { phase: 'LOI Executed', desc: 'Letter of Intent signed; deal under exclusivity', date: 'Complete' },
      { phase: 'PSA Execution', desc: 'Purchase and Sale Agreement signed; equity partners locked in', date: 'Imminent' },
      { phase: 'Acquisition & STR Bridge', desc: 'Building acquired; vacant units activated as STR to cover debt service', date: 'TBD' },
      { phase: 'Tenant Buyouts', desc: 'Existing tenants bought out; units cleared for co-op conversion', date: 'TBD' },
      { phase: 'Co-Op Conversion & Sales', desc: 'Individual units converted to co-op and sold at $400–550K each; proceeds distributed', date: '18–36 months' },
      // ❌ MISSING: specific dates for each phase, number of units, buyout timeline
    ],
    exit: 'Primary exit is co-op conversion and individual unit sales at $400–550K per unit. The STR bridge strategy (Airbnb on vacant units) covers debt service during the conversion period, eliminating cash-flow risk. As a 20% equity partner, you participate in STR cash flow distributions, individual unit sale proceeds, and net profit distributions. Projected equity return is $95,000–$231,000 depending on unit sale prices achieved.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 5 — 13309 S Woodland Rd, Cleveland OH · 17-Unit
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    type: '17-Unit Multifamily · Equity / Private Lending',
    name: '13309 S Woodland Rd',
    location: 'Cleveland, OH',
    sub: '17-Unit, 67-Room Walk-Up Apartment',
    gradient: 'linear-gradient(155deg,oklch(16% 0.03 55),oklch(24% 0.05 50),oklch(18% 0.04 58))',
    daysLeft: 21,              // ❌ MISSING: actual deadline
    spotsLeft: 5,              // ❌ MISSING
    spotsTotal: 10,            // ❌ MISSING
    funded: 0,                 // ❌ MISSING
    minInvest: 'TBD',          // ❌ MISSING: minimum investment amount
    urgencyLabel: 'Raise closes in',
    spotsLabel: 'Investment slots remaining',
    statusBadge: { text: 'Raising Now', variant: 'warn' },
    cardMetrics: [
      { val: '$600K', lbl: 'Value Created', hi: true },
      { val: '17 Units', lbl: 'Property Size' },
      { val: "Sept '26", lbl: 'Reno Complete' },
    ],
    stats: [
      { v: '$1.825M',    l: 'As-Stabilized Value', hi: true },
      { v: '17 Units',   l: '67 Rooms' },
      { v: '$21,525/mo', l: 'Projected Rents' },
      { v: '$452,100',   l: 'Renovation Budget' },
    ],
    overview: [
      'A 17-unit, 67-room walk-up apartment building in Cleveland with a professionally appraised as-stabilized value of $1,825,000 — $600,000 above the as-is value of $1,225,000. The renovation budget of $452,100 unlocks that entire gap.',
      'Renovation completes September 2026, full stabilization by November 2026. Third-party certified appraisal, clear renovation scope, and strong Cleveland rental demand. The spread between cost and stabilized value is the opportunity.',
    ],
    financials: [
      ['As-Is Appraised Value', '$1,225,000'],
      ['As-Stabilized Value', '$1,825,000', true],
      ['Value Created by Renovation', '~$600,000', true],
      ['Renovation Budget', '$452,100'],
      ['Projected Gross Rents', '$21,525 / mo ($258,300 / yr)', true],
      ['Renovation Complete', 'September 2026'],
      ['Full Stabilization', 'November 2026'],
      // ❌ MISSING: acquisition price, total raise amount (acquisition + reno),
      //            return rate (if lending) or equity split (if equity),
      //            debt structure / LTV, operating expenses / NOI,
      //            projected exit value or cap rate at sale
    ],
    structure: [
      { l: 'Deal Structure', v: 'Equity or Private Lending' }, // ❌ MISSING: which structure applies
      { l: 'As-Stabilized Value', v: '$1,825,000', hi: true },
      { l: 'Renovation Budget', v: '$452,100' },
      { l: 'Minimum Investment', v: 'TBD' },     // ❌ MISSING
      { l: 'Reno Complete', v: 'Sept 2026' },
      { l: 'Stabilized', v: 'Nov 2026' },
      // ❌ MISSING: preferred return, equity splits, total raise amount,
      //            security (if lending), acquisition price
    ],
    timeline: [
      { phase: 'Raise', desc: 'Equity and/or lending capital committed to cover acquisition and renovation', date: 'Now' },
      { phase: 'Acquisition', desc: 'Building acquired; renovation begins', date: 'TBD' },
      { phase: 'Renovation', desc: '$452,100 renovation executed across 17 units and 67 rooms', date: 'Through Sept 2026' },
      { phase: 'Stabilization', desc: 'Units leased; projected $21,525/mo gross rent achieved', date: 'Nov 2026' },
      { phase: 'Refi / Sale', desc: 'Refinance or disposition at as-stabilized value of $1,825,000+; returns distributed', date: 'TBD' }, // ❌ MISSING: exit timeline
    ],
    exit: 'Primary exit is refinance or sale at the as-stabilized appraised value of $1,825,000 — $600,000 above the as-is value of $1,225,000. The $452,100 renovation budget unlocks this spread. Stabilized gross rents of $21,525/month ($258,300/year) support a strong refinance basis. Third-party USPAP-compliant appraisal available for review.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 6 — 14174 Superior Rd, Cleveland OH · 14-Unit
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    type: '14-Unit Multifamily · Equity / Private Lending',
    name: '14174 Superior Rd',
    location: 'Cleveland, OH',
    sub: '14-Unit, 49-Room Apartment Building',
    gradient: 'linear-gradient(155deg,oklch(15% 0.03 60),oklch(23% 0.05 55),oklch(17% 0.04 62))',
    daysLeft: 21,              // ❌ MISSING: actual deadline (same market / timeline as Deal 5)
    spotsLeft: 5,              // ❌ MISSING
    spotsTotal: 10,            // ❌ MISSING
    funded: 0,                 // ❌ MISSING
    minInvest: 'TBD',          // ❌ MISSING
    urgencyLabel: 'Raise closes in',
    spotsLabel: 'Investment slots remaining',
    statusBadge: { text: 'Raising Now', variant: 'warn' },
    cardMetrics: [
      { val: '$355K+', lbl: 'Value Created', hi: true },
      { val: '14 Units', lbl: 'Property Size' },
      { val: "Sept '26", lbl: 'Reno Complete' },
    ],
    stats: [
      { v: '$1.225M',  l: 'As-Stabilized Value', hi: true },
      { v: '14 Units', l: '49 Rooms' },
      { v: '$355K+',   l: 'Value Added' },
      { v: '$249,000', l: 'Renovation Budget' },
    ],
    overview: [
      'A 14-unit, 49-room apartment building in Cleveland, fully appraised and ready for a targeted renovation. $249,000 in improvements deliver a property worth $1,225,000 at stabilization — a $355,000 value-add on the renovation alone.',
      'Same market, same timeline as Deal 5: renovation complete September 2026, stabilized November 2026. Third-party USPAP-compliant appraisal available for review. Ideal for investors who want multifamily exposure with a concrete value creation thesis and credentialed documentation.',
    ],
    financials: [
      ['As-Is Appraised Value', '$870,000'],
      ['As-Stabilized Value', '$1,225,000', true],
      ['Value Created by Renovation', '$355,000+', true],
      ['Renovation Budget', '$249,000'],
      ['Renovation Complete', 'September 2026'],
      ['Full Stabilization', 'November 2026'],
      // ❌ MISSING: acquisition price, total raise amount, projected rents,
      //            return rate (lending) or equity split (equity),
      //            operating expenses / NOI, exit cap rate
    ],
    structure: [
      { l: 'Deal Structure', v: 'Equity or Private Lending' }, // ❌ MISSING: terms
      { l: 'As-Is Value', v: '$870,000' },
      { l: 'As-Stabilized Value', v: '$1,225,000', hi: true },
      { l: 'Renovation Budget', v: '$249,000' },
      { l: 'Minimum Investment', v: 'TBD' },     // ❌ MISSING
      { l: 'Reno Complete', v: 'Sept 2026' },
      // ❌ MISSING: preferred return, equity splits, total raise, acquisition price
    ],
    timeline: [
      { phase: 'Raise', desc: 'Capital committed to cover acquisition and $249,000 renovation', date: 'Now' },
      { phase: 'Acquisition', desc: 'Building acquired; renovation scope executed', date: 'TBD' },
      { phase: 'Renovation', desc: '$249,000 renovation across 14 units / 49 rooms; delivers $355,000+ in value', date: 'Through Sept 2026' },
      { phase: 'Stabilization', desc: 'Units fully leased at market rents', date: 'Nov 2026' },
      { phase: 'Refi / Sale', desc: 'Refinance or sale at $1,225,000 as-stabilized value; returns distributed', date: 'TBD' }, // ❌ MISSING: exit timeline
    ],
    exit: 'Primary exit is refinance or sale at the as-stabilized appraised value of $1,225,000 — $355,000 above the as-is value. The $249,000 renovation budget creates this entire spread. Third-party USPAP-compliant appraisal is available for investor review. Same timeline and market as Deal 5 — investors who want diversified Cleveland multifamily exposure can participate in both.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 7 — Hotel Kaoba · Cabarete, Dominican Republic
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    type: 'Premium Hospitality · Fixed Return + Equity',
    name: 'Hotel Kaoba',
    location: 'Cabarete, Dominican Republic',
    sub: 'Boutique Hotel + Private Residency · El Kaoba Capital Circle™',
    gradient: 'linear-gradient(155deg,oklch(15% 0.04 185),oklch(22% 0.07 190),oklch(17% 0.05 180))',
    daysLeft: 30,              // ❌ MISSING: actual deadline (full offering forthcoming)
    spotsLeft: 10,             // ❌ MISSING
    spotsTotal: 10,            // ❌ MISSING
    funded: 0,                 // ❌ MISSING
    minInvest: 'TBD',          // ❌ MISSING: full offering forthcoming
    urgencyLabel: 'Offering opens in',
    spotsLabel: 'Positions available',
    statusBadge: { text: 'Coming Soon', variant: 'warn' },
    cardMetrics: [
      { val: 'Tiered', lbl: 'Return Structure', hi: true },
      { val: '1–3 Yr', lbl: 'Term Options' },
      { val: 'Caribbean', lbl: 'Market' },
    ],
    stats: [
      { v: 'Tiered',    l: 'Return Structure',  hi: true },
      { v: '1–3 Yr',    l: 'Term Options' },
      { v: 'Cabarete',  l: 'DR — Caribbean' },
      { v: 'TBD',       l: 'Minimum Investment' },
    ],
    overview: [
      'El Kaoba Private Residency & Capital Circle™ is a boutique Caribbean hospitality and private residency asset in Cabarete, DR — one of the Caribbean\'s fastest-growing lifestyle destinations. The Dominican Republic surpassed 10M tourists in 2023. USD-anchored economy. Strong international demand.',
      'Three investment tiers by term: Year 1 earns fixed interest. Year 2 adds quarterly cash flow participation. Year 3 investors receive full equity upside plus private residency access as part of their return. A long-term premium play for capital that wants Caribbean real estate exposure without managing it.',
    ],
    financials: [
      ['Investment Structure', 'Tiered — 1, 2, or 3-Year'],
      ['Year 1 Return', 'Fixed Interest', true],           // ❌ MISSING: exact rate
      ['Year 2 Return', 'Fixed Interest + Quarterly Cash Flow', true], // ❌ MISSING: rates
      ['Year 3 Return', 'Full Equity Upside + Private Residency', true], // ❌ MISSING: projections
      ['Market', 'Cabarete, Dominican Republic'],
      ['Tourism (2023)', '10M+ visitors to DR'],
      ['Currency', 'USD-anchored economy'],
      ['Minimum Investment', 'TBD — full offering forthcoming'], // ❌ MISSING
      // ❌ MISSING: property valuation, revenue projections, occupancy rates,
      //            exact return rates per tier, equity structure details,
      //            residency terms and privileges, total raise amount
    ],
    structure: [
      { l: 'Deal Structure', v: 'Tiered Investment' },
      { l: 'Year 1', v: 'Fixed Interest', hi: true },     // ❌ MISSING: rate
      { l: 'Year 2', v: 'Interest + Cash Flow', hi: true },
      { l: 'Year 3', v: 'Equity + Residency', hi: true },
      { l: 'Minimum Investment', v: 'TBD' },
      { l: 'Full Offering', v: 'Forthcoming' },
      // ❌ MISSING: everything — this is a placeholder pending full offering docs
    ],
    timeline: [
      { phase: 'Full Offering Release', desc: 'Complete investment deck, financials, and term sheet published', date: 'TBD' },
      { phase: 'Year 1 — Fixed Return', desc: 'Capital earns fixed interest; hospitality operations ongoing', date: 'Year 1' },
      { phase: 'Year 2 — Cash Flow', desc: 'Quarterly cash flow distributions begin in addition to fixed interest', date: 'Year 2' },
      { phase: 'Year 3 — Full Equity', desc: 'Investor receives equity upside participation and private residency access', date: 'Year 3' },
      // ❌ MISSING: specific rates, start dates, property acquisition/completion status
    ],
    exit: 'Full offering forthcoming. Three-tier exit aligned to investment duration: Year 1 = fixed interest return (lump-sum at maturity); Year 2 = fixed interest + quarterly cash flow participation during term; Year 3 = full equity upside plus private residency access as part of the return package. Long-term investors receive the most complete exposure to Caribbean hospitality appreciation.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },

  // ─────────────────────────────────────────────────────────────
  // DEAL 8 — 926 W Wayne · Flip or Co-Living
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    type: 'Single-Family · Flip or Co-Living Conversion',
    name: '926 W Wayne',
    location: 'TBD',           // ❌ MISSING: city / state
    sub: 'Single-Family · Dual Strategy · Decision Pending',
    gradient: 'linear-gradient(155deg,oklch(20% 0.04 42),oklch(28% 0.07 47),oklch(22% 0.05 40))',
    daysLeft: 14,              // ❌ MISSING: actual deadline
    spotsLeft: 2,              // ❌ MISSING
    spotsTotal: 3,             // ❌ MISSING
    funded: 0,                 // ❌ MISSING
    minInvest: '$35,000',      // low end of $35K–$50K ask
    urgencyLabel: 'Expression of interest by',
    spotsLabel: 'Spots remaining',
    statusBadge: { text: 'Strategy TBD', variant: 'warn' },
    cardMetrics: [
      { val: '15–25%', lbl: 'Net Return (Flip)', hi: true },
      { val: '6–10 mo', lbl: 'Term' },
      { val: '2 Paths', lbl: 'Strategy' },
    ],
    stats: [
      { v: '15–25%',     l: 'Net Return (Flip)',  hi: true },
      { v: 'Or Ongoing', l: 'Co-Living Yield' },
      { v: '6–10 mo',    l: 'Term' },
      { v: '$35K–$50K',  l: 'Ask' },
    ],
    overview: [
      'A single-family property with two clear paths — flip for a 6–10 month clean exit at 15–25% net return, or convert to co-living for ongoing monthly yield using the same model as Deals 1 and 2.',
      'Decision point is being finalized based on final renovation numbers and market comps. Investors who express interest now will receive first right of refusal once the strategy is locked and the deal is packaged.',
    ],
    financials: [
      ['Ask', '$35,000–$50,000'],
      ['Return (Flip Path)', '15–25% net', true],
      ['Return (Co-Living Path)', 'Ongoing monthly yield', true],
      ['Term', '6–10 months (flip) or ongoing (co-living)'],
      ['Strategy Decision', 'Pending final reno numbers + market comps'],
      // ❌ MISSING: purchase price, renovation budget, all-in basis,
      //            projected co-living monthly gross, projected flip sale price,
      //            property details (beds/baths), exact location
    ],
    structure: [
      { l: 'Deal Structure', v: 'TBD (Lending or Equity)' }, // ❌ MISSING: final structure
      { l: 'Ask', v: '$35,000–$50,000' },
      { l: 'Flip Return', v: '15–25% net', hi: true },
      { l: 'Co-Living Yield', v: 'Ongoing', hi: true },
      { l: 'Term', v: '6–10 months (flip)' },
      { l: 'Priority Access', v: '1st Right of Refusal' },
      // ❌ MISSING: security instrument, lien position, equity split details
    ],
    timeline: [
      { phase: 'Expression of Interest', desc: 'Investors express interest; first right of refusal secured for early commitments', date: 'Now' },
      { phase: 'Strategy Lock', desc: 'Final renovation numbers and market comps determine flip vs. co-living path', date: 'TBD' },
      { phase: 'Deal Packaging', desc: 'Full deal packaged and distributed to committed investors', date: 'TBD' },
      { phase: 'Renovation', desc: 'Renovation executed per selected strategy', date: 'TBD' },
      { phase: 'Exit / Lease-Up', desc: 'Flip close at 15–25% net return, or co-living stabilization for ongoing yield', date: '6–10 months from funding' },
      // ❌ MISSING: specific dates, property details, renovation scope
    ],
    exit: 'Two exits depending on final strategy. Flip path: property sold within 6–10 months at 15–25% net return; investor receives lump-sum principal plus profit. Co-living path: property converted to multi-room co-living rental (same model as Deals 1 and 2); investor participates in ongoing monthly yield. Strategy will be locked based on final renovation numbers and market comps — investors who express interest now secure first right of refusal at the best terms.',
    operator: {
      init: 'TBD', // ❌ MISSING
      name: 'TBD', // ❌ MISSING
      role: 'TBD', // ❌ MISSING
    },
  },
]
