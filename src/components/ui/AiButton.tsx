import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { gsap } from "gsap";

export const AIButton = () => {
  const waveRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Wave animation (loop horizontal drift)
    gsap.to(waveRef.current, {
      x: "-50%",
      duration: 6,
      ease: "linear",
      repeat: -1,
    });

    // Star rotation every 2s
    gsap.to(starRef.current, {
      rotate: 360,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      transformOrigin: "center center",
    });
  }, []);

  return (
    <Button
      variant="outline"
      className="relative overflow-hidden w-fit px-6 py-5 group border-primary/40"
    >
      {/* 🌊 Wave background */}
      <div
        ref={waveRef}
        className="absolute inset-0 flex w-[200%] opacity-30"
      >
        <div className="w-1/2 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 blur-xl" />
        <div className="w-1/2 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 blur-xl" />
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 flex items-center gap-3">
        {/* Star Icon */}
        <svg
          ref={starRef}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        >
          <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
        </svg>

        <span className="font-medium tracking-wide">
          En savoir plus
        </span>
      </div>
    </Button>
  );
};