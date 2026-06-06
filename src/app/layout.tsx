import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import AppChrome from "@/components/AppChrome";
import "@/styles/globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Precious Pukulu | Portfolio",
    template: "%s | Precious Pukulu",
  },
  description:
    "Personal portfolio for Precious Pukulu, a Computer Science Teacher, Software Developer, and Graphic Designer in Malawi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <AppChrome />
        <main className="site-shell">{children}</main>
      </body>
    </html>
  );
}
