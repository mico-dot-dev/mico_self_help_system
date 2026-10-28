// src/hooks/use-element-width.ts
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Tracks the rendered width of an element.
 * Returns a ref to attach and the current width (0 until first measured).
 */
export function useElementWidth<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Measure immediately so we don't wait for the first observer callback.
    setWidth(Math.floor(el.getBoundingClientRect().width));

    let frame = 0;
    const observer = new ResizeObserver(([entry]) => {
      // Coalesce bursts (sidebar animation, window drag) into one update per frame.
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        // Floor to avoid sub-pixel width changes triggering needless re-renders.
        setWidth(Math.floor(entry.contentRect.width));
      });
    });

    observer.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  return { ref, width };
}
