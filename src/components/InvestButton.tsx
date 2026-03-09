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
        if (typeof window !== "undefined" && typeof window.gtag === "function") {
          window.gtag("event", "conversion", {
            send_to: "AW-17775684151/0v-XCIr82_0bELfUjZxC",
            value: 1.0,
            currency: "USD",
          });
        }
      }}
      className={className}
    >
      {children}
    </a>
  );
}
