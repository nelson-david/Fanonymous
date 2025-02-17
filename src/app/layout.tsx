import type { Metadata } from "next";
import { Darker_Grotesque, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
    title: "Fanonymous - Anonymous Messenger",
    description: "Fanonymous - Anonymous Messenger",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const darkerGrotesque = Darker_Grotesque({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"], // Choose weights you need
    variable: "--font-darker-grotesque", // Optional: For Tailwind
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${darkerGrotesque.variable} antialiased overflow-x-hidden`}
            >
                {children}
            </body>
        </html>
    );
}
