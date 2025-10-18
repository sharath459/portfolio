import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sharath Somashekar | Data Engineering Manager | AI & Analytics Expert",
  description: "13 years of proven data leadership driving $2.3MM+ in business value. Expert in Data Engineering, BI, AI/ML, and scalable data infrastructure. Built teams, architected platforms serving 1000+ users, and pioneered AI-driven automation achieving 90% efficiency gains.",
  keywords: ["Data Engineering Manager", "Business Intelligence", "AI & ML", "Data Architecture", "Analytics Engineering", "AWS", "Redshift", "Python", "dbt", "Tableau", "Looker", "Agentic AI", "GenAI"],
  authors: [{ name: "Sharath Somashekar" }],
  creator: "Sharath Somashekar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sharath459.github.io/portfolio/",
    title: "Sharath Somashekar | Data Engineering Manager",
    description: "13 years driving $2.3MM+ impact through data infrastructure, AI automation, and scalable analytics platforms",
    siteName: "Sharath Somashekar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sharath Somashekar - Data Engineering Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath Somashekar | Data Engineering Manager",
    description: "13 years driving $2.3MM+ impact through data infrastructure and AI automation",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
