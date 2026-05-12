export function CardSvgArt({ id }: { id: number }) {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.28] pointer-events-none"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {id === 0 && (
        <>
          <rect x="55" y="55" width="75" height="145" fill="white" opacity=".55" />
          <rect x="95" y="25" width="48" height="175" fill="white" opacity=".75" />
          <rect x="158" y="75" width="58" height="125" fill="white" opacity=".45" />
          <rect x="228" y="42" width="68" height="158" fill="white" opacity=".65" />
          <rect x="308" y="88" width="52" height="112" fill="white" opacity=".38" />
          <rect x="0" y="192" width="400" height="8" fill="white" opacity=".8" />
        </>
      )}
      {id === 1 && (
        <>
          <polygon points="200,18 48,118 352,118" fill="white" opacity=".55" />
          <rect x="75" y="118" width="250" height="82" fill="white" opacity=".45" />
          <rect x="158" y="138" width="58" height="62" fill="oklch(13% 0.018 50)" opacity=".7" />
          <rect x="85" y="128" width="52" height="42" fill="oklch(13% 0.018 50)" opacity=".6" />
          <rect x="258" y="128" width="52" height="42" fill="oklch(13% 0.018 50)" opacity=".6" />
          <line x1="192" y1="18" x2="192" y2="118" stroke="white" strokeWidth="2" opacity=".3" />
        </>
      )}
      {id === 2 && (
        <>
          <circle cx="200" cy="100" r="72" fill="none" stroke="white" strokeWidth="1.5" opacity=".55" />
          <circle cx="200" cy="100" r="48" fill="none" stroke="white" strokeWidth="1" opacity=".38" />
          <circle cx="200" cy="100" r="24" fill="none" stroke="white" strokeWidth="1" opacity=".28" />
          <line x1="200" y1="28" x2="200" y2="172" stroke="white" strokeWidth="1" opacity=".38" />
          <line x1="128" y1="100" x2="272" y2="100" stroke="white" strokeWidth="1" opacity=".38" />
          <rect x="182" y="82" width="36" height="36" rx="4" fill="white" opacity=".22" />
        </>
      )}
    </svg>
  )
}
