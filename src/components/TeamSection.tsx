"use client";

import { useState } from "react";

/* ─── Team member data ─── */
const TEAM_MEMBERS = [
  {
    name: "Dave Zhang",
    role: "Co-Founder/CEO",
    bio: "Presidential award-winning bioengineering professor with 60+ top publications and 40+ patents. Previously co-founder & CEO of innovative cancer diagnostics company that raised over $100M+ from Sequoia and AstraZeneca and reached $20M+/yr revenue.",
  },
  {
    name: "Jeremy Sobotta",
    role: "CFO",
    bio: "Former CFO, Perimeter Medical Imaging AI (NASDAQ: PINK). Led $4B+ in M&A capital across biotech & medtech. 15+ years senior finance leadership at Stryker & Padagis.",
  },
  {
    name: "Kutapa Muthanna",
    role: "CEO, Bayosthiti.AI (India Subsidiary)",
    bio: "Former Director at KPMG; 20 years of finance and client relations leadership at KPMG and Fidelity Investments. Led global client tax and technology services.",
  },
  {
    name: "Zoe Zheng",
    role: "CEO, Baiaosheng (China Subsidiary)",
    bio: "Former venture capitalist at Matrix Partners China, Gaorong and other top VC funds, leading investments in technology and AI. Brings deep experience in strategic partnerships across the biotech ecosystem.",
  },
  {
    name: "Mohammad Alkheilewi",
    role: "CEO, Biostate AI MENA (KSA Subsidiary)",
    bio: "Former Managing Director at Eurofins Clinical Laboratories in Saudi Arabia with prior leadership roles at the Saudi Arabia Ministry of Health. Led major public-private partnerships for national health programs. Brings broad expertise in clinical operation.",
  },
];

const INITIAL_COUNT = 3;

/* ─── Team member card ─── */
function TeamMember({
  name,
  role,
  bio,
}: {
  name: string;
  role: string;
  bio: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-20 h-20 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center border-3 border-brand">
        <span className="text-xs text-gray-400 text-center">
          {name.split(" ")[0]}
        </span>
      </div>
      <div>
        <p className="font-bold text-lg">{name}</p>
        <p className="text-sm text-brand font-medium">{role}</p>
        <p className="text-[15px] text-gray-text mt-1 leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  const [expanded, setExpanded] = useState(false);

  const visibleMembers = expanded
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.slice(0, INITIAL_COUNT);

  const hasMore = TEAM_MEMBERS.length > INITIAL_COUNT;

  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <div className="space-y-6">
        {visibleMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
          />
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="w-full flex items-center justify-center gap-1.5 mt-6 pt-4 border-t border-gray-200 text-sm text-gray-500 hover:text-gray-700 transition cursor-pointer"
        >
          <span>{expanded ? "Show Less" : "Show More"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </section>
  );
}
