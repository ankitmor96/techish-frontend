/** Animated mono-type marquee band. Duplicated track for a seamless loop. */
export function Marquee({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="tk-marquee" aria-hidden="true">
      <div className="tk-marquee-track">
        {doubled.map((item, i) => (
          <span key={i}>
            {item} <em>◆</em>
          </span>
        ))}
      </div>
    </div>
  );
}
