import type { Metadata } from "next";
import "./globals.css";

const title = "Khalid Alhajj | Operations & Software Development";
const description = "Khalid Alhajj leads logistics operations and builds software for rider scheduling, partner training, and enrollment. Based in Riyadh, Saudi Arabia.";

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: "Khalid Alhajj" }],
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
