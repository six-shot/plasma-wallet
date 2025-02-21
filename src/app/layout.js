import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Preloader from "@/components/Loader";
import Script from "next/script";


const sfpro_display_bold = localFont({
  src: "../../public/fonts/SFPRODISPLAYBOLD.otf",
  variable: "--font-sfpro-display-bold",
});

const sfpro_display_medium = localFont({
  src: "../../public/fonts/SFPRODISPLAYMEDIUM.otf",
  variable: "--font-sfpro-display-medium",
    }); 

const sfpro_display_regular = localFont({
  src: "../../public/fonts/SFPRODISPLAYREGULAR.otf",
  variable: "--font-sfpro-display-regular",
});

export const metadata = {
  title: "Plasma Wallet",
  description: "Plasma Wallet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sfpro_display_bold.variable} ${sfpro_display_medium.variable} ${sfpro_display_regular.variable} antialiased`}
      >
        <Preloader />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/@webflow/webflow-libraries@1.0.0/webflow-animations.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
