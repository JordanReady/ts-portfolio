import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import SessionProvider from "@/components/SessionProvider";
import TopPageButton from "@/components/TopPageButton";
import FirebaseAuthProvider from "@/components/FirebaseAuthProvider";
import { BackgroundBeams } from "@/components/ui/background-beams";

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
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <FirebaseAuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <BackgroundBeams className="beams" />
              <TopPageButton />
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
