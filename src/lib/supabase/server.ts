import "server-only";

import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

function getPublicSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error("Supabase public configuration is missing.");
  }

  return { publishableKey, url };
}

function getSupabaseServiceRoleKey() {
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error("Supabase service role configuration is missing.");
  return key;
}

// This client is for authenticated server reads and admin session handling only.
// Public writes will use validated route handlers in the lead-capture phase.
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const { publishableKey, url } = getPublicSupabaseConfig();

  return createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
    },
  });
}

// Use this client only inside server-only route handlers and services.
// It is never imported by a client component or exposed in browser code.
export function createSupabaseServiceRoleClient() {
  const { url } = getPublicSupabaseConfig();

  return createClient(url, getSupabaseServiceRoleKey(), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
