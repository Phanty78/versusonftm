import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FTM Versus! - Premier Tournament Hosting on Fantom Blockchain',
  description:
    'FTM Versus! is the premier tournament hosting platform on the Fantom Blockchain, supporting the growing web3 gaming ecosystem.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
