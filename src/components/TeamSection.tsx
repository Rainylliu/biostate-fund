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
    name: "Ashwin Gopinath",
    role: "Co-Founder/CTO",
    bio: "Former MIT professor of Mechanical Engineering; co-founder of Palamedrix (acquired). 45+ peer-reviewed publications in Nature and Science. Co-developed the Reflexion method for enhancing LLM reasoning, published at NeurIPS 2023.",
  },
  {
    name: "Timothy Kassis",
    role: "Head of AI",
    bio: "Previously led AI initiatives at Matterworks; former Lead Instructor at MIT. Expert in AI development specializing in diagnostic accuracy and medical data personalization.",
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
