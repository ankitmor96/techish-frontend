import { useEffect, useRef, useState } from "react";

export interface TerminalLine {
  /** Rendered segments; t picks the color class for each chunk */
  segments: Array<{ t: "plain" | "white" | "accent"; s: string }>;
}

interface TerminalWindowProps {
  title: string;
  lines: TerminalLine[];
  /** Delay before the first line appears (ms) */
  startDelay?: number;
  /** Delay between line reveals (ms) */
  lineDelay?: number;
}

const SEG_CLASS: Record<TerminalLine["segments"][number]["t"], string> = {
  plain: "",
  white: "w",
  accent: "c",
};

/** Terminal window whose lines type on one after another once scrolled into view. */
export function TerminalWindow({
  title,
  lines,
  startDelay = 250,
  lineDelay = 420,
}: TerminalWindowProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const revealNext = (index: number) => {
      if (cancelled) return;
      setVisibleCount(index);
      if (index < lines.length) {
        timer = setTimeout(
          () => revealNext(index + 1),
          index === 0 ? startDelay : lineDelay,
        );
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => revealNext(1), startDelay);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);

    return () => {
      cancelled = true;
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [lines.length, startDelay, lineDelay]);

  return (
    <div className="tk-window" ref={rootRef}>
      <div className="tk-window-bar">
        <span className="tk-dot r" />
        <span className="tk-dot y" />
        <span className="tk-dot g" />
        <span>{title}</span>
      </div>
      <div className="tk-window-body">
        {lines.slice(0, visibleCount).map((line, i) => (
          <div key={i}>
            {line.segments.map((seg, j) => (
              <span key={j} className={SEG_CLASS[seg.t]}>
                {seg.s}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
