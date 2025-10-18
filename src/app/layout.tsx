import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@/components/Analytics";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Google Analytics ID - Add your actual GA4 measurement ID in .env.local
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  title: "Sharath Somashekar | Data Engineering Manager | AI & Analytics Expert",
  description: "Data Engineering Manager with 13+ years of experience leading teams and building scalable data solutions. Expertise in AWS, Python, React, AI/ML, and modern data architecture. Led projects generating $2.3MM revenue and improving efficiency by 90%. Currently driving innovation at CitiusTech.",
  keywords: [
    "Data Engineering Manager",
    "AI Expert",
    "Machine Learning",
    "AWS",
    "Python",
    "React",
    "Team Leadership",
    "Scalable Architecture",
    "Analytics",
    "Seattle",
    "Bangalore",
  ],
  authors: [{ name: "Sharath Somashekar" }],
  openGraph: {
    title: "Sharath Somashekar | Data Engineering Manager | AI & Analytics Expert",
    description: "Data Engineering Manager with 13+ years of experience leading teams and building scalable data solutions.",
    type: "website",
    url: "https://sharathsomashekar.com",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Sharath Somashekar - Data Engineering Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath Somashekar | Data Engineering Manager",
    description: "Leading teams & building AI-powered data solutions. 13+ years experience.",
    images: ["/og-image.jpg"],
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
    <html lang="en">
      <head>
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
