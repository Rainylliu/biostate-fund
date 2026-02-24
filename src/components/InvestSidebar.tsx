"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function InvestSidebar() {
  const [amount, setAmount] = useState("");
  const [termsOpen, setTermsOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [perksExpanded, setPerksExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const perks = [
    { amount: 200, label: "$200", desc: "Biostate T-shirt" },
    { amount: 500, label: "$500", desc: "Biostate Pio mascot (2026)" },
    { amount: 1000, label: "$1,000", desc: "Pio mascot + T-shirt + Hoodie" },
    { amount: 5000, label: "$5,000", desc: "Premium Biostate Swag Pack" },
    { amount: 10000, label: "$10,000", desc: "Personal RNAseq & DNAseq Test + Swag Pack" },
    { amount: 35000, label: "$35,000", desc: "VIP Lab Tour + Full Swag Pack" },
    { amount: 100000, label: "$100,000", desc: "Advisory Dinner with CEO + VIP Package" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setPopupOpen(false);
        setPerksExpanded(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    if (!raw) { setAmount(""); return; }
    setAmount(Number(raw).toLocaleString());
  }

  function selectPerk(val: number) {
    setAmount(val.toLocaleString());
    setPopupOpen(false);
    setPerksExpanded(false);
  }

  const raised = 505100;
  const goal = 600000;
  const pct = Math.min((raised / goal) * 100, 100);

  return (
    <div className="invest-sidebar bg-white rounded-2xl border border-gray-border p-5 shadow-sm">
      {/* Progress bar */}
      <div className="progress-bar mb-4">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Amount raised */}
      <div className="mb-4">
        <p className="text-[36px] font-medium text-dark leading-tight tracking-tight">
          ${raised.toLocaleString()}
        </p>
        <p className="text-[14px] text-gray-text mt-1">of a ${goal.toLocaleString()} goal</p>
      </div>

      {/* Invest section */}
      <div className="mb-3" ref={wrapperRef}>
        <p className="text-[14px] font-bold text-dark mb-1.5 uppercase tracking-wide">Invest</p>
        <div className="relative">
          <div
            className="flex items-center border-2 border-gray-border rounded-xl px-3 py-2.5 cursor-pointer bg-white hover:border-gray-400 transition"
            onClick={() => setPopupOpen(true)}
          >
            <span className="text-gray-400 text-[18px] font-light mr-1 opacity-85">$</span>
            <input
              type="text"
              inputMode="numeric"
              placeholder="0"
              value={amount}
              onChange={handleAmountChange}
              className="flex-1 text-[18px] focus:outline-none bg-transparent text-right tabular-nums text-dark"
            />
          </div>

          {/* Perks popup - left side */}
          {popupOpen && (
            <div className="absolute top-[calc(100%+6px)] right-full mr-2 w-[320px] bg-[#f9fafb] rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.14)] z-50">
              <div className="flex items-center gap-1.5 mb-3">
                <Image src="/images/gift-box.svg" alt="gift" width={20} height={20} />
                <span className="text-[16px] font-semibold text-dark">Earn perks when you invest</span>
              </div>
              {(perksExpanded ? perks : perks.slice(0, 5)).map((perk) => (
                <div
                  key={perk.amount}
                  className="mb-2 cursor-pointer group"
                  onClick={() => selectPerk(perk.amount)}
                >
                  <span className="inline-block bg-[#2e2e2e] group-hover:bg-brand text-white font-semibold px-2.5 py-1 rounded-md text-[13px] transition">
                    {perk.label}
                  </span>
                  <p className="text-[14px] text-[#344054] mt-1">{perk.desc}</p>
                </div>
              ))}
              {!perksExpanded && (
                <button
                  type="button"
                  onClick={() => setPerksExpanded(true)}
                  className="mt-1 text-[13px] font-semibold text-brand hover:text-brand-dark transition cursor-pointer"
                >
                  Show more
                </button>
              )}
            </div>
          )}
        </div>
        <p className="text-xs text-gray-text mt-1">min $100</p>
      </div>

      {/* Invest button - black like Wefunder */}
      <a
        href="https://wefunder.com/biostateai/invest?invite_code=onjSjCCss8"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && typeof window.fbq === "function") {
            window.fbq("trackCustom", "InvestClick");
          }
        }}
        className="block w-full bg-dark text-white text-center font-bold py-3 rounded-lg hover:bg-gray-800 transition text-[14px] tracking-wide"
      >
        INVEST
      </a>

      {/* Follow on Wefunder button */}
      <a
        href="https://wefunder.com/biostateai/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full mt-3 border-2 border-dark text-dark text-center font-bold py-3 rounded-lg hover:bg-gray-50 transition text-[14px] tracking-wide flex items-center justify-center gap-2"
      >
        FOLLOW ON WEFUNDER
      </a>

      {/* Investment Terms */}
      <div className="mt-4 pt-4 border-t border-gray-border">
        <button
          type="button"
          onClick={() => setTermsOpen(!termsOpen)}
          className="flex items-center justify-between w-full text-left cursor-pointer"
        >
          <p className="text-[14px] font-medium text-gray-text uppercase tracking-wider">
            Investment Terms
          </p>
          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${termsOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div className="mt-3">
          <p className="text-[14px] font-bold">Future Equity</p>
          <p className="text-[14px] text-gray-text mt-1">
            <span className="font-bold text-dark">$100M</span> valuation cap{" "}
            <span className="font-bold text-dark">20%</span> discount
          </p>
          <p className="text-[14px] text-gray-text mt-2">
            <Image src="/images/gift-box.svg" alt="gift" width={16} height={16} className="inline-block mr-1 align-text-bottom" />
            <span className="font-semibold">Investor Perks:</span> $200, $500, $1K, $5K, $10K, $35K, $100K
          </p>
        </div>
        {termsOpen && (
          <p className="text-[14px] text-gray-text mt-3 leading-relaxed">
            A Future Equity Agreement (SAFE) gives you the right to future shares
            in the company. If you invest, you&apos;re betting the company will be
            worth more than $100M eventually.
          </p>
        )}
      </div>

      {/* Location */}
      <div className="mt-3 pt-3 border-t border-gray-border text-[14px] text-gray-text">
        <p>biostate.ai &middot; Houston, TX</p>
      </div>
    </div>
  );
}
