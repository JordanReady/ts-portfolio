import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import SessionProvider from "@/components/SessionProvider";
import TopPageButton from "@/components/TopPageButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan Ready",
  description: "Developed by Jordan Ready at jordanready.com",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* <div
              className=" dark:opacity-5  opacity-10"
              style={{
                backgroundImage: 'url("/background.jpg")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "multiply",
                height: "100svh",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: -999,
              }}
            ></div> */}
            <Header />
            {children}
            <TopPageButton />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
