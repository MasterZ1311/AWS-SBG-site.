import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AWS Student Builder Group — SIST Chapter",
    template: "%s | AWS Student Builder Group — SIST Chapter",
  },
  description:
    "The official AWS Student Builder Group at Sathyabama Institute of Science and Technology. Hands-on cloud labs, serverless architecture, collaborative group study cohorts, and national hackathons.",
  metadataBase: new URL("https://sbg-sist.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sbg-sist.in",
    siteName: "AWS Student Builder Group — SIST Chapter",
    images: [{ url: "/assets/images/og-preview.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@awssbg_sist",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/assets/logo/AWS Student Builder Group_RGB_Program Icon_White.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
