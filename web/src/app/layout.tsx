import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-sans-thai",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thinkerfint | Digital Lending Solution for Banks and Lenders",
  description:
    "Digital lending, loan origination and data integration for banks and lenders, live in weeks, without replacing your core system.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ibmPlexSansThai.variable} h-full antialiased`}>
      {/* Browser extensions (e.g. ColorZilla) inject attributes into <body> before hydration */}
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
