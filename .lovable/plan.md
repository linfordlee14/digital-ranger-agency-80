

# Switch Chat Backend to Lovable AI Gateway

## What Changes

Replace the Google Generative AI SDK in `supabase/functions/chat/index.ts` with the Lovable AI Gateway. This eliminates the Gemini free-tier rate limit issues entirely since `LOVABLE_API_KEY` is already configured.

## Technical Details

### File: `supabase/functions/chat/index.ts`

- Remove `@google/generative-ai` import and `generateWithModel` helper
- Call `https://ai.gateway.lovable.dev/v1/chat/completions` with `LOVABLE_API_KEY`
- Use `google/gemini-3-flash-preview` as the model (recommended default)
- Send the existing `SYSTEM_PROMPT` as a system message, map conversation history to OpenAI-compatible `messages` format
- Non-streaming (use `supabase.functions.invoke` on client)
- Handle 429 (rate limit) and 402 (payment required) errors with friendly messages
- Keep CORS headers, demo mode check, and system prompt unchanged

### File: `src/components/AIChatWidget.tsx`

- No changes needed — already uses `supabase.functions.invoke('chat', ...)` and reads `data.reply`

### No other files affected

