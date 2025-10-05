import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/shared/ui/Navbar";
import Footer from "@/shared/ui/Footer";

const openSans = Open_Sans({
  subsets: ["greek"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-openSans",
});

export const metadata: Metadata = {
  title: "Md Pervej Hossain | Full-Stack Web Developer",
  description:
    "Hi, I'm Md Pervej Hossain — a passionate Full-Stack Web Developer skilled in Next.js, React, Node.js, and modern web technologies. Explore my portfolio, projects, experience, and achievements.",
  keywords: [
    "Md Pervej Hossain",
    "Pervej Hossain",
    "Pervej",
    "Md Pervej",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "Laravel Developer",
    "JavaScript Developer",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Bangladesh Developer",
  ],
  authors: [
    { name: "Md Pervej Hossain", url: "https://www.mdpervejhossain.me" },
  ],
  creator: "Md Pervej Hossain",
  publisher: "Md Pervej Hossain",
  metadataBase: new URL("https://www.mdpervejhossain.me"),
  alternates: {
    canonical: "https://www.mdpervejhossain.me",
  },

  openGraph: {
    title: "Md Pervej Hossain | Full-Stack Web Developer",
    description:
      "Portfolio of Md Pervej Hossain — professional Full-Stack Web Developer specializing in Next.js, React, Node.js, and modern web apps.",
    url: "https://www.mdpervejhossain.me",
    siteName: "Md Pervej Hossain Portfolio",
    images: [
      {
        url: "https://i.ibb.co.com/JRkTSzQC/Md-Pervej-Hossain-3.jpg",
        width: 1200,
        height: 630,
        alt: "Md Pervej Hossain — Full-Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
    emails: ["mdpervejhossain0.com"], // optional, if you use a public contact email
  },

  twitter: {
    card: "summary_large_image",
    site: "@Pervej00",
    creator: "@Pervej00",
    title: "Md Pervej Hossain | Full-Stack Web Developer",
    description:
      "Explore the portfolio and professional journey of Md Pervej Hossain — Full-Stack Web Developer skilled in Next.js and modern web technologies.",
    images: ["https://i.ibb.co.com/JRkTSzQC/Md-Pervej-Hossain-3.jpg"],
  },

  // 💼 Rich link references for search engines
  other: {
    "github:profile": "https://github.com/Pervej0",
    "linkedin:profile": "https://www.linkedin.com/in/md-pervej-hossain/",
    "twitter:profile": "https://x.com/Pervej00",
    "facebook:profile": "https://www.facebook.com/pervej0/",
    "portfolio:url": "https://www.mdpervejhossain.me/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className}`}>
        <header>{<Navbar />}</header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
