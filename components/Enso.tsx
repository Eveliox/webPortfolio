type EnsoProps = {
  className?: string;
  size?: number;
};

export function Enso({ className, size = 120 }: EnsoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Enso, a hand-drawn circular brand mark"
      className={className}
    >
      <defs>
        <filter id="enso-ink" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            seed="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="1.4" />
        </filter>
      </defs>
      <path
        d="M 95 38
           C 110 58, 100 96, 70 102
           C 38 108, 16 86, 18 58
           C 20 32, 48 14, 78 22
           C 92 26, 100 36, 100 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
        filter="url(#enso-ink)"
      />
    </svg>
  );
}
