

# Chat Persistence and Model Fallback

## 1. localStorage Chat History (`src/components/AIChatWidget.tsx`)

- On mount, load messages from `localStorage.getItem('linfy-chat-history')` and use them as initial state (fall back to the default greeting if empty).
- After every new message (user or bot), save the updated messages array to localStorage.
- Keep history across page refreshes; clearing on close is optional (will preserve history).

## 2. Gemini Model Fallback (`supabase/functions/chat/index.ts`)

- Wrap the `gemini-2.0-flash` API call in a try/catch.
- If the response status is 429 (quota exceeded) or 404 (model not found), retry with `gemini-1.5-flash` as a fallback.
- If both fail, return the existing friendly error message.

## Files Changed

| File | Change |
|------|--------|
| `src/components/AIChatWidget.tsx` | Add localStorage load/save for messages |
| `supabase/functions/chat/index.ts` | Add fallback from `gemini-2.0-flash` to `gemini-1.5-flash` on 429/404 |

