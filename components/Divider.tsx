/* Separador curvo entre secciones, en vez de bloques de color pegados. */
export function Divider({ fill = "var(--bg-2)" }: { fill?: string }) {
  return (
    <div aria-hidden className="relative -mt-px" style={{ color: fill }}>
      <svg
        className="divider-wave"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0,32 C240,80 480,0 720,24 C960,48 1200,88 1440,40 L1440,90 L0,90 Z" />
      </svg>
    </div>
  );
}
