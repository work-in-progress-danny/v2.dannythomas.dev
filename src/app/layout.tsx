import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Streak } from "@/components/streak";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danny Thomas",
  description: "A creative developer from down under.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} relative px-5 h-screen bg-yellow-50 flex justify-center w-full`}>
        <div className="max-w-7xl relative">
          {children}
          <Streak />
        </div>
      </body>
    </html >
  );
}
