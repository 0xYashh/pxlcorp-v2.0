import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'contact | pxlcorp',
  description: 'get in touch with pxlcorp',
  openGraph: {
    title: 'contact | pxlcorp',
    description: 'get in touch with pxlcorp',
    images: ['/images/contacts link.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'contact | pxlcorp',
    description: 'get in touch with pxlcorp',
    images: ['/images/contacts link.png'],
  },
}

export default function Contact() {
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
          <mark className="bg-pxl-yellow px-2 py-1">let's connect</mark>
        </p>
        <h1 className="font-ztbros text-pxl-red text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          contact.
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="font-instrument text-black text-base md:text-lg lg:text-xl leading-relaxed space-y-8 animate-fade-in-up delay-200" style={{ textTransform: 'none' }}>
          
          <p>
            whether you want to collaborate, share an idea, give feedback, or just say hi — we're always open to hearing from you.
          </p>

          <p>
            pxlcorp is built in public, and that means conversations matter just as much as the work itself.
          </p>

          <section className="space-y-6 py-4">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl">reach out</h2>
            
            <div className="space-y-4">
              {/* Instagram */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-black/60 min-w-[80px]">instagram</span>
                <Link 
                  href="https://instagram.com/pxlcorp.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <mark className="bg-pxl-yellow px-2 py-1">instagram.com/pxlcorp.xyz</mark>
                </Link>
              </div>

              {/* Gmail */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-black/60 min-w-[80px]">email</span>
                <Link 
                  href="mailto:pxlcorplabs@gmail.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  <mark className="bg-pxl-yellow px-2 py-1">pxlcorplabs@gmail.com</mark>
                </Link>
              </div>

              {/* X / Twitter */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="text-black/60 min-w-[80px]">x</span>
                <Link 
                  href="https://x.com/pxlcorpHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <mark className="bg-pxl-yellow px-2 py-1">x.com/pxlcorpHQ</mark>
                </Link>
              </div>
            </div>
          </section>

          <p>
            no formalities needed. just drop a message wherever feels right.
          </p>

          <p className="italic">
            we read everything. we reply when it makes sense. and sometimes, the best ideas come from unexpected conversations.
          </p>

          {/* Signature */}
          <div className="pt-10 border-t border-black/20">
            <div className="flex flex-col items-end gap-1">
              <p className="italic text-lg md:text-xl">
              <mark className="bg-pxl-yellow px-2 py-1"> see you around,</mark>
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

