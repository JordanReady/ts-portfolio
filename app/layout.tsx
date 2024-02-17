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
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordan Ready | Web Development Services for Seamless Solutions",
  description:
    "Web Development Services for a Powerful Online Presence | Developed by Jordan Ready at jordanready.com",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
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
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Protest+Strike&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={`${inter.className} bg-slate-50 dark:bg-slate-950`}>
          <GoogleTagManager gtmId="GTM-NPSLR98B" />
          <FirebaseAuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <TopPageButton />
            </ThemeProvider>
          </FirebaseAuthProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
