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
      <div className="flex gap-8 pb-4 mb-10 text-[13px] font-semibold uppercase tracking-wider">
        <button
          onClick={() => setActiveTab("overview")}
          className={`pb-4 -mb-[17px] cursor-pointer transition ${
            activeTab === "overview"
              ? "text-dark border-b-2 border-dark"
              : "text-gray-text hover:text-dark"
          }`}
        >
          Overview
        </button>
        <button
          className="text-gray-text hover:text-dark cursor-pointer pb-4 -mb-[17px] transition"
          disabled
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("investors")}
          className={`pb-4 -mb-[17px] cursor-pointer transition ${
            activeTab === "investors"
              ? "text-dark border-b-2 border-dark"
              : "text-gray-text hover:text-dark"
          }`}
        >
          What Investors Say{" "}
          <span className="inline-flex items-center justify-center bg-brand text-white text-[11px] font-bold rounded-full w-5 h-5 ml-1">
            36
          </span>
        </button>
        <a
          href="https://wefunder.com/biostateai/ask"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-text hover:text-dark cursor-pointer pb-4 -mb-[17px] transition"
        >
          Ask A Question on Wefunder{" "}
          <span className="inline-flex items-center justify-center bg-gray-200 text-gray-text text-[11px] font-bold rounded-full w-5 h-5 ml-1">
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
