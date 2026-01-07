import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'pxlcorp | creative lab for stories, products & experiments',
    template: '%s | pxlcorp',
  },
  description: 'pxlcorp is a creative lab where we experiment, build, and learn in public. we create films, products, and meaningful experiences through storytelling and design.',
  keywords: [
    'pxlcorp',
    'creative lab',
    'storytelling',
    'filmmaking',
    'product design',
    'experiments',
    'building in public',
    'creative studio',
    'indie maker',
    'creative direction',
    'visual storytelling',
    'digital products',
  ],
  authors: [{ name: 'yash', url: 'https://pxlcorp.xyz' }],
  creator: 'pxlcorp',
  publisher: 'pxlcorp',
  metadataBase: new URL('https://pxlcorp.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'pxlcorp | creative lab for stories, products & experiments',
    description: 'pxlcorp is a creative lab where we experiment, build, and learn in public. we create films, products, and meaningful experiences.',
    url: 'https://pxlcorp.xyz',
    siteName: 'pxlcorp',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/link thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'pxlcorp - creative lab for stories, products & experiments',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'pxlcorp | creative lab',
    description: 'a creative lab where we experiment, build, and learn in public.',
    creator: '@pxlcorpHQ',
    site: '@pxlcorpHQ',
    images: ['/images/link thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/pxlcorp logo.png',
    apple: '/icons/pxlcorp logo.png',
  },
  category: 'creative',
}

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'pxlcorp',
  url: 'https://pxlcorp.xyz',
  logo: 'https://pxlcorp.xyz/icons/pxlcorp logo.png',
  description: 'pxlcorp is a creative lab where we experiment, build, and learn in public.',
  founder: {
    '@type': 'Person',
    name: 'Yash',
  },
  sameAs: [
    'https://instagram.com/pxlcorp.xyz',
    'https://x.com/pxlcorpHQ',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-pxlcorp min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
