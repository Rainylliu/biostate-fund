"use client";

import { useState } from "react";
import Image from "next/image";

export default function InvestSidebar() {
  const [amount, setAmount] = useState("");
  const [termsOpen, setTermsOpen] = useState(false);
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
        <p className="text-[32px] font-medium text-dark leading-tight tracking-tight">
          ${raised.toLocaleString()}
        </p>
        <p className="text-[14px] text-gray-text mt-1">of a ${goal.toLocaleString()} goal</p>
      </div>

      {/* Invest section */}
      <div className="mb-3">
        <p className="text-[14px] font-bold text-dark mb-1.5 uppercase tracking-wide">Invest</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-border rounded-lg px-3 py-2.5 flex-1">
            <span className="text-gray-text text-[14px] mr-1">$</span>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 text-[14px] focus:outline-none bg-transparent"
            />
          </div>
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
