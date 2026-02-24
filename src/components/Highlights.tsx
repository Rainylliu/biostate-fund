"use client";

import { useState } from "react";

const highlights = [
  "$20M raised from leading VCs including Accel, Matter Venture Partners, InfoEdge Ventures, Vision Plus, and Caltech Fund.",
  "Repeat Founder: previously built $100M+ funded genomic platform with $21M revenue (2022).",
  "20+ clinical collaborations with top hospitals including Harvard Med School, MD Anderson, Cornell… Accessing 100,000+ patient samples worldwide.",
  "Active clinical research programs in Leukemia, Melanoma, Lung cancer, Diabetes, Lupus, Multiple Sclerosis, and Coronary Artery Disease",
  "15+ Patented technology to reduce RNA & DNA testing cost by 80%+",
  "Our AI scientist platform (K-Dense) outperforms ChatGPT-5, Claude, Gemini by 60%+.",
  "Revolutionizing Precision medicine and Multi-omics, $100B+ markets.",
  "Headquarter in Houston and Palo Alto. Subsidiaries in India, China, and Saudi Arabia",
];

export default function Highlights() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? highlights : highlights.slice(0, 4);

  return (
    <section className="mb-14">
      <h2 className="text-[1.875rem] font-medium leading-[2.25rem] text-[#16263d] mt-16 mb-8">Highlights</h2>
      <div className="space-y-5">
        {visible.map((text, i) => (
          <div key={i} className="flex gap-4 items-start">
            <div className="highlight-num">{i + 1}</div>
            <p className="text-base leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      {!showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-5 px-5 py-2 border border-gray-border rounded-lg text-[14px] font-medium text-dark hover:bg-gray-50 transition"
        >
          Show more
        </button>
      )}
    </section>
  );
}
