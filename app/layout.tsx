import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import AppSideBar from "@/app/_components/AppSideBar";
import AppBar from "@/app/_components/AppBar";
import ReduxProvider from "@/app/_providers/ReduxProvider";
import MediaQueryProvider from "@/app/_providers/MediaQueryProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tidder',
  description: 'Personal Reddit RSS read-only app.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <MediaQueryProvider />
          <div className="flex flex-col w-full">
            <AppBar />
            <AppSideBar>
              {children}
            </AppSideBar>
          </div>
        </ReduxProvider>
      </body>
    </html>
  )
}
