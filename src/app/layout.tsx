import type { Metadata } from "next";
import localFont from "next/font/local";
import { Metrophobic, Work_Sans } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'

import Header from "@/modules/Header/Header";
import Footer from "@/modules/Footer/Footer";

import {getCurrentUser} from "@/api/auth";

import "@/shared/styles/global.scss";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const metrophobic = Metrophobic({
  subsets: ["latin"],
  weight: ["400"],
});

const blatant = localFont({
  src: [
    {
      path: "../../public/fonts/Blatant-Bold.otf",
      weight: "700",
    },
  ],
});

export const metadata: Metadata = {
  title: "RIGHTCARS",
  description: "Affordable Cars for Every Lifestyle!",
  keywords: "",
  metadataBase: new URL("https://right-cars.co.za"),
  openGraph: {
    title: "RIGHTCARS",
    description: "Affordable Cars for Every Lifestyle!",
    // url: "https://",
    images: [
      {
        url: "/images/og.png", //перед зображенням треба додати прод юрл,як і в url та metadataBase, інакше зображення опенграфу може не відображатись
        width: 800,
        height: 600,
        alt: "logo RightCars",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${workSans.className} ${metrophobic.className} ${blatant.className}`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string} />
      </body>
    </html>
  );
}
