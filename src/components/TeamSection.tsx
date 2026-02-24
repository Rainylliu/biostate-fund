"use client";

import { useState } from "react";

const initialMembers = [
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
];

const hiddenMembers = [
  {
    name: "Zoe Zheng",
    role: "CEO, Baiaosheng (China Subsidiary)",
    bio: "Former venture capitalist at Matrix Partners China, Gaorong and other top VC funds, leading investments in technology and AI. Brings deep experience in strategic partnerships across the biotech ecosystem.",
  },
  {
    name: "Mohammad Alkheilewi",
    role: "CEO, Biostate AI MENA (KSA Subsidiary)",
    bio: "Former Managing Director at Eurofins Clinical Laboratories in Saudi Arabia with prior leadership roles at the Saudi Arabia Ministry of Health. Led major public-private partnerships for national health programs. Brings broad expertise in clinical operations.",
  },
];

function TeamMemberCard({
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

export default function TeamSection() {
  const [showAll, setShowAll] = useState(false);
  const members = showAll
    ? [...initialMembers, ...hiddenMembers]
    : initialMembers;

  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-6">Team</h2>
      <div className="space-y-6">
        {members.map((m) => (
          <TeamMemberCard key={m.name} name={m.name} role={m.role} bio={m.bio} />
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
