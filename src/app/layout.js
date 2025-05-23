
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./component/SessionWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = { title: "My Next.js App", description: "" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionWrapper>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {children}
        </body>
      </SessionWrapper>
    </html>
  );
}
