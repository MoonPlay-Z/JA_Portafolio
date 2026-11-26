import { useEffect, useState } from "react";

export function Typewriter({
  text,
  speed = 55,
  className = "",
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(text);
      return;
    }
    setShown("");
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, speed]);
  return (
    <span className={className} aria-label={text}>
      <span aria-hidden="true">{shown}</span>
      <span aria-hidden="true" className="caret">
        ▍
      </span>
    </span>
  );
}

export function CodeTitle({ fn, text, comment }: { fn: string; text: string; comment?: string }) {
  return (
    <header className="mb-8 min-w-0 sm:mb-10">
      {comment && (
        <p className="break-words font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
          // {comment}
        </p>
      )}
      <h1 className="mt-2 break-words font-mono text-[clamp(1.65rem,7vw,3rem)] font-bold leading-[1.18] [overflow-wrap:anywhere]">
        <span className="text-code-keyword">const </span>
        <span className="text-code-fn">{fn}</span>
        <span className="text-muted-foreground"> = </span>
        <Typewriter text={`"${text}"`} className="text-primary" />
      </h1>
    </header>
  );
}
