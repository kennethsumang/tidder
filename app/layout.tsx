import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import AppSideBar from "@/app/_components/AppSideBar";

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
        <div className="flex flex-row">
          <AppSideBar />
          <div className="h-[calc(100vh)] overflow-y-auto flex flex-col w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
