"use client";

import { useState } from "react";
import Image from "next/image";

/* ─── Team member card ─── */
function TeamMember({
  name,
  role,
  bio,
  avatar,
}: {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <Image
        src={avatar}
        alt={name}
        width={80}
        height={80}
        className="w-20 h-20 rounded-full flex-shrink-0 border-3 border-brand object-cover"
      />
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
    avatar: "/images/dave-zhang.svg",
  },
  {
    name: "Jeremy Sobotta",
    role: "CFO",
    bio: "Former CFO, Perimeter Medical Imaging AI (NASDAQ: PINK). Led $4B+ in M&A capital across biotech & medtech. 15+ years senior finance leadership at Stryker & Padagis.",
    avatar: "/images/jeremy-sobotta.svg",
  },
  {
    name: "Kutapa Muthanna",
    role: "CEO, Bayosthiti.AI (India Subsidiary)",
    bio: "Former Director at KPMG; 20 years of finance and client relations leadership at KPMG and Fidelity Investments. Led global client tax and technology services.",
    avatar: "/images/kutapa-muthanna.svg",
  },
  {
    name: "Zoe Zheng",
    role: "VP of Operations",
    bio: "Experienced operations leader with a strong background in scaling biotech and healthcare companies across global markets.",
    avatar: "/images/zoe-zheng.svg",
  },
  {
    name: "Mohammad Alkheilewi",
    role: "VP of Business Development, Middle East",
    bio: "Strategic business development executive with deep expertise in healthcare partnerships across the Middle East region.",
    avatar: "/images/mohammad-alkheilewi.svg",
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
            avatar={member.avatar}
          />
        ))}
      </div>
      {teamMembers.length > INITIAL_COUNT && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 px-5 py-2 border border-gray-border rounded-lg text-[14px] font-medium text-dark hover:bg-gray-50 transition"
        >
          {expanded ? "Show Less" : `Show More (${teamMembers.length - INITIAL_COUNT})`}
        </button>
      )}
    </section>
  );
}
