'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { supabase } from '@/lib/supabase';

export default function SkribSpotlight() {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim()) return;

        setStatus('loading');

        const { error } = await supabase
            .from('hanabi_waitlist')
            .insert([{
                email: email.trim(),
                feature_recommendations: `[SKRIB FEEDBACK] ${comment.trim()}`
            }]);

        if (error) {
            console.error('feedback error', error);
            setStatus('error');
        } else {
            setStatus('success');
            setEmail('');
            setComment('');
        }
    };

    return (
        <main className="p-6 md:p-12 lg:p-20 flex flex-col items-center">
            <div className="max-w-3xl w-full space-y-16">
                {/* Back Link */}
                <Link
                    href="/friends"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
                >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    back to friends
                </Link>

                {/* Header & Logo */}
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="w-32 h-32 md:w-48 md:h-48 relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-2xl">
                        <Image
                            src="/icons/skrib icon.png"
                            alt="Skrib"
                            fill
                            className="object-cover p-5"
                        />
                    </div>
                    <div className="space-y-6 text-center md:text-left">
                        <div className="space-y-2">
                            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-pxl-red leading-none lowercase">
                                skrib
                            </h1>
                            <p className="text-xl font-medium tracking-tight text-white opacity-90 leading-relaxed max-w-sm">
                                a doodle sharing social app where you can share doodles with friends.
                            </p>
                        </div>

                        <a
                            href="https://skrib.pxlcorp.xyz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-pxl-red/60 text-white px-6 py-1.5 rounded-sm font-jersey text-lg hover:bg-pxl-red active:scale-95 transition-all shadow-lg shadow-pxl-red/10"
                        >
                            try it now.
                        </a>
                    </div>
                </div>

                <hr className="border-zinc-100 dark:border-zinc-800" />

                {/* The Story */}
                <div className="space-y-8">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">the story</h2>
                    <div className="space-y-6 text-zinc-800 dark:text-zinc-200 font-light leading-relaxed max-w-2xl text-lg md:text-xl">
                        <p>
                            skrib was my first app at pxlcorp. at first, i was so confused about what to make for my friends to use.
                        </p>
                        <p>
                            the idea hit me because i didn't have that scribble feature on my instagram chat. i decided to build a platform that felt kind of like insta, but was only for doodles and drawings.
                        </p>
                        <p>
                            i built it in just 3 days, and my friends absolutely love using it. they make really cool drawings there every day, you should definitely try it out :D
                        </p>
                        <div className="pt-4 not-italic">
                            <p className="text-pxl-red font-bold text-sm tracking-tight">
                                -- yash, founder at pxlcorp.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="border-zinc-100 dark:border-zinc-800" />

                {/* Feature Request Section */}
                <div className="max-w-2xl mx-auto w-full space-y-8 bg-zinc-950/40 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-pxl-red font-bold text-xs uppercase tracking-[0.3em]">future of skrib</h2>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">what should we build next?</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                        <div className="grid md:grid-cols-1 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-widest opacity-30 px-1">Email address</label>
                                <input
                                    required
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="pikachu@gmail.com"
                                    className="w-full bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-pxl-red shadow-sm transition-all text-white placeholder:text-zinc-500"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase tracking-widest opacity-30 px-1">Feature request</label>
                                <textarea
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    placeholder="tell us what you're missing..."
                                    rows={4}
                                    className="w-full bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-pxl-red shadow-sm transition-all resize-none text-white placeholder:text-zinc-500"
                                />
                            </div>
                        </div>

                        <div className="flex">
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="px-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50"
                            >
                                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Thank you!' : 'Submit Request'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* Footer Note */}
                <p className="text-center text-[10px] opacity-60 font-semibold text-white/80 uppercase tracking-[0.3em] pt-10">
                    pxlcorp . making cool things on the internet.
                </p>
            </div>
        </main>
    );
}
