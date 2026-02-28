'use client';

import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '@/lib/supabase';

const mockFounderMessage = { id: 'founder-1', user_handle: 'yashpxl', message_text: 'leave a message for us... or anything you wanna share about us.', created_at: new Date().toISOString(), is_founder: true, user_color: '#EF4562' };

const TWITCH_COLORS = [
    '#FF4A4A', '#FF9F2E', '#FFD233', '#46FF46', '#33E0FF',
    '#4D7CFF', '#9333FF', '#FF33FF', '#FF3385', '#00D1FF',
    '#2ECC71', '#F1C40F', '#E67E22', '#9B59B6', '#1ABC9C'
];

const CATEGORIES = [
    { id: 'casual', label: 'casual', placeholder: 'say something to the crew...' },
    { id: 'ideas', label: 'idea', placeholder: 'drop a concept, keep it wild...' },
    { id: 'feedback', label: 'feedback', placeholder: 'what should we build next?' },
];

export function DiscussionBoard() {
    const [messages, setMessages] = useState<any[]>([]);
    const [input, setInput] = useState('');
    const [handle, setHandle] = useState('');
    const [selectedColor, setSelectedColor] = useState(TWITCH_COLORS[0]);
    const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial load and real-time subscription
    useEffect(() => {
        const fetchMessages = async () => {
            let query = supabase
                .from('messages')
                .select('*')
                .order('created_at', { ascending: true });

            if (activeCategory.id === 'casual') {
                // Include legacy messages where category is null
                query = query.or(`category.eq.casual,category.is.null`);
            } else {
                query = query.eq('category', activeCategory.id);
            }

            const { data, error } = await query;

            if (!error && data) {
                if (activeCategory.id === 'casual' && data.length === 0) {
                    setMessages([mockFounderMessage]);
                } else {
                    setMessages(data);
                }
            }
        };

        fetchMessages();

        // Subscribe to real-time events
        const channel = supabase
            .channel(`realtime_discussion_${activeCategory.id}`)
            .on('postgres_changes',
                {
                    event: 'INSERT',
                    schema: 'public',
                    table: 'messages'
                },
                (payload) => {
                    const msg = payload.new;
                    const isForActive = activeCategory.id === 'casual'
                        ? (!msg.category || msg.category === 'casual')
                        : msg.category === activeCategory.id;

                    if (isForActive) {
                        setMessages(current => {
                            const exists = current.find(m => m.id === msg.id);
                            if (exists) return current;
                            return [...current, msg];
                        });
                    }
                }
            )
            .subscribe();

        const savedHandle = localStorage.getItem('pxl_handle');
        const savedColor = localStorage.getItem('pxl_color');

        if (savedHandle) setHandle(savedHandle);
        if (savedColor && TWITCH_COLORS.includes(savedColor)) setSelectedColor(savedColor);

        return () => {
            supabase.removeChannel(channel);
        };
    }, [activeCategory]);

    useEffect(() => {
        localStorage.setItem('pxl_handle', handle);
    }, [handle]);

    useEffect(() => {
        localStorage.setItem('pxl_color', selectedColor);
    }, [selectedColor]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userHandle = handle.trim() || 'anon_friend';
        const messageText = input;

        const { error } = await supabase
            .from('messages')
            .insert([{
                user_handle: userHandle,
                message_text: messageText,
                user_color: selectedColor,
                is_founder: false,
                category: activeCategory.id
            }]);

        if (!error) {
            setInput('');
        } else {
            console.error('failed to send message', error);
        }
    };

    return (
        <div className="flex flex-col h-[650px] border border-zinc-100 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950/50 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
            {/* Header */}
            <div className="p-5 border-b border-zinc-50 dark:border-zinc-800 flex justify-between items-center bg-zinc-50/30 dark:bg-transparent">
                <h2 className="text-pxl-red font-bold flex items-center gap-2.5 text-xs uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                    yooo wanna say something?
                </h2>
            </div>

            {/* Category Switcher - Under Header */}
            <div className="flex gap-4 px-5 py-2 border-b border-zinc-50 dark:border-zinc-800 bg-zinc-50/10 dark:bg-transparent">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat)}
                        className={`text-[10px] font-black uppercase tracking-tighter transition-all ${activeCategory.id === cat.id ? 'text-pxl-red pb-0.5 border-b border-pxl-red' : 'text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100'}`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.map((msg) => (
                    <div key={msg.id} className="group animate-fade-in text-left">
                        <div className="flex items-center gap-2 mb-1">
                            <div
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                style={{ backgroundColor: msg.is_founder ? '#EF4562' : (msg.user_color || '#71717a') }}
                            ></div>
                            <span
                                className="font-bold text-xs"
                                style={{ color: msg.is_founder ? '#EF4562' : (msg.user_color || '#71717a') }}
                            >
                                {msg.user_handle}
                            </span>
                            <span className="text-[9px] opacity-20 tabular-nums lowercase">
                                {new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                        <p className="text-[13px] font-light leading-relaxed text-zinc-700 dark:text-zinc-200">
                            {msg.message_text}
                        </p>
                    </div>
                ))}
            </div>

            <div className="px-5 py-3 bg-zinc-50/30 dark:bg-zinc-900/20 border-t border-zinc-50 dark:border-zinc-800 overflow-x-auto">
                <div className="flex gap-2 items-center">
                    <span className="text-[9px] uppercase font-bold tracking-widest opacity-30 whitespace-nowrap mr-2">Pick Color:</span>
                    {TWITCH_COLORS.map(color => (
                        <button
                            key={color}
                            onClick={() => setSelectedColor(color)}
                            className={`w-4 h-4 rounded-full flex-shrink-0 transition-transform hover:scale-125 ${selectedColor === color ? 'ring-2 ring-pxl-red ring-offset-2 dark:ring-offset-zinc-900 scale-125' : 'opacity-60'}`}
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>

            <form onSubmit={handleSend} className="p-5 bg-zinc-50/50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex flex-col gap-3">
                    <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        placeholder="your name/handle (stay anon?)"
                        className="bg-transparent border-none p-0 text-[11px] opacity-60 focus:opacity-100 focus:outline-none focus:ring-0 transition-opacity"
                    />
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={activeCategory.placeholder}
                            className="flex-1 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-pxl-red/40 transition-all shadow-sm"
                        />
                        <button
                            type="submit"
                            disabled={!input.trim()}
                            className="bg-pxl-red text-white p-2.5 rounded-xl hover:brightness-110 active:scale-95 transition-all disabled:opacity-30 disabled:grayscale"
                        >
                            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="text-[9px] opacity-30 italic font-medium uppercase tracking-tight mt-3">
                    pxlcorp community board . {activeCategory.label} zone
                </p>
            </form>
        </div>
    );
}
