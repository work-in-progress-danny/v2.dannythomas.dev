import { Streak } from "@/components/pages/home";
import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

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
			<body className={`${inter.className} bg-yellow-50 flex justify-center`}>
				<div className="relative w-full max-w-7xl">
					{children}
					<Streak />
				</div>
			</body>
		</html>
	);
}
