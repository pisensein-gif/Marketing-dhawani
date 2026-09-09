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
    "Dhwani '26",
    "Dhwani CET",
    "College of Engineering Trivandrum",
    "Cultural Fest Sponsorship",
    "Campus Marketing Kerala",
    "Brand Partnerships",
    "Trivandrum City Marketing",
    "Kerala College Fest"
  ],
  authors: [{ name: "Dhwani CET Marketing Team" }],
  creator: "Dhwani CET",
  publisher: "College of Engineering Trivandrum",
  icons: {
    icon: [
      { url: "/dhwani_favicon_black.png", type: "image/png" },
    ],
    shortcut: "/dhwani_favicon_black.png",
    apple: "/dhwani_favicon_black.png",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Dhwani '26 | Marketing & Sponsorship Prospectus",
    description: "Official Marketing & Sponsorship Prospectus for Dhwani '26, College of Engineering Trivandrum. Kerala's largest cultural fest.",
    url: "https://marketing.dhwanicet.com",
    siteName: "Dhwani '26 CET",
    images: [
      {
        url: "/dhwani_og_black.png",
        width: 1200,
        height: 630,
        alt: "Dhwani '26 CET - Kerala's Largest Cultural Fest",
      },
      {
        url: "/dhwani_favicon_black.png",
        width: 512,
        height: 512,
        alt: "Dhwani Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhwani '26 | Marketing & Sponsorship Prospectus",
    description: "Partner with Dhwani '26 - Kerala's largest campus cultural extravaganza at CET Trivandrum.",
    images: ["/dhwani_og_black.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://marketing.dhwanicet.com/#website",
      "url": "https://marketing.dhwanicet.com",
      "name": "Dhwani '26 Marketing",
      "description": "Official Sponsorship & Marketing Portal for Dhwani '26 CET",
      "publisher": {
        "@id": "https://marketing.dhwanicet.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://marketing.dhwanicet.com/#organization",
      "name": "Dhwani CET",
      "url": "https://marketing.dhwanicet.com",
      "logo": "https://marketing.dhwanicet.com/dhwani_favicon_black.png",
      "image": "https://marketing.dhwanicet.com/dhwani_og_black.png",
      "sameAs": [
        "https://instagram.com/dhwanilive",
        "https://instagram.com/dhwaniflea"
      ]
    },
    {
      "@type": "Event",
      "name": "Dhwani '26 - Cultural Festival",
      "startDate": "2026-10-01",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "College of Engineering Trivandrum",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Engineering College P.O.",
          "addressLocality": "Trivandrum",
          "addressRegion": "Kerala",
          "postalCode": "695016",
          "addressCountry": "IN"
        }
      },
      "image": [
        "https://marketing.dhwanicet.com/dhwani_og_black.png",
        "https://marketing.dhwanicet.com/dhwani_favicon_black.png"
      ],
      "description": "Kerala's largest campus cultural fest attracting over 100,000+ footfall at CET Trivandrum.",
      "organizer": {
        "@type": "Organization",
        "name": "College of Engineering Trivandrum",
        "url": "https://marketing.dhwanicet.com"
      }
    }
  ]
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
