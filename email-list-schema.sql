-- Run once in Supabase: SQL Editor → New query → paste → Run

create table if not exists public.email_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now(),
  constraint email_subscribers_email_key unique (email)
);

create index if not exists email_subscribers_created_at_idx
  on public.email_subscribers (created_at desc);

alter table public.email_subscribers enable row level security;
