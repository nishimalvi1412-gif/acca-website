-- Run this once in Supabase → SQL Editor (free tier, no cost)
-- This creates the table that enforces "one purchase = one user, no resale"

create table purchases (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) not null,
  course_code text not null,
  razorpay_payment_id text not null,
  amount_paid integer not null, -- in paise
  created_at timestamptz default now(),
  unique (user_id, course_code) -- prevents duplicate purchase records
);

-- Row Level Security: a user can only ever see their OWN purchase records.
-- This is what actually enforces privacy — without this, any logged-in
-- user could query and see everyone's purchases.
alter table purchases enable row level security;

create policy "Users can view their own purchases"
  on purchases for select
  using (auth.uid() = user_id);

-- Inserts happen only from your server-side payment verification code
-- (never from the browser directly), so no insert policy is granted here.
