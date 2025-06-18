import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import MobXProvider from "@/components/providers/MobXProvider";
import {MobxAppSidebar, MobXSidebarProvider, MobXSidebarTrigger} from "@/components/providers/MobXSidebarProviders"
import MobXThemeProvider from "@/components/providers/MobXThemeProvider"
import ThemeButton from "@/components/theme/ThemeButton"
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Linear Full Stack",
  description: "Creating Linear App for Job Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overscroll-none`}
      >
        <MobXProvider>
          <MobXThemeProvider>
            {/* {children} */}
            <MobXSidebarProvider>
              <MobxAppSidebar />
              <main className="w-full p-2">
                <Card className="w-full h-full flex flex-col pt-0.5 rounded-sm">
                  <SiteHeader />
                  {/* <MobXSidebarTrigger /> */}
                  {/* <hr style={{marginTop:0}}/> */}
                  {children}
                </Card>
              </main>
            </MobXSidebarProvider>
          </MobXThemeProvider>
        </MobXProvider>
      </body>
    </html>
  );
}
