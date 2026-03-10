"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const phases = [
  { id: "section-intro", label: "Intro" },
  { id: "section-problem", label: "Problem" },
  { id: "section-ai", label: "AI" },
  { id: "section-team", label: "Team" },
];

export default function ReadingProgress() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phaseProgress, setPhaseProgress] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    // Find the visible parent container (PageTabs renders content twice: mobile + desktop)
    // We search within our own parent to find the correct sibling sections
    const parent = barRef.current?.parentElement;
    if (!parent) return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight;
    const triggerPoint = scrollY + viewportHeight * 0.35;

    // Get all phase elements within the same parent container
    const phaseData = phases.map((phase) => {
      const el = parent.querySelector<HTMLElement>(`#${phase.id}`);
      if (!el || el.offsetHeight === 0) return { top: 0, height: 0 };
      const rect = el.getBoundingClientRect();
      return {
        top: rect.top + scrollY,
        height: rect.height,
      };
    });

    // Determine active phase
    let currentIndex = 0;
    for (let i = phases.length - 1; i >= 0; i--) {
      if (phaseData[i].top > 0 && triggerPoint >= phaseData[i].top) {
        currentIndex = i;
        break;
      }
    }

    // Calculate progress within active phase
    const current = phaseData[currentIndex];
    if (current.height > 0) {
      const progressInPhase = (triggerPoint - current.top) / current.height;
      setPhaseProgress(Math.min(Math.max(progressInPhase, 0), 1));
    }

    setActiveIndex(currentIndex);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Overall progress: completed phases + current phase progress
  const overallProgress = (activeIndex + phaseProgress) / phases.length;

  // Current section percentage
  const currentPercent = Math.round(phaseProgress * 100);

  // Click handler: find visible section within parent
  const scrollToPhase = (phaseId: string) => {
    const parent = barRef.current?.parentElement;
    if (!parent) return;
    const el = parent.querySelector<HTMLElement>(`#${phaseId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={barRef} className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 py-4 -mx-1 px-1 mb-8">
      {/* Phase labels row */}
      <div className="flex items-center justify-between mb-3">
        {phases.map((phase, i) => {
          const isCompleted = i < activeIndex;
          const isActive = i === activeIndex;
          const phasePct =
            isCompleted ? 100 : isActive ? currentPercent : 0;

          return (
            <button
              key={phase.id}
              onClick={() => scrollToPhase(phase.id)}
              className={`flex items-center gap-2 text-[14px] font-semibold transition-colors cursor-pointer ${
                isActive
                  ? "text-[#3ECAB1] font-bold"
                  : isCompleted
                  ? "text-[#3ECAB1]"
                  : "text-gray-400"
              }`}
            >
              {/* Circle indicator */}
              <span
                className={`w-4 h-4 rounded-full border-[2.5px] transition-all flex items-center justify-center ${
                  isActive
                    ? "bg-[#3ECAB1] border-[#3ECAB1] scale-110"
                    : isCompleted
                    ? "bg-[#3ECAB1] border-[#3ECAB1]"
                    : "bg-white border-gray-300"
                }`}
              >
                {isCompleted && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              {/* Label + percentage */}
              <span>{phase.label}</span>
              {(isActive || isCompleted) && (
                <span className={`text-[12px] font-normal ${isActive ? "text-[#3ECAB1]/70" : "text-[#3ECAB1]/50"}`}>
                  {phasePct}%
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Progress bar - taller */}
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#3ECAB1] to-[#34d9b8] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${overallProgress * 100}%` }}
        />
      </div>
    </div>
  );
}
