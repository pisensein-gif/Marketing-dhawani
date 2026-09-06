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
  title: "Dhwani '26 | College of Engineering Trivandrum",
  description: "Sponsorship Prospectus for Dhwani '26",
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
