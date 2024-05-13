import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "@/app/providers";
import Navbar from "@/components/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import FloatingThemeToggler from "@/components/floating-theme-toggler";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans !antialiased",
          fontSans.className
        )}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />
        <Providers
          themeProps={{ attribute: "class", defaultTheme: "light", children }}
        >
          <ActiveSectionContextProvider>
            <div className="relative flex flex-col h-screen">
              <main className="container mx-auto max-w-7xl pt-28 sm:pt-36 px-4 flex-grow">
                <Navbar />
                {children}
                <Footer />
              </main>
            </div>
          </ActiveSectionContextProvider>
          <Toaster position="top-right" toastOptions={{
            className: "bg-zinc-100 dark:bg-zinc-950/90 text-zinc-900 dark:text-zinc-100 ", style: {
              borderRadius: "1.2rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)", 
            },
          }}/>
          <FloatingThemeToggler />
        </Providers>
      </body>
    </html>
  );
}
