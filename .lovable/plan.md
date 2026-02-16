

# Fix Chatbot: Switch to Working Gemini Model

## Problem
- `gemini-2.0-flash` is hitting 429 (free tier quota exhausted, limit: 0)
- `gemini-1.5-flash` returns 404 (removed from v1beta API)
- Both models in the current fallback chain are broken

## Solution
Update `supabase/functions/chat/index.ts` to:

1. **Use `gemini-2.0-flash-lite`** as the primary model (lighter model, available on free tier with separate quota)
2. **Keep `gemini-2.0-flash` as fallback** in case the lite model has issues
3. **Remove `gemini-1.5-flash`** entirely (it no longer exists in v1beta)
4. **Add friendly rate-limit message** for 429 errors: "I'm receiving too many messages right now. Please try again in 30 seconds."
5. **Simplify the fallback loop** with cleaner error handling

## Alternative
If the lite model also hits quota limits, you'll need to enable billing on your Google AI Studio account at https://aistudio.google.com. The logs show "limit: 0" which means the free tier is completely used up.

## Technical Details

### File: `supabase/functions/chat/index.ts`
- Change model list from `["gemini-2.0-flash", "gemini-1.5-flash"]` to `["gemini-2.0-flash-lite", "gemini-2.0-flash"]`
- Add specific 429 error response with retry guidance
- Keep the existing loop structure but with correct models
- No other files need changes

### Deployment
- Redeploy the `chat` edge function after the update

