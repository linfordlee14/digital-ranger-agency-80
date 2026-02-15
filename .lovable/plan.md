

# Gemini-Powered Linfy AI Chatbot

## Overview
Build a secure AI chatbot using a Supabase Edge Function as the backend to call the Gemini API, keeping the API key hidden from the frontend.

## Step 1: Store the Gemini API Key as a Supabase Secret

- Use Lovable's secret management to securely store your `GEMINI_API_KEY`
- You'll need to provide your Google Gemini API key (from [Google AI Studio](https://aistudio.google.com/apikey))
- The key will only be accessible server-side in edge functions

## Step 2: Create the Edge Function (`supabase/functions/chat/index.ts`)

- Receives POST requests with the user's message and conversation history
- Retrieves `GEMINI_API_KEY` from `Deno.env.get()`
- Calls the Gemini API using `fetch` (no SDK needed in Deno)
- Includes the Linfy Tech system prompt server-side (invisible to users):
  - Company info, products (RhinoGuardians, CyberSentinel), services
  - Rules: max 3 sentences, pricing redirect, stay on-topic
- Returns the AI response as JSON
- Includes proper CORS headers
- Graceful error handling for missing key or API failures

## Step 3: Update the Chat Widget (`src/components/AIChatWidget.tsx`)

- Replace the placeholder `setTimeout` reply with a real call to the edge function via `supabase.functions.invoke('chat', ...)`
- Add a "Linfy AI is typing..." indicator while waiting
- Handle errors gracefully:
  - Missing API key: "I'm currently in demo mode..."
  - Network errors: friendly fallback message
- Keep all existing UI styling (glassmorphism, message bubbles, animations)

## Technical Details

```text
Frontend (AIChatWidget.tsx)
    |
    | POST via supabase.functions.invoke('chat')
    v
Edge Function (supabase/functions/chat/index.ts)
    |
    | fetch() to Gemini API
    | GEMINI_API_KEY from Deno.env
    | System prompt embedded server-side
    v
Google Gemini API --> Response --> Frontend
```

### Edge Function Config (`supabase/config.toml`)
- Add `[functions.chat]` with `verify_jwt = false` (public chatbot, no auth required)

### Files Changed
| File | Action |
|------|--------|
| `supabase/functions/chat/index.ts` | Create |
| `supabase/config.toml` | Update (add chat function config) |
| `src/components/AIChatWidget.tsx` | Update (real API calls, typing indicator, error handling) |

### Gemini Model
- Will use `gemini-2.0-flash` for fast, cost-effective responses

