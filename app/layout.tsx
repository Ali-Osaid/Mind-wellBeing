import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'

const cabin = Cabin({ subsets: ['latin'] ,weight:['500']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider 
    appearance={{
      elements: {
        logoBox:'my-4',
        logoImage:'w-[200px] h-[200px]',
        formButtonPrimary:'bg-cyan-400 hover:bg-cyan-300',
        

      },
    }}
    >
    <html lang="en">
      <body className={cabin.className + ''}>
      <Navbar/>
        
        {children}
        </body>
    </html>
        </ClerkProvider>
  )
}