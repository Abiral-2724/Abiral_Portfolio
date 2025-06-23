import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Abiral Jain | Full Stack Developer",
	description:
		"Hello! I am Abiral Jain, a Full Stack Developer , and this is my Portfolio Website! Get to know my skills, experience, projects and much more!",
	metadataBase: new URL("https://www.sarthakbharadwaj.com"),
	openGraph: {
		type: "website",
		url: "https://www.sarthakbharadwaj.com/",
		title: "Abiral Jain | Full Stack Developer",
		description:
			"Hello! I am Abiral Jain, a Full Stack Developer , and this is my Portfolio Website! Get to know my skills, experience, projects and much more!",
	},
	twitter: {
		card: "summary_large_image",
		title: "Abiral Jain | Full Stack Developer",
		description:
			"Hello! I am Abiral Jain, a Full Stack Developer , and this is my Portfolio Website! Get to know my skills, experience, projects and much more!",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="antialiased w-screen max-w-screen">
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
