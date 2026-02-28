import React from 'react';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { DiscussionBoard } from '@/components/friends/DiscussionBoard';
import { WaitlistBoard } from '@/components/friends/WaitlistBoard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'pxlcorp & friends',
    description: 'a shared space for the creators and dreamers building the pxlcorp universe.',
};

export default function FriendsPage() {
    return (
        <main className="p-6 md:p-12 lg:p-20">
            {/* Header / Nav */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8">
                <div>
                    <Link href="/" className="text-sm font-mono opacity-50 hover:opacity-100 transition-opacity mb-4 inline-block">
                        ← return to lab
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-4 text-white">
                        pxlcorp <span className="text-pxl-red">&</span> friends
                    </h1>
                    <p className="text-zinc-300 dark:text-zinc-300 max-w-xl font-medium leading-relaxed opacity-90">
                        this is a dedicated space for our creative lab where we list all the projects we are planning to build.
                        we wanna build this with our friends, making something should be fun, simple, and cool, shouldn't they?
                    </p>
                </div>

                <div className="flex flex-col items-end gap-3 text-right">
                    <div className="bg-zinc-950/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl max-w-sm shadow-2xl transition-all hover:shadow-pxl-red/5">
                        <p className="text-sm font-medium italic mb-5 leading-relaxed opacity-80">
                            i want to prove that any ordinary kid who dreams can reach greater heights if they believe. i was that kid too, wanting to fly high and reach greater heights. if i achieve this dream, i know i'll be inspiring young minds.
                        </p>
                        <p className="text-sm font-medium italic mb-5 leading-relaxed opacity-80">- yash, founder at pxlcorp</p>
                        <a
                            href="https://buymeacoffee.com/yashpxl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-pxl-red/60 text-white px-6 py-1.5 rounded-sm font-jersey text-sm hover:bg-pxl-red transition-all active:scale-95 shadow-lg shadow-pxl-red/10"
                        >
                            wanna support my journey?
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Pipeline Column */}
                <div className="lg:col-span-5 space-y-12">
                    <section className="animate-fade-in-up delay-100">
                        <WaitlistBoard />
                    </section>


                </div>

                {/* Discussion Column */}
                <div className="lg:col-span-7 animate-fade-in-up delay-200">
                    <DiscussionBoard />
                </div>
            </div>

            <footer className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/10 flex justify-between items-center opacity-60 text-[10px] font-mono uppercase tracking-widest text-white">
                <span>© 2026 pxlcorp creative lab</span>
            </footer>
        </main>
    );
}
