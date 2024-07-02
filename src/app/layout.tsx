import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmotionsTM",
  description: "Relate your emotions to the Quran and Sunnah.",
  keywords: "emotions, quran, hadith, islam, muslim, mental health, therapy, guidance, self-care, self-help, self-improvement, self-awareness, self-compassion, self-acceptance, self-love, self-worth, self-control",
  openGraph: {
    title: "EmotionsTM",
    description: "Relate your emotions to the Quran and Sunnah.",
    type: "website",
    siteName: "EmotionsTM",
    url: "https://emotionstm.com",

    // images: [
    //   {
    //     url: "https://emotionstm.com/img5.jpg",
    //     width: 500,
    //     height: 500,
    //     alt: "EmotionsTM",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="">
          {children}
        </main>
        {/* <Chatbot /> */}
        <Footer />
        </body>
    </html>
  );
}
