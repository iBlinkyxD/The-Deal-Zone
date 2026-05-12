interface Props {
  rows: [string, string, boolean?][]
}

export function FinancialTable({ rows }: Props) {
  return (
    <table className="w-full border-collapse" aria-label="Financial details">
      <tbody>
        {rows.map(([label, value, hi]) => (
          <tr key={label} className="border-b border-border last:border-b-0">
            <td className="py-2.25 text-sm text-fg-sub">{label}</td>
            <td className={`py-2.25 text-sm text-right font-mono font-semibold tabular-nums ${hi ? 'text-accent' : 'text-fg'}`}>
              {value}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
