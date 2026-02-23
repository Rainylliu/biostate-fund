"use client";

import { useState } from "react";

export default function InvestSidebar() {
  const [amount, setAmount] = useState("");
  const raised = 505100;
  const goal = 600000;
  const pct = Math.min((raised / goal) * 100, 100);

  return (
    <div className="invest-sidebar bg-white rounded-2xl border border-gray-border p-6 shadow-sm">
      {/* Progress bar */}
      <div className="progress-bar mb-5">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>

      {/* Amount raised */}
      <div className="mb-6">
        <p className="text-[40px] font-extrabold text-dark leading-tight tracking-tight">
          ${raised.toLocaleString()}
          <span className="inline-block ml-1 w-4 h-4 rounded-full border border-gray-300 text-[10px] text-gray-400 text-center leading-[14px] cursor-help">i</span>
        </p>
        <p className="text-[15px] text-gray-text mt-1">of a ${goal.toLocaleString()} goal</p>
      </div>

      {/* Reserve section */}
      <div className="mb-4">
        <p className="text-[15px] font-bold text-dark mb-2 uppercase tracking-wide">Reserve</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-border rounded-lg px-3 py-2.5 flex-1">
            <span className="text-gray-text text-[15px] mr-1">$</span>
            <input
              type="number"
              placeholder="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 text-[15px] focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <p className="text-xs text-gray-text mt-1">min $100</p>
      </div>

      {/* Reserve button - black like Wefunder */}
      <a
        href="https://wefunder.com/biostateai/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-dark text-white text-center font-bold py-3.5 rounded-lg hover:bg-gray-800 transition text-[15px] tracking-wide"
      >
        RESERVE
      </a>

      {/* Following button */}
      <button className="w-full mt-3 border-2 border-dark text-dark text-center font-bold py-3 rounded-lg hover:bg-gray-50 transition text-[14px] tracking-wide flex items-center justify-center gap-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M5 5h2v14H5V5zm12 0v14l-8-7 8-7z" transform="rotate(180 12 12)"/></svg>
        FOLLOWING
      </button>

      {/* Investment Terms */}
      <div className="mt-6 pt-5 border-t border-gray-border">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold text-gray-text uppercase tracking-wider">
            Investment Terms
          </p>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
        <div className="mt-3">
          <p className="text-[16px] font-bold">Future Equity</p>
          <p className="text-[15px] text-gray-text mt-1">
            <span className="font-bold text-dark">$100M</span> valuation cap{" "}
            <span className="font-bold text-dark">20%</span> discount
          </p>
        </div>
      </div>

      {/* Investor Perks */}
      <div className="mt-4 pt-4 border-t border-gray-border">
        <p className="text-[13px] text-gray-text">
          <span className="mr-1">🎁</span>
          <span className="font-semibold">Investor Perks:</span> $200, $500, $1K, $5K, $10K, $35K, $100K
        </p>
      </div>

      {/* Location */}
      <div className="mt-4 pt-4 border-t border-gray-border text-[14px] text-gray-text">
        <p>biostate.ai &middot; Houston, TX</p>
      </div>
    </div>
  );
}
