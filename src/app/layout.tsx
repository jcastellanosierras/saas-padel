import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster />
        <Header />
        <div className='w-full flex flex-col items-center justify-center pt-8'>
          <main className='w-[90%] flex flex-col gap-8'>{children}</main>
        </div>
      </body>
    </html>
  )
}
