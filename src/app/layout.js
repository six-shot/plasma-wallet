import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Preloader from "@/components/Loader";


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
      </body>
    </html>
  );
}
