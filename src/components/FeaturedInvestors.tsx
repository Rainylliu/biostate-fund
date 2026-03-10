"use client";

import { useState } from "react";
import Image from "next/image";

interface Investor {
  name: string;
  notable?: boolean;
  title?: string;
  url?: string;
  thumbnail?: string;
  avatar?: string;
}

const otherInvestors: Investor[] = [
  { name: "Gaingels", notable: true, url: "https://boardprogram.gaingels.com/" },
  { name: "Mana Ventures", notable: true, url: "https://www.manaventures.vc/" },
  { name: "Accel", url: "https://www.accel.com/", thumbnail: "/images/Accelweb.jpg" },
  { name: "Dario Amodei", title: "Founder & CEO of Anthropic", url: "https://www.anthropic.com/", avatar: "/images/Dario.png" },
  { name: "Caltech Fund", url: "https://fund.caltech.edu/", thumbnail: "/images/caltechweb.jpg" },
  { name: "Matter Venture Partners", url: "https://www.mattervp.com/", thumbnail: "/images/matterweb.jpg" },
  { name: "Vision Plus Capital", url: "https://visionpluscapital.com/en/" },
  { name: "Emily Leproust", title: "CEO of Twist Biosciences", url: "https://www.twistbioscience.com/", avatar: "/images/emily.png" },
  { name: "InfoEdge Ventures", url: "https://www.infoedgeventures.in/" },
  { name: "Joris Poort", title: "Founder & CEO of Rescale", url: "https://rescale.com/", avatar: "/images/Joris.png" },
  { name: "Catapult Ventures" },
  { name: "Prasad Chintamaneni", title: "Board of New Mountain Capital", url: "https://www.newmountaincapital.com/", avatar: "/images/Prasad.png" },
  { name: "The White Rabbit Advisors" },
  { name: "MV Funds" },
  { name: "Nebula Advisors" },
  { name: "Arpan Sheth", title: "Senior Partner at Bain & Company", url: "https://www.bain.com/", avatar: "/images/Arpan.png" },
  { name: "Bob Zhou" },
  { name: "Wendy Connors" },
  { name: "Jon Dedon" },
];

function InvestorName({ inv }: { inv: Investor }) {
  const [showPopup, setShowPopup] = useState(false);

  if (!inv.url) {
    return <span className="font-semibold">{inv.name}</span>;
  }

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <a
        href={inv.url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold underline decoration-dotted underline-offset-2 hover:text-[#3ECAB1] transition cursor-pointer"
      >
        {inv.name}
      </a>
      {showPopup && (
        <div className="absolute bottom-full left-0 mb-3 z-50">
          {inv.avatar ? (
            /* Profile card popup (Wefunder style) */
            <a
              href={inv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[300px] bg-white rounded-xl shadow-2xl border border-gray-200 p-5"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={inv.avatar}
                alt={inv.name}
                className="w-16 h-16 rounded-full object-cover border border-gray-200 mb-4"
              />
              <p className="font-bold text-lg text-[#16263d]">{inv.name}</p>
              {inv.title && (
                <p className="text-[13px] text-gray-500 mt-0.5">{inv.title}</p>
              )}
            </a>
          ) : (
            /* Website preview popup */
            <a
              href={inv.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-[300px] bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden"
            >
              {inv.thumbnail ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={inv.thumbnail}
                  alt={`${inv.name} website preview`}
                  className="w-[300px] h-[188px] object-cover object-top bg-gray-50"
                />
              ) : (
                <div className="relative w-[300px] h-[188px] overflow-hidden bg-gray-50">
                  <iframe
                    src={inv.url}
                    title={`${inv.name} website preview`}
                    className="absolute top-0 left-0 w-[1280px] h-[800px] border-0 pointer-events-none"
                    style={{ transform: "scale(0.234)", transformOrigin: "top left" }}
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
              )}
              <div className="px-4 py-3 border-t border-gray-100">
                <p className="text-[13px] font-semibold text-[#16263d]">{inv.name}</p>
                <p className="text-[11px] text-gray-400 truncate mt-0.5">{inv.url}</p>
              </div>
            </a>
          )}
        </div>
      )}
    </span>
  );
}

export default function FeaturedInvestors() {
  return (
    <section className="mb-14">
      <h2 className="text-[1.875rem] font-medium leading-[2.25rem] text-[#16263d] mt-16 mb-8">
        Featured Investors
      </h2>

      {/* Featured investor card */}
      <div className="border border-gray-border rounded-2xl p-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Michael Schnall-Levin.jpg"
              alt="Michael Schnall-Levin"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="font-bold text-lg text-[#16263d]">Michael Schnall-Levin</p>
            </div>
          </div>
          <p className="text-[15px] font-semibold text-[#16263d] mt-2 sm:mt-0">
            Invested $35,000
          </p>
        </div>

        <p className="text-[15px] font-semibold mb-4">
          CTO of{" "}
          <a
            href="https://www.10xgenomics.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3ECAB1] hover:text-[#16263d] transition"
          >
            10x Genomics
          </a>
          {" "}(NASDAQ: TXG)
        </p>

        <hr className="border-gray-border mb-4" />

        <p className="text-[16px] leading-[1.7] text-[#16263d]">
          &ldquo;I have known Dave Zhang for a number of years and am extremely impressed
          by his intelligence, drive and creativity. I believe that Dave and the rest of
          the Biostate team have a unique approach to applying artificial intelligence to
          large-scale molecular data and early disease detection, and think that the
          company has tremendous potential.&rdquo;
        </p>
      </div>

      {/* Other investors */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-row shrink-0 space-x-[-10px]">
          {[
            { src: "/images/Gaingels.png", alt: "Gaingels" },
            { src: "/images/Mana Ventures.png", alt: "Mana Ventures" },
            { src: "/images/Accel.jpg", alt: "Accel" },
            { src: "/images/Dario.png", alt: "Dario Amodei" },
            { src: "/images/Caltech.jpg", alt: "Caltech Fund" },
            { src: "/images/Matter.jpg", alt: "Matter Venture Partners" },
          ].map((img) => (
            <div key={img.alt} className="w-8 h-8 rounded-full overflow-hidden border border-gray-border bg-white">
              <Image src={img.src} alt={img.alt} width={32} height={32} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-[14px] leading-relaxed text-[#16263d]">
          Other investors include{" "}
          {otherInvestors.map((inv, i) => (
            <span key={inv.name}>
              <InvestorName inv={inv} />
              {inv.notable && (
                <span className="inline-block ml-1 px-1.5 py-0.5 bg-[#e8e8ff] text-[#6366f1] text-[11px] font-semibold rounded">
                  Notable
                </span>
              )}
              {inv.title && (
                <span className="text-[#16263d]"> ({inv.title})</span>
              )}
              {i < otherInvestors.length - 1 && ", "}
            </span>
          ))}
          {" "}& 78 more
        </div>
      </div>
    </section>
  );
}
