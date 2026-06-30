"use client";

import { useEffect, useRef } from "react";
import Scrollbar from "smooth-scrollbar";

type Props = {
  children: React.ReactNode;
};

export default function SmoothScrollbarProvider({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scrollbar = Scrollbar.init(containerRef.current);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        height: "calc(100vh - var(--headerHeight))",
      }}
    >
      {children}
    </div>
  );
}
