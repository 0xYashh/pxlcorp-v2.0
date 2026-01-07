import Image from 'next/image'
import Link from 'next/link'

export default function Curious() {
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

      {/* Manifesto Title */}
      <div className="text-center py-8 md:py-12 animate-fade-in-up delay-100">
        <p className="font-instrument italic text-lg md:text-xl mb-4" style={{ textTransform: 'none' }}>
          <mark className="bg-pxl-yellow px-2 py-1">curious about us?</mark>
        </p>
        <h1 className="font-ztbros text-pxl-red text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
          the manifesto.
        </h1>
      </div>

      {/* Manifesto Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pb-16 md:pb-24">
        <div className="font-instrument text-black text-base md:text-lg lg:text-xl leading-relaxed space-y-12 animate-fade-in-up delay-200" style={{ textTransform: 'none' }}>
          
          {/* About pxlcorp */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">about pxlcorp</h2>
            <p>
              pxlcorp is a small creative lab — a tiny internet space where we experiment, build, and learn in public.
            </p>
            <p>
              it's not a fully formed company yet.<br />
              it's not a single product.<br />
              it's a direction.
            </p>
            <p>
              pxlcorp exists because a lot of things today feel rushed.
            </p>
            <p>
              people jump straight into building, optimizing, and scaling before understanding what they're actually making or who it's for. storytelling gets added later. users get reduced to numbers.
            </p>
            <p className="italic text-black/80">
              we think something important gets lost there.
            </p>
          </section>

          {/* How we think */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">how we think</h2>
            <p>
              we believe people connect with ideas before they connect with products.
            </p>
            <p>
              when something has meaning, people stay patient with it.<br />
              they give feedback.<br />
              they allow it to grow.
            </p>
            <p>
              when there's no meaning, even the best execution feels empty.
            </p>
            <p className="italic text-black/80 border-l-2 border-pxl-red pl-4">
              we don't think early-stage work needs to look impressive.<br />
              it needs to feel real.
            </p>
          </section>

          {/* How pxlcorp works */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">how pxlcorp works</h2>
            <p>
              pxlcorp is intentionally unfinished.
            </p>
            <p>
              not because it's incomplete,<br />
              but because it's still figuring things out.
            </p>
            <p>here, we spend time on:</p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>experimenting openly instead of quietly perfecting things</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>making films, videos, and narratives around ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>learning product, design, storytelling, and tech together</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>documenting what works, what doesn't, and why</span>
              </li>
            </ul>
            <p className="">
              some experiments won't go anywhere.<br />
              some might turn into real products.<br />
              some will change shape completely.
            </p>
          </section>

          {/* Sharing the process */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">sharing the process</h2>
            <p>
              we choose to share the process, not just the outcomes.
            </p>
            <p>
              unfinished work.<br />
              uncertain decisions.<br />
              things that didn't land the way we hoped.
            </p>
            <p>
             we just want to stay honest about how things are actually built.
            </p>
            <p>
              we don't see rejection or failure as endpoints.<br />
              they're signals that help us adjust direction and taste.
            </p>
          </section>

          {/* What's next */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">what's next</h2>
            <p>
              pxlcorp has multiple ideas it wants to explore over time.
            </p>
            <p>
              before committing deeply to any one direction,<br />
              we want to understand:
            </p>
            <ul className="space-y-3 pl-1">
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>who's paying attention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>what people are struggling with</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pxl-red mt-1">→</span>
                <span>what actually resonates</span>
              </li>
            </ul>
            <p className="italic text-black/80">
              <mark className="bg-pxl-yellow px-1">this is less about launching quickly<br />
              and more about choosing what's worth building.</mark>
            </p>
          </section>

          {/* What pxlcorp really is */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">what pxlcorp really is</h2>
            <p>
              pxlcorp isn't a company yet.
            </p>
            <div className="border-l-2 border-pxl-red pl-4 space-y-1">
              <p>it's a space to think clearly.</p>
              <p>a place to try without pretending.</p>
              <p>a way to learn by doing instead of waiting.</p>
            </div>
            <p className="italic text-black/80">
              <mark className="bg-pxl-yellow px-1">we're not trying to move fast for the sake of it.<br />
              we're trying to move with intention.</mark>
            </p>
          </section>

          {/* An open invitation */}
          <section className="space-y-5">
            <h2 className="font-ztbros text-pxl-red text-2xl md:text-3xl mb-6">an open invitation</h2>
            <p>
              this is a snapshot of how pxlcorp thinks right now.
            </p>
            <p>
              if you're building something, learning something, or questioning how things are usually done — you're welcome here.
            </p>
            <p>
              we don't have all the answers.<br />
              we're just serious about finding better ones.
            </p>
            <p>
              and if this makes sense to you,<br />
              you're already part of the journey.
            </p>
          </section>

          {/* Signature */}
          <div className="pt-10 border-t border-black/20">
            <div className="flex flex-col items-end gap-1">
              <p className="italic text-lg md:text-xl">
                — yash, <mark className="bg-pxl-yellow px-1">chief vibe officer</mark>
              </p>
              <p className="italic text-lg md:text-xl">
                pxlcorp
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center pt-8 animate-fade-in-up delay-300">
            <Link 
              href="https://tally.so/r/rjaK8o" 
              className="inline-block bg-pxl-red text-white font-jersey text-lg md:text-xl px-8 py-4 rounded-sm hover:bg-red-600 transition-colors"
              style={{ textTransform: 'lowercase' }}
            >
              interested ? leave a signal. →
            </Link>
            <p className="font-jersey text-black/60 text-sm mt-4" style={{ textTransform: 'lowercase' }}>
             we just want to know something from you...
            </p>
          </div>

        </div>
      </div>
    </main>
  )
}
