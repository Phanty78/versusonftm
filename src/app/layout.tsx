import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FTM Versus! - Premier Tournament Hosting on Fantom Blockchain',
  description:
    'FTM Versus! is the premier tournament hosting platform on the Fantom Blockchain, supporting the growing web3 gaming ecosystem.',
  keywords: 'FTM Versus, FTM, Versus, Tournament, Hosting, Blockchain',
  authors: [{ name: 'Maël Donnart', url: 'https://www.maeldonnart.fr/' }],
  openGraph: {
    title: 'FTM Versus! - Premier Tournament Hosting on Fantom Blockchain',
    description:
      'FTM Versus! is the premier tournament hosting platform on the Fantom Blockchain, supporting the growing web3 gaming ecosystem.',
    url: 'https://www.ftmversus.com/',
    siteName: 'FTM Versus! - Premier Tournament Hosting on Fantom Blockchain',
    images: [
      {
        url: 'https://www.ftmversus.com/logo.webp',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FTM Versus! - Premier Tournament Hosting on Fantom Blockchain',
    description:
      'FTM Versus! is the premier tournament hosting platform on the Fantom Blockchain, supporting the growing web3 gaming ecosystem.',
    images: ['https://www.ftmversus.com/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'games',
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
