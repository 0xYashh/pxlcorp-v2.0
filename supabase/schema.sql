-- Add user_color to messages if it doesn't exist
ALTER TABLE IF EXISTS messages ADD COLUMN IF NOT EXISTS user_color TEXT;
-- Add category to messages if it doesn't exist (default to 'casual')
ALTER TABLE IF EXISTS messages ADD COLUMN IF NOT EXISTS category TEXT DEFAULT 'casual';

-- Create waitlist table for Hanabi/Skrib if it doesn't exist
CREATE TABLE IF NOT EXISTS hanabi_waitlist (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    feature_recommendations TEXT
);

-- Note: The publication "supabase_realtime" handles the broadcast.
-- If the error "already member of publication" occurs, it means realtime is already active for this table.
-- You can safely ignore that error.
