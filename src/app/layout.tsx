import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'pxlcorp',
  description: 'creative lab for stories, products & experiments',
  metadataBase: new URL('https://pxlcorp.xyz'),
  openGraph: {
    title: 'pxlcorp',
    description: 'creative lab for stories, products & experiments',
    url: 'https://pxlcorp.xyz',
    siteName: 'pxlcorp',
    images: [
      {
        url: '/images/link thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'pxlcorp',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pxlcorp',
    description: 'creative lab for stories, products & experiments',
    images: ['/images/link thumbnail.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-pxlcorp min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
