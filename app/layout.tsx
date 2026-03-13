import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PrintNest — Elevate Your Brand With Every Print",
  description: "Tailored printing solutions designed to match your unique vision and creative needs. Premium quality prints, fast delivery, global shipping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
