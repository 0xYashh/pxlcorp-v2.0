import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "founder's note",
  description: "a personal note from yash, founder of pxlcorp - sharing the vision, journey, and philosophy behind building a creative lab in public.",
  keywords: ['yash pxlcorp', 'founder story', 'creative entrepreneur', 'building in public', 'indie maker'],
  openGraph: {
    title: "founder's note | pxlcorp",
    description: "a personal note from yash, founder of pxlcorp - sharing the vision and journey behind the creative lab.",
    images: ['/images/the founder note link.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "founder's note | pxlcorp",
    description: "a personal note from yash, founder of pxlcorp - sharing the vision and journey behind the creative lab.",
    images: ['/images/the founder note link.png'],
  },
}

export default function FoundersNote() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#f6ffaf' }}>
      {/* Header */}
      <div className="p-6 md:p-8 animate-fade-in">
        <Link href="/">
          <Image 
            src="/icons/pxlcorp logo.png"
            alt="pxlcorp logo"
            width={40}
            height={40}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />
        </Link>
        <Link href="/" className="file-link font-jersey text-black/70 text-base md:text-lg mt-3 inline-block hover:text-black transition-colors">
          ← back to home
        </Link>
      </div>

      {/* Title */}
      <div className="text-center py-8 md:py-12 animate-fade-in-up delay-100">
        <p className="font-instrument italic text-lg md:text-xl mb-4" style={{ textTransform: 'none' }}>
          <mark className="bg-pxl-yellow px-1">a note from the founder</mark>
        </p>
        <h1 className="font-ztbros text-pxl-red text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          the founder's note.
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="font-instrument text-black text-base md:text-lg lg:text-xl leading-relaxed space-y-8 animate-fade-in-up delay-200" style={{ textTransform: 'none' }}>
          
          <p>
            hey, i'm yash.
          </p>

          <p>
            i'm interested in how ideas turn into things people care about.
          </p>

          <p>
            i spend most of my time around photography, filmmaking, storytelling, and creative direction — not as separate skills, but as different ways of understanding the same thing:how meaning is created. over time, i also started learning product, design, and tech, because i realized stories don't live in isolation. they live inside things people use.
          </p>

          <p>
            pxlcorp started as a place for me to explore all of this together.
          </p>

          <p>
            i didn't come into this with a business plan or a fixed outcome. i just knew i didn't want to wait until i felt "qualified" to begin. so i started making. films, videos, visuals, ideas — sometimes clear, sometimes confused — and shared them openly.
          </p>

          <p>
            what surprised me was that people didn't respond most to polish.they responded to honesty. to seeing the process. to watching something form instead of just being shown the final version.
          </p>

          <p>
            that shaped how i want to build.
          </p>

          <section className="space-y-5 py-4">
            <p>
              my vision for pxlcorp isn't to rush toward scale or labels. it's to become a space where story, product, and creativity grow together — slowly, intentionally, and in public.
            </p>
            
            <div className="border-l-2 border-pxl-red pl-4 space-y-1">
              <p>a place where experiments are allowed.</p>
              <p>where failure is part of learning.</p>
              <p>and where ideas are given time to find their shape.</p>
            </div>
          </section>

          <p>
            i don't claim to have everything figured out. i'm still learning, still questioning, still adjusting. but i'm serious about the direction i'm moving in — and about doing the work instead of just talking about it.
          </p>

          <p className="italic">
            <mark className="bg-pxl-yellow px-1">pxlcorp will evolve as i do.<br />
            let's see how far i can take it.</mark>
          </p>

          <p>
            if you're here, it probably means you care about building things with meaning too. i'm glad you found your way here.
          </p>

          {/* Signature */}
          <div className="pt-10 border-t border-black/20">
            <div className="flex flex-col items-end gap-1">
              <p className="italic text-lg md:text-xl">
              — yash,  <mark className="bg-pxl-yellow px-2 py-1">a curious mind</mark>
              </p>
              <p className="italic text-lg md:text-xl">
                pxlcorp
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
