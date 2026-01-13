import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "vono",
	description: "a template for things",
	openGraph: {
		title: "vono",
		description: "a template for things",
		type: "website",
		url: "https://vono.dev",
	},
	twitter: {
		card: "summary_large_image",
		title: "vono",
		description: "a template for things",
		creator: "caleb__guy",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-white">
			<body className="antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
