import type { Metadata } from "next";
import { DM_Sans, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const sansFont = DM_Sans({
  variable: "--font-custom-sans",
  subsets: ["latin"],
});

const blockFont = Montserrat({
  variable: "--font-custom-block",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const poppinsFont = Poppins({
  variable: "--font-custom-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marketing.dhwanicet.com"),
  title: {
    default: "Dhwani '26 | Marketing & Sponsorship Prospectus",
    template: "%s | Dhwani '26 CET",
  },
  description: "Official Marketing & Sponsorship Prospectus for Dhwani '26, College of Engineering Trivandrum. Discover brand partnership opportunities, demographics, and citywide activations.",
  keywords: [
    "Dhwani 2026",
    "Dhwani CET",
    "College of Engineering Trivandrum",
    "Cultural Fest Sponsorship",
    "Campus Marketing",
    "Brand Partnerships",
    "Trivandrum City Marketing"
  ],
  authors: [{ name: "Dhwani CET Marketing Team" }],
  creator: "Dhwani CET",
  publisher: "College of Engineering Trivandrum",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dhwani '26 | Marketing & Sponsorship Prospectus",
    description: "Official Marketing & Sponsorship Prospectus for Dhwani '26, College of Engineering Trivandrum. Kerala's largest cultural fest.",
    url: "https://marketing.dhwanicet.com",
    siteName: "Dhwani '26 Marketing",
    images: [
      {
        url: "/dhwani_logo.png",
        width: 1200,
        height: 630,
        alt: "Dhwani '26 Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhwani '26 | Marketing & Sponsorship Prospectus",
    description: "Partner with Dhwani '26 - Kerala's largest campus cultural extravaganza at CET Trivandrum.",
    images: ["/dhwani_logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${blockFont.variable} ${poppinsFont.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
