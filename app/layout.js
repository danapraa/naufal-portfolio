import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-spacemono",
  display: "swap",
});

export const metadata = {
  title: "Naufal Wahyu Pradana | Front-End & Web Developer",
  description:
    "Portofolio Naufal Wahyu Pradana, fresh graduate Informatika yang berfokus pada Web Development dengan React.js, Next.js, Laravel, dan MySQL.",
  openGraph: {
    title: "Naufal Wahyu Pradana | Front-End & Web Developer",
    description:
      "Portofolio fresh graduate Informatika: React.js, Next.js, Laravel, dan MySQL.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${grotesk.variable} ${mono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}