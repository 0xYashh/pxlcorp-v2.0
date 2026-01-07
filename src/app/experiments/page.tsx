import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'experiments | pxlcorp',
  description: 'experiments and projects by pxlcorp',
  openGraph: {
    title: 'experiments | pxlcorp',
    description: 'experiments and projects by pxlcorp',
    images: ['/images/the experiments link thumb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'experiments | pxlcorp',
    description: 'experiments and projects by pxlcorp',
    images: ['/images/the experiments link thumb.png'],
  },
}

export default function Experiments() {
  return (
    <main className="min-h-screen relative p-8 md:p-12 lg:p-16">
      {/* Back navigation */}
      <Link href="/" className="file-link font-jersey text-white/70 text-base md:text-lg mb-8 inline-block hover:text-white animate-fade-in">
        ← back to home
      </Link>

      {/* Page title */}
      <h1 className="font-jersey text-pxl-yellow text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 animate-fade-in-up delay-100">
        / experiments.
      </h1>

      {/* Experiments grid */}
      <div className="space-y-8">
        {/* Twichan experiment */}
        <div className="card-hover animate-fade-in-up delay-200">
          {/* Twichan thumbnail */}
          <div className="w-32 h-32 md:w-40 md:h-40 relative rounded overflow-hidden mb-4">
            <Image 
              src="/images/twichan.png"
              alt="twichan app"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Project title - under construction */}
          <p className="font-jersey text-pxl-red text-sm md:text-base mb-2">
            twichan.exe (under construction)
          </p>
          
          {/* Project description - dashed border */}
          <div className="inline-block border border-dashed border-white/50 px-4 py-2 mt-2">
            <p className="font-jersey text-white text-sm md:text-base">
              a text only social app.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
