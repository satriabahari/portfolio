import "./globals.css";
import { soraSans } from "@/styles/fonts";
import { Metadata } from "next";
import { METADATA } from "@/constant/metadata";
import { ThemeProviderContext } from "@/app/themeProvider";
import Navbar from "@/components/navbar";
import StoreProvider from "./storeProvider";

export const metadata: Metadata = {
  title: `${METADATA.creator} | Personal Website`,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={soraSans.className}>
        <StoreProvider>
          <ThemeProviderContext>
            <Navbar />
            {children}
          </ThemeProviderContext>
        </StoreProvider>
      </body>
    </html>
  );
}
