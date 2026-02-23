"use client";

import { useState } from "react";

interface Testimonial {
  name: string;
  bio: string;
  quote: string;
  hasAvatar: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Abelardo Garcia Jr.",
    bio: "",
    quote:
      "After loosing my younger brother to Neuroblastoma and having my mother battle Non-Hodgkin's Lymphoma, I believe that your technology is necessary and in my opinion will change the medical world and how people receive treatment.",
    hasAvatar: true,
  },
  {
    name: "Willie Abraham",
    bio: "I'm retired",
    quote: "I think AI is the way to find new cures.",
    hasAvatar: false,
  },
  {
    name: "Tom Rhodes",
    bio: "Investment Thesis: 14+1 Moonshot Technologies plus BIPOC founders and NIL (Name, Image, and Likeness) SaaS investments.",
    quote:
      "As a seasoned investor, what excites us about Biostate AI is: 1) On Thesis-BoA 14 disruptive moonshot technologies_Synthetic Biology and 2) The impressive group of investors, and partners within the Provider/Payvider ecosystem. To the Moon, Biostate AI!",
    hasAvatar: true,
  },
  {
    name: "George Hauser",
    bio: "I'm a civil engineering inspector looking to change careers and become a ESL Teacher and perhaps a Freelance Copywriter as well!",
    quote: "Artificial Intelligence in Healthcare has tremendous potential.",
    hasAvatar: false,
  },
  {
    name: "Jairzinho Reinaldo Augustin Tromp",
    bio: "Jair from Aruba, learning to invest.",
    quote:
      "The future of Medicine is in our hands, and AI can accelerate the process. I believe we should invest in our future now.",
    hasAvatar: true,
  },
  {
    name: "Lakeith Lee",
    bio: "I believe in innovation and capitalism",
    quote:
      "I believe in the innovation of AI we are still in the early cycle great things are going to happen....",
    hasAvatar: false,
  },
  {
    name: "Lance Bradley",
    bio: "Gentlemen, Bowling, Horse Racing, Investing, Movies, Nascar, R&B Music",
    quote: "I Believe and have Faith in the Company",
    hasAvatar: true,
  },
  {
    name: "Offe Lac",
    bio: "Am all about self love, help, and health.",
    quote:
      "The medical environment has been stock in the Stone Age for so long it's time we keep embracing change.",
    hasAvatar: false,
  },
  {
    name: "Stacey Lamers-Bagabo",
    bio: "",
    quote: "Exciting field",
    hasAvatar: false,
  },
  {
    name: "Dennis Lordy",
    bio: "My profession is a model manager for a English Cocker Spaniel",
    quote:
      "I have a great appreciation for your team with a goal of improving Healthcare for the community and wish you the best. Sincerely Dennis Lortie",
    hasAvatar: true,
  },
  {
    name: "Amanda Remark",
    bio: "Welcome to All in 1 Source – your ultimate destination for creating opportunities and exploring the world of shopping.",
    quote:
      "Hi I'm Amanda. I'm investing in AI cause the outcome of long term growth.",
    hasAvatar: false,
  },
  {
    name: "Iqbal Singh",
    bio: "I back innovative ventures that strategically leverage technology, data, and AI/ML to build scalable solutions and drive impact.",
    quote:
      "I have many years of experience leading software teams to deliver value using data and technology. I strongly believe in the power of data and AIML to save lives, improve healthspans, and deliver quality healthcare at a significantly reduced cost to consumers. I am excited about the Biostate AI team's mission and happy to be a part of it.",
    hasAvatar: false,
  },
];

function AvatarPlaceholder({ name }: { name: string }) {
  return (
    <div className="w-14 h-14 rounded-full bg-gray-100 flex-shrink-0 flex items-center justify-center">
      <svg
        className="w-7 h-7 text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    </div>
  );
}

function AvatarWithInitial({ name }: { name: string }) {
  return (
    <div className="w-14 h-14 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
      <span className="text-lg font-semibold text-gray-500">
        {name.charAt(0)}
      </span>
    </div>
  );
}

export default function InvestorTestimonials() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-8">What Investors Say</h2>
      <div className="space-y-6">
        {visible.map((t, i) => (
          <div key={i} className="flex gap-4 items-start">
            {t.hasAvatar ? (
              <AvatarWithInitial name={t.name} />
            ) : (
              <AvatarPlaceholder name={t.name} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="font-bold text-[16px]">{t.name}</p>
                <button className="text-gray-300 hover:text-gray-500 text-lg leading-none">
                  &middot;&middot;&middot;
                </button>
              </div>
              {t.bio && (
                <p className="text-[14px] text-gray-text mt-0.5 leading-snug">
                  {t.bio}
                </p>
              )}
              <div className="mt-2 bg-gray-50 border-l-2 border-gray-200 rounded-r-lg px-4 py-3">
                <p className="text-[15px] leading-relaxed text-dark">
                  {t.quote}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!showAll && testimonials.length > 6 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 px-6 py-2 border-2 border-brand text-brand font-semibold text-[14px] rounded-lg hover:bg-brand hover:text-white transition uppercase tracking-wider"
        >
          Show More
        </button>
      )}
    </section>
  );
}
