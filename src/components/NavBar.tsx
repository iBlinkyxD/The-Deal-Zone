interface Props {
  onLogoClick: () => void
}

export function NavBar({ onLogoClick }: Props) {
  return (
    <nav
      className="sticky top-0 z-200 border-b border-border backdrop-blur-xl"
      style={{ background: 'oklch(13% 0.018 50 / 0.88)' }}
      aria-label="Main navigation"
    >
      <div className="max-w-300 mx-auto h-14.5 px-5 flex items-center justify-between">
        <button
          className="flex items-center gap-2.25 font-serif text-[1.15rem] tracking-[-0.01em] text-fg bg-transparent border-none"
          onClick={onLogoClick}
          aria-label="Deal Room — go to homepage"
        >
          <div
            className="w-7.5 h-7.5 rounded-[7px] bg-accent flex items-center justify-center font-sans text-[0.625rem] font-extrabold tracking-[0.06em]"
            style={{ color: 'oklch(13% 0.018 50)' }}
            aria-hidden="true"
          >
            DZ
          </div>
          Deal Room
        </button>

        <div className="flex items-center gap-2.5">
          <button
            className="bg-transparent border-none px-3.5 py-2 text-[0.8125rem] font-medium tracking-[0.01em] text-muted hover:text-fg transition-colors rounded-sm"
            type="button"
          >
            How It Works
          </button>
          <button
            className="bg-accent border-none px-4.5 py-2.25 rounded-sm text-[0.8125rem] font-semibold tracking-[0.01em] hover:bg-accent-hi hover:shadow-[0_0_18px_var(--color-accent-glo)] transition-all"
            style={{ color: 'oklch(13% 0.018 50)' }}
            type="button"
          >
            Investor Access
          </button>
        </div>
      </div>
    </nav>
  )
}
