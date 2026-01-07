import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'reads | pxlcorp',
  description: 'blogs and reads by pxlcorp',
  openGraph: {
    title: 'reads | pxlcorp',
    description: 'blogs and reads by pxlcorp',
    images: ['/images/the reads link thumb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'reads | pxlcorp',
    description: 'blogs and reads by pxlcorp',
    images: ['/images/the reads link thumb.png'],
  },
}

export default function Reads() {
  return (
    <main className="min-h-screen relative p-8 md:p-12 lg:p-16">
      {/* Back navigation */}
      <Link href="/" className="file-link font-jersey text-white/70 text-base md:text-lg mb-8 inline-block hover:text-white animate-fade-in">
        ← back to home
      </Link>

      {/* Page title */}
      <h1 className="font-jersey text-pxl-yellow text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 animate-fade-in-up delay-100">
        / reads.
      </h1>

      {/* Coming soon message */}
      <div className="inline-block border border-dashed border-white/50 px-6 py-4 animate-fade-in-up delay-200">
        <p className="font-jersey text-white text-base md:text-lg lg:text-xl">
          releasing blogs soon.
        </p>
      </div>
    </main>
  )
}
