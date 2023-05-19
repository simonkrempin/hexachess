"use client";

import { GameContextProvider } from "@contexts/GameContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "hexachess.online",
    description: "Play Hexachess online with your friends!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <GameContextProvider>{children}</GameContextProvider>
            </body>
        </html>
    );
}
