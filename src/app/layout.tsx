import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dhavin Technologies — Your Technical Partners for Digital Products",
    template: "%s | Dhavin Technologies",
  },
  description:
    "We build custom web apps, mobile applications, and AI-powered solutions that scale. Two technical founders, zero communication gaps.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "AI automation",
    "custom software",
    "full-stack development",
    "Dhavin Technologies",
  ],
  authors: [{ name: "Dhavin Technologies" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dhavin Technologies",
    title: "Dhavin Technologies — Your Technical Partners for Digital Products",
    description:
      "We build custom web apps, mobile applications, and AI-powered solutions that scale.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhavin Technologies",
    description:
      "Your technical partners for digital products that scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
