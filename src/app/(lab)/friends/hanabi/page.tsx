'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { supabase } from '@/lib/supabase';

export default function HanabiWaitlist() {
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
                feature_recommendations: comment.trim()
            }]);

        if (error) {
            console.error('waitlist error', error);
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

                {/* Header */}
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-pxl-red leading-none lowercase">
                        hanabi
                    </h1>
                    <div className="space-y-4">
                        <p className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-relaxed">
                            build something in 7 days and show it in 60 seconds.
                        </p>
                        <p className="text-pxl-red font-bold text-sm uppercase tracking-[0.4em] animate-pulse">
                            just build → ship → repeat.
                        </p>
                    </div>
                </div>

                <hr className="border-zinc-100 dark:border-zinc-800" />

                {/* How it works */}
                <div className="space-y-10">
                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400 text-center md:text-left">How it works</h2>
                    <div className="grid md:grid-cols-1 gap-8">
                        {[
                            { step: "01", title: "post an idea", desc: "share a problem or something you want built. keep it short." },
                            { step: "02", title: "start a 7-day build", desc: "build your own idea — or build someone else’s." },
                            { step: "03", title: "remix or join", desc: "see something interesting? remix it and take it in a new direction. or join the original build and collaborate." },
                            { step: "04", title: "share updates (optional)", desc: "drop quick screenshots or progress during the week." },
                            { step: "05", title: "sunday = demo day", desc: "record a 60-second demo of what you shipped." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 group">
                                <span className="text-pxl-red font-black text-2xl opacity-100 font-mono leading-none pt-1">{item.step}</span>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-lg uppercase tracking-tight text-white">{item.title}</h3>
                                    <p className="text-zinc-300 dark:text-zinc-300 font-medium leading-relaxed max-w-xl opacity-90">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <hr className="border-zinc-100 dark:border-zinc-800" />

                {/* Shipped this week */}
                <div className="max-w-2xl mx-auto w-full space-y-8 bg-zinc-950/40 backdrop-blur-xl p-6 md:p-10 rounded-2xl border border-white/10 shadow-2xl">
                    <div className="space-y-2">
                        <h2 className="text-pxl-red font-bold text-xs uppercase tracking-[0.3em]">shipped this week</h2>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">the weekly showcase.</h3>
                    </div>

                    <p className="text-zinc-300 dark:text-zinc-300 font-medium leading-relaxed max-w-2xl opacity-90">
                        every sunday, finished builds go to the showcase. real apps, real progress, explained through short 60-second demo videos.
                    </p>

                    <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-widest opacity-40">
                        <span>react</span>
                        <span className="opacity-20">•</span>
                        <span>comment</span>
                        <span className="opacity-20">•</span>
                        <span>join next week’s build</span>
                        <span className="opacity-20">•</span>
                        <span>remix the idea</span>
                    </div>
                </div>

                {/* Form */}
                <div className="space-y-8">
                    <div className="space-y-4 text-center">
                        <p className="text-xl font-medium italic">
                            if you’re active on hanabi, it means you ship.
                        </p>
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Join the waitlist</h2>
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-30 px-1">Email address</label>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                className="w-full bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-pxl-red shadow-sm transition-all text-white placeholder:text-zinc-500"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase tracking-widest opacity-30 px-1">Recommend a feature (Optional)</label>
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="what would make hanabi perfect for you?"
                                rows={4}
                                className="w-full bg-zinc-950/40 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-pxl-red shadow-sm transition-all resize-none text-white placeholder:text-zinc-500"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={status === 'loading' || status === 'success'}
                                className="px-8 py-2 bg-pxl-red/60 text-white rounded-sm font-jersey text-lg hover:bg-pxl-red transition-all disabled:opacity-50 shadow-lg shadow-pxl-red/20 active:scale-95"
                            >
                                {status === 'loading' ? 'lighting the spark...' : status === 'success' ? 'you are in the circle.' : 'join hanabi waitlist.'}
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
