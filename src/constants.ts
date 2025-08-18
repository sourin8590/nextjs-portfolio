import type { Metadata } from "next";

export const metadata_html: Metadata = {
  title: "Sourin Ghanty | Full-Stack Developer",
  description: "Portfolio of Sourin Ghanty, a passionate Full-Stack Developer and Machine Learning Enthusiast.",
  keywords: ["Sourin Ghanty", "Full-Stack Developer", "React", "MERN", "Machine Learning", "Portfolio"],
  authors: [{ name: "Sourin Ghanty" }],
  openGraph: {
    title: "Sourin Ghanty | Full-Stack Developer",
    description: "Portfolio of Sourin Ghanty, a passionate Full-Stack Developer and Machine Learning Enthusiast.",
    url: "https://sourin-ghanty.vercel.app",
    siteName: "Sourin Ghanty Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sourin Ghanty Portfolio",
      },
    ],
    type: "website",
  },
  icons: {
    icon: "/favicon1.ico",
  },
};