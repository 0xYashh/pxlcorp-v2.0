import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen relative px-6 py-10 md:p-12 lg:p-16 flex flex-col">
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row justify-between flex-1">
        
        {/* Left side - Logo, tagline and file links */}
        <div className="flex flex-col lg:max-w-2xl">
          {/* Logo section */}
          <div>
            {/* pxlcorp logo - bytesized font */}
            <h1 className="font-bytesized text-pxl-yellow text-6xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide mb-4 flex items-end gap-1 animate-logo">
              <span>pxlcorp</span>
              <span className="inline-block w-3 h-3 md:w-3.5 md:h-3.5 bg-pxl-red mb-3 md:mb-4"></span>
            </h1>
            
            {/* Tagline */}
            <p className="font-jersey text-white text-xl sm:text-xl md:text-xl lg:text-2xl opacity-90 mt-4 md:mt-6 leading-relaxed animate-fade-in-up delay-200">
              creative lab for stories,<br className="md:hidden" /> products & experiments.
            </p>
          </div>

          {/* File-style links - Desktop: below tagline | Mobile: pushed down */}
          <div className="mt-12 lg:mt-16 space-y-6 md:space-y-5 lg:space-y-6 
                          order-last lg:order-none 
                          mb-0 lg:mb-0">
            {/* Curious about us link */}
            <Link href="/manifesto" className="file-link flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 lg:gap-4 cursor-pointer group animate-fade-in-up delay-400">
              <div className="w-10 h-12 md:w-8 md:h-10 lg:w-12 lg:h-14 relative flex-shrink-0">
                <Image 
                  src="/icons/file icon.svg" 
                  alt="file icon"
                  width={48}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-jersey text-white text-lg sm:text-xl md:text-lg lg:text-xl transition-colors duration-200 group-hover:text-pxl-red">curious about us?</span>
            </Link>

            {/* Founders note link */}
            <Link href="/foundernote" className="file-link flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 lg:gap-4 cursor-pointer group animate-fade-in-up delay-500">
              <div className="w-10 h-12 md:w-8 md:h-10 lg:w-12 lg:h-14 relative flex-shrink-0">
                <Image 
                  src="/icons/file icon.svg" 
                  alt="file icon"
                  width={48}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-jersey text-white text-lg sm:text-xl md:text-lg lg:text-xl transition-colors duration-200 group-hover:text-pxl-red">founder's note.txt</span>
            </Link>

            {/* Contact link */}
            <Link href="/contact" className="file-link flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3 lg:gap-4 cursor-pointer group animate-fade-in-up delay-600">
              <div className="w-10 h-12 md:w-8 md:h-10 lg:w-12 lg:h-14 relative flex-shrink-0">
                <Image 
                  src="/icons/file icon.svg" 
                  alt="file icon"
                  width={48}
                  height={56}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-jersey text-white text-lg sm:text-xl md:text-lg lg:text-xl transition-colors duration-200 group-hover:text-pxl-red">contact.txt</span>
            </Link>
          </div>
        </div>

        {/* Right side - Navigation folders */}
        {/* Mobile: horizontal row at bottom | Desktop: vertical on right */}
        <div className="mt-auto pt-6 md:pt-0 md:mt-0 lg:self-center animate-slide-in-right delay-300">
          {/* Dashed container - visible on all screens */}
          <div className="border border-dashed border-white/50 p-4 lg:p-6 rounded-sm">
            <div className="flex flex-row md:flex-col items-end justify-between md:justify-start md:items-center gap-2 md:gap-6 lg:gap-8">
              {/* Films folder */}
              <Link href="/films" className="nav-folder flex flex-col items-center cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative mb-1 lg:mb-2">
                  <Image 
                    src="/icons/Kawaii Folders.svg" 
                    alt="folder icon"
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-jersey text-white text-sm sm:text-base md:text-lg lg:text-xl px-3 lg:px-5 py-1 lg:py-1.5 bg-pxl-red/60 rounded-sm">films.</span>
              </Link>

              {/* Experiments folder */}
              <Link href="/experiments" className="nav-folder flex flex-col items-center cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative mb-1 lg:mb-2">
                  <Image 
                    src="/icons/Kawaii Folders.svg" 
                    alt="folder icon"
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-jersey text-white text-sm sm:text-base md:text-lg lg:text-xl px-3 lg:px-5 py-1 lg:py-1.5 bg-pxl-red/60 rounded-sm">experiments.</span>
              </Link>

              {/* Reads folder */}
              <Link href="/reads" className="nav-folder flex flex-col items-center cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative mb-1 lg:mb-2">
                  <Image 
                    src="/icons/Kawaii Folders.svg" 
                    alt="folder icon"
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>
                <span className="font-jersey text-white text-sm sm:text-base md:text-lg lg:text-xl px-3 lg:px-5 py-1 lg:py-1.5 bg-pxl-red/60 rounded-sm">reads.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
