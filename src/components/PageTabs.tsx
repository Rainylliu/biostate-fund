"use client";

import { useState, ReactNode } from "react";

interface PageTabsProps {
  overviewContent: ReactNode;
  investorSayContent: ReactNode;
}

export default function PageTabs({
  overviewContent,
  investorSayContent,
}: PageTabsProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "investors">(
    "overview"
  );

  return (
    <>
      {/* Tabs */}
      <div className="flex gap-8 pb-4 mb-10 text-[14px] font-semibold uppercase tracking-wider overflow-x-auto whitespace-nowrap">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-1 -mb-[17px] cursor-pointer transition ${
            activeTab === "overview"
              ? "text-dark border-b-2 border-[#3077b8]"
              : "text-gray-text hover:text-dark"
          }`}
        >
          OVERVIEW
        </button>
        <button
          className="text-gray-text hover:text-dark cursor-pointer pb-1 -mb-[17px] transition"
          disabled
        >
          POSTS
        </button>
        <button
          onClick={() => setActiveTab("investors")}
          className={`pb-1 -mb-[17px] cursor-pointer transition ${
            activeTab === "investors"
              ? "text-dark border-b-2 border-[#3077b8]"
              : "text-gray-text hover:text-dark"
          }`}
        >
          WHAT INVESTORS SAY{" "}
          <span className="inline-flex items-center justify-center bg-[#C1C1C1] text-white text-[11px] font-bold rounded px-1.5 py-0.5 ml-1">
            36
          </span>
        </button>
        <a
          href="https://wefunder.com/biostateai/ask"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-text hover:text-dark cursor-pointer pb-1 -mb-[17px] transition"
        >
          ASK A QUESTION ON WEFUNDER{" "}
          <span className="inline-flex items-center justify-center bg-[#C1C1C1] text-white text-[11px] font-bold rounded px-1.5 py-0.5 ml-1">
            10
          </span>
        </a>
      </div>

      {/* Tab content */}
      {activeTab === "overview" && overviewContent}
      {activeTab === "investors" && investorSayContent}
    </>
  );
}
