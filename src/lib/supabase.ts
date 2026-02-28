import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const proxyUrl = 'https://pxlcorp.pxlcorplabs.workers.dev'

// We use the proxy URL for the client to bypass ISP blocking
export const supabase = createClient(proxyUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
    }
})
