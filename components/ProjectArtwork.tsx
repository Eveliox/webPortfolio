/** Abstract ink studies, not product screenshots. */
export function ProjectArtwork({ index }: { index: number }) {
  return (
    <div className={`project-artwork project-artwork-${index % 3}`} aria-hidden="true">
      <svg viewBox="0 0 600 280" fill="none" focusable="false">
        {index % 3 === 0 ? (
          <>
            {Array.from({ length: 14 }, (_, i) => <path key={i} d={`M${-120 + i * 25} 310C${30 + i * 18} 150 ${160 + i * 15} 355 ${250 + i * 19} 145S${420 + i * 16} 20 ${620 + i * 18} -40`} stroke="currentColor" strokeWidth={i % 4 === 0 ? 1.3 : .6} opacity={.18 + i * .035} />)}
            <path d="M137 188L277 151L385 83L464 125" stroke="var(--sumi)" strokeWidth="1.2" />
            {[[137, 188], [277, 151], [385, 83], [464, 125]].map(([cx, cy]) => <g key={cx}><circle cx={cx} cy={cy} r="8" fill="var(--paper)" stroke="var(--sumi)" /><circle cx={cx} cy={cy} r="2" fill="var(--sumi)" /></g>)}
          </>
        ) : index % 3 === 1 ? (
          <>
            {[0, 1, 2, 3, 4].map((n) => <g key={n} transform={`translate(${175 + n * 34} ${42 + n * 12}) rotate(-12 100 90)`}><path d="M0 0H166V173H0Z" fill="var(--paper)" stroke="currentColor" strokeOpacity=".45" /><path d="M24 34H94M24 50H141M24 65H122M24 80H139M24 117H88M24 132H131" stroke="currentColor" strokeOpacity=".3" /><circle cx="132" cy="145" r="9" stroke="var(--sumi)" /></g>)}
          </>
        ) : (
          <>
            {[60, 100, 140, 180, 220].map((y) => <path key={y} d={`M60 ${y}H540`} stroke="currentColor" strokeOpacity=".09" />)}
            {Array.from({ length: 27 }, (_, i) => { const h = 25 + ((i * 37 + index * 11) % 121); return <path key={i} d={`M${82 + i * 17} ${160 - h / 2}v${h}`} stroke="currentColor" strokeWidth="7" opacity={.15 + (i % 5) * .14} />; })}
            <path d="M62 206C130 195 157 86 229 137S324 209 376 103S459 142 537 65" stroke="var(--sumi)" strokeWidth="1.5" />
          </>
        )}
        <path d="M22 37V22H37M563 22H578V37M22 243V258H37M563 258H578V243" stroke="currentColor" strokeOpacity=".25" />
      </svg>
      <span>FIG. {String(index + 1).padStart(2, "0")} / {index % 3 === 0 ? "CONNECTION" : index % 3 === 1 ? "KNOWLEDGE" : "SIGNAL"}</span>
    </div>
  );
}
