import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import Script from "next/script";
import baseUrl from "../../baseURL";

export const metadata = {
  /* ---------- GLOBAL ---------- */
  metadataBase: new URL(baseUrl),
  title: {
    default: "BrenzoMedia | Strategic Content Partner for Creators",
    template: "%s | BrenzoMedia",
  },
  description:
    "BrenzoMedia is a 4.9‑rated content‑marketing agency trusted by 10+ brands. " +
    "We turn your long‑form videos into viral, cinematic assets—so you gain " +
    "more visibility, authority, followers, and sales without extra effort.",
  keywords: [
    "content marketing agency",
    "creator growth strategy",
    "video repurposing",
    "viral content production",
    "social‑media marketing",
    "BrenzoMedia",
  ],
  alternates: { canonical: baseUrl },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  /* ---------- OPEN GRAPH ---------- */
  openGraph: {
    title: "BrenzoMedia | Strategic Content Partner for Creators",
    description:
      "Creators, founders, and lifestyle influencers trust BrenzoMedia to generate " +
      "10M+ views and scale their brands. Book a strategy chat today.",
    url: baseUrl,
    siteName: "BrenzoMedia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/brenzomedia-og.jpg", // 1200×630 social‑share image
        width: 1200,
        height: 630,
        alt: "BrenzoMedia—Content Marketing Agency",
      },
    ],
  },

  /* ---------- TWITTER / X ---------- */
  twitter: {
    card: "summary_large_image",
    title: "BrenzoMedia | Go Viral With Strategic Content",
    description:
      "Let our strategy team do the heavy lifting while you watch your brand go viral.",
    images: ["/og/brenzomedia-og.jpg"],
    creator: "@BrenzoMedia", // update if you have an X alias
  },

  /* ---------- ICONS & THEME ---------- */
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` m-auto `}>
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BrenzoMedia",
              url: { baseUrl },
              logo: `${baseUrl}/logo.png`,
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "brenzomedia@gmail.com",
                  contactType: "customer support",
                },
              ],
            }),
          }}
        />
        <ScrollToTopButton />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
