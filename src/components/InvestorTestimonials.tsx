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
      "As an seasoned investor, what excites us about Biostate AI is: 1) On Thesis-BoA 14 disruptive moonshot technologies_Synthetic Biology and 2) The impressive group of investors, and partners within the Provider/Payvider ecosystem. To the Moon, Biostate AI!!",
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
  {
    name: "Prakash Bhambhani",
    bio: "employee in dubai in private firm",
    quote: "founders and subject",
    hasAvatar: false,
  },
  {
    name: "Xi Chen",
    bio: "",
    quote:
      "The combo of biology and AI will be a total game-changer for humanity!",
    hasAvatar: false,
  },
  {
    name: "Wen Liu",
    bio: "",
    quote: "The Biostate AI seems growing in a right direction.",
    hasAvatar: false,
  },
  {
    name: "Fachang Zhang",
    bio: "",
    quote: "Happy New Year! May all things go as you wish.",
    hasAvatar: false,
  },
  {
    name: "Yihe Chang",
    bio: "An aspiring Economist & Organist. Currently interning at the World Bank.",
    quote: "Cus Dave and Ashwin are the BEST!",
    hasAvatar: false,
  },
  {
    name: "Jason Cui",
    bio: "Founder/investor",
    quote: "RSI '13 alum here. Excited to be a part of a journey!!",
    hasAvatar: false,
  },
  {
    name: "Rachel Schiff",
    bio: "RSI alum, Chief Product Officer at IntelyCare",
    quote: "RSI alum",
    hasAvatar: false,
  },
  {
    name: "Satyendra Kumar",
    bio: "AI Platform Architect specialize in developing advanced systems that enable real-time insights and drive innovation in health sciences.",
    quote:
      "I am very excited about the vision of BioState which is trying to develop AI that can predict diseases before they emerge and tailor treatments to individuals' genetic makeup. Also, I know Timothy Kassis as I worked with him in Matterworks Inc.",
    hasAvatar: false,
  },
  {
    name: "Kandasamy Ravi",
    bio: "",
    quote: "Congrats David and Ashwin on Biostate AI.",
    hasAvatar: false,
  },
  {
    name: "Steve Flanders",
    bio: "I am retired. I worked in Human Services managing and supporting adults with disabilities to be able to live as independent as possible",
    quote:
      "I am investing in something that I totally support. Health Services and finding cures for hundreds of diseases is a awesome goal I support",
    hasAvatar: false,
  },
  {
    name: "Ernest J King",
    bio: "Combat vet and now retired",
    quote:
      "To insure my financial future with a company I believe has a future",
    hasAvatar: false,
  },
  {
    name: "Thomas Kafsack",
    bio: "",
    quote: "Sounds very good, you need money, long hours and good luck",
    hasAvatar: false,
  },
  {
    name: "Richard Higgins",
    bio: "",
    quote: "Great investment in humanity!!!",
    hasAvatar: false,
  },
  {
    name: "Shivram Sundaram",
    bio: "IAM Architect focusing on consulting in Identity & Access Management, Governance & Compliance",
    quote: "Excited about AI and what your product has to offer",
    hasAvatar: false,
  },
  {
    name: "Fay Cuson",
    bio: "I'm retired.",
    quote: "I believe Ai will be very usefull in the future.",
    hasAvatar: false,
  },
  {
    name: "Kristyn Ream",
    bio: "Career national security analyst and strategist; Certified executive coach; Tech and innovation strategist",
    quote:
      "I support tech that can enhance our health and wellbeing and make it accessible. This has the potential for great impact on healthcare.",
    hasAvatar: false,
  },
  {
    name: "P KRUEB",
    bio: "I'm a medical cardiac technician. Living in New Orleans metro area my entire life.",
    quote:
      "I work in the medical field, I believe in what you al are doing and think it's a great step forward in the industry. Working for over a decade in the emergency room and seeing and hearing stories, this would be monumental moving forward.",
    hasAvatar: false,
  },
  {
    name: "Alissa Carpio",
    bio: "Founder of AURORA and creator of Rory, an AI-powered platform redesigning rental housing infrastructure for the next generation.",
    quote:
      "Hi Dave and Ashwin — I just invested in Biostate because I'm genuinely excited about what you're building. Your mission and model strike that rare balance of technical innovation and practical, high-impact delivery. It's clear you're solving a real problem with urgency and clarity — and that's the kind of founder energy I want to be behind. I'm also a founder — building AURORA, a tech company redesigning rental housing infrastructure for the next generation. Wishing you continued momentum. I'll be watching (and rooting for) your journey! Warmly, Alissa Carpio",
    hasAvatar: false,
  },
  {
    name: "Jesus Adolfo Ortega Turrubiates",
    bio: "I would like to be an entrepreneur and help the community, so entrepreneurs inspire me.",
    quote: "I believe in the potential of AI for the medical industry.",
    hasAvatar: false,
  },
  {
    name: "Francis R Rinault",
    bio: "New investor looking for security in the future",
    quote: "I believe it has a future",
    hasAvatar: false,
  },
  {
    name: "Mohammed Harris",
    bio: "Multiomics enthusiast.",
    quote:
      "I'm in the multiomics space and you have a solid team. This has been on my mind and it seems like you are creating digital biomarker twins. I enjoy exploratory biomarkers research, so I wish you guys best of luck!",
    hasAvatar: false,
  },
  {
    name: "Tammy Morris",
    bio: "account representative then moved to sales sold more than anyone else each month",
    quote: "I have an autistic grandson. This is for him.",
    hasAvatar: false,
  },
  {
    name: "Mai Nguyen",
    bio: "",
    quote:
      "My name is Mai Nguyen and I just wanted to make a little bit of money for my retirement…. Hahaha",
    hasAvatar: false,
  },
  {
    name: "Naga Sanka",
    bio: "I am an AI/ML Engineer working in an automotive industry.",
    quote: "This is to encourage the idea and support Dave and Ashwin.",
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
  const visible = showAll ? testimonials : testimonials.slice(0, 8);

  return (
    <section id="investor-testimonials" className="mb-14">
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
      {!showAll && testimonials.length > 8 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-6 px-5 py-2 border border-gray-border rounded-lg text-[14px] font-medium text-dark hover:bg-gray-50 transition"
        >
          Show more
        </button>
      )}
    </section>
  );
}
