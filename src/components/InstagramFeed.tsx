"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function InstagramFeed() {
  useEffect(() => {
    // Reinitialize Elfsight app after component mounts
    if (typeof window !== "undefined" && (window as any).Elfsight) {
      (window as any).Elfsight.reload();
    }
  }, []);

  return (
    <div className="w-full h-full">
      <Script
        src="https://elfsightcdn.com/platform.js"
        async
        strategy="afterInteractive"
        onLoad={() => {
          // Reinitialize after script loads
          if (typeof window !== "undefined" && (window as any).Elfsight) {
            (window as any).Elfsight.reload();
          }
        }}
      />
      <div
        className="elfsight-app-c79262e8-b0d1-495e-811c-7700bc472df9 w-full"
        data-elfsight-app-lazy
      />
    </div>
  );
}
