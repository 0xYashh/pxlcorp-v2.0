'use client';

import React from 'react';
import Link from 'next/link';
import { waitlistItems } from '@/constants/friends-data';

export function WaitlistBoard() {
    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-pxl-red rounded-full"></span>
                the cool things we are making.
            </h2>

            <div className="grid gap-4">
                {waitlistItems.map((item) => (
                    <div
                        key={item.id}
                        className="p-5 bg-white dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800 rounded-2xl transition-all group shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg text-pxl-red">{item.name}</h3>
                            <span className="text-[10px] px-2.5 py-1 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-100/50 dark:border-zinc-800 opacity-80 uppercase tracking-widest text-zinc-500 font-medium">
                                {item.status}
                            </span>
                        </div>
                        <p className="text-[13px] text-zinc-500 dark:text-zinc-400 font-light leading-relaxed mb-4">
                            {item.description}
                        </p>
                        <div className="flex gap-3">
                            {item.name.toLowerCase() === 'hanabi' ? (
                                <Link
                                    href="/friends/hanabi"
                                    className="inline-flex items-center gap-2 bg-pxl-red/60 text-white px-5 py-1.5 rounded-sm font-jersey text-sm hover:bg-pxl-red transition-all active:scale-95"
                                >
                                    + join waitlist.
                                </Link>
                            ) : item.name.toLowerCase() === 'skrib' ? (
                                <Link
                                    href="/friends/skrib"
                                    className="inline-flex items-center gap-2 bg-pxl-red/60 text-white px-5 py-1.5 rounded-sm font-jersey text-sm hover:bg-pxl-red transition-all active:scale-95"
                                >
                                    try it.
                                </Link>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
