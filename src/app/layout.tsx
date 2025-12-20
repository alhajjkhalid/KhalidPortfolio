import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khalid Alhajj | Operations & Full-Stack Developer",
  description: "Where diverse skills become your edge. Operations Manager and Full-Stack Developer with 7+ years of experience connecting dots across logistics, tech, data, and creative domains.",
  keywords: ["Khalid Alhajj", "Operations Manager", "Full-Stack Developer", "React", "Next.js", "Saudi Arabia", "Remote Work", "Range"],
  authors: [{ name: "Khalid Alhajj" }],
  openGraph: {
    title: "Khalid Alhajj | Operations & Full-Stack Developer",
    description: "Where diverse skills become your edge. Solving complex problems by connecting fields.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Alhajj | Operations & Full-Stack Developer",
    description: "Where diverse skills become your edge.",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
