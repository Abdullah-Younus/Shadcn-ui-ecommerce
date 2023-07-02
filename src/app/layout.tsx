import './globals.css'
import './scrollbar.css';

import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Wrapper from '@/components/shared/wrapper'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="scrollbar">
        <Wrapper>
          <Header />
          <main className='px-8'>
            {children}
          </main>
        </Wrapper>
      </body>
    </html>
  )
}
