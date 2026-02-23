"use client";

export default function InvestButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="https://wefunder.com/biostateai/invest?invite_code=onjSjCCss8"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("trackCustom", "InvestClick");
        }
      }}
      className={className}
    >
      {children}
    </a>
  );
}
