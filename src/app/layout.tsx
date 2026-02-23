import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Invest in Biostate AI | Help 90% of people live to 90",
  description:
    "Biostate AI uses AI to predict individual health changes. Invest in the future of precision medicine.",
  openGraph: {
    title: "Invest in Biostate AI | Help 90% of people live to 90",
    description:
      "AI-powered precision medicine. $20M+ raised from Accel, Matter Venture Partners, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white">{children}</body>
    </html>
  );
}
