"use client";

import { useState } from "react";

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
        <p className="text-[15px] text-gray-text mt-1 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

const teamMembers = [
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
    role: "VP of Operations",
    bio: "Experienced operations leader with a strong background in scaling biotech and healthcare companies across global markets.",
  },
  {
    name: "Mohammad Alkheilewi",
    role: "VP of Business Development, Middle East",
    bio: "Strategic business development executive with deep expertise in healthcare partnerships across the Middle East region.",
  },
];

const INITIAL_COUNT = 3;

export default function TeamSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleMembers = expanded ? teamMembers : teamMembers.slice(0, INITIAL_COUNT);

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
      {teamMembers.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-6 text-brand font-semibold text-sm hover:underline cursor-pointer"
        >
          {expanded ? "Show Less" : `Show More (${teamMembers.length - INITIAL_COUNT})`}
        </button>
      )}
    </section>
  );
}
