import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'films',
  description: 'watch films and videos created by pxlcorp - visual storytelling, short films, and creative narratives that explore ideas and emotions.',
  keywords: ['pxlcorp films', 'short films', 'visual storytelling', 'creative videos', 'indie films'],
  openGraph: {
    title: 'films | pxlcorp',
    description: 'watch films and videos created by pxlcorp - visual storytelling and creative narratives.',
    images: ['/images/films link thumb.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'films | pxlcorp',
    description: 'watch films and videos created by pxlcorp - visual storytelling and creative narratives.',
    images: ['/images/films link thumb.png'],
  },
}

const films = [
  {
    id: 1,
    title: "the future-I.mov",
    image: "/images/the future.jpg",
    link: "https://www.instagram.com/p/DSAjaYHEr-K/",
    description: "it's a movie produced by pxlcorp and directed by yash, founder of pxlcorp."
  },
  {
    id: 2,
    title: "the future-II.mov",
    image: "/images/the future part 2.jpg",
    link: "https://www.instagram.com/p/DSc-XLAEnQs/",
    description: "it's a movie produced by pxlcorp and directed by yash, founder of pxlcorp."
  },
  {
    id: 3,
    title: "how a kid started dreaming.mov",
    image: "/images/how a kid started dreaming.png",
    link: "https://www.instagram.com/p/DMA2UGrC9Sw/",
    description: "founder's background story - how yash started pxlcorp."
  },
  {
    id: 4,
    title: "pxlcorp launch video.mov",
    image: "/images/pxlcorp launch video.jpg",
    link: "https://www.instagram.com/p/DLhmA5oJR2-/",
    description: "a montage style launch video of pxlcorp."
  },
  {
    id: 5,
    title: "founder's year wrapped.mov",
    image: "/images/founder's year wrapped.jpg",
    link: "https://www.instagram.com/p/DTAnqgYAvSJ/",
    description: "how yash ended his year with pxlcorp, and how it's all making sense."
  }
]

export default function Films() {
  return (
    <main className="min-h-screen relative p-8 md:p-12 lg:p-16">
      {/* Back navigation */}
      <Link href="/" className="file-link font-jersey text-white/70 text-base md:text-lg mb-8 inline-block hover:text-white animate-fade-in">
        ← back to home
      </Link>

      {/* Page title */}
      <h1 className="font-jersey text-pxl-yellow text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 animate-fade-in-up delay-100">
        / films.
      </h1>

      {/* Films grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
        {films.map((film, index) => (
          <Link 
            key={film.id}
            href={film.link} 
            className={`card-hover block animate-fade-in-up delay-${(index + 2) * 100} group`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full">
              <div className="relative aspect-video bg-white/10 rounded overflow-hidden mb-2">
                <Image 
                  src={film.image} 
                  alt={film.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-jersey text-white text-base md:text-lg lg:text-xl transition-colors duration-200 group-hover:text-pxl-red block mb-2">
                {film.title}
              </span>
              <div className="inline-block border border-dashed border-white/50 bg-black/30 px-3 py-1.5">
                <p className="font-jersey text-gray-300 text-sm md:text-base">
                  {film.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
