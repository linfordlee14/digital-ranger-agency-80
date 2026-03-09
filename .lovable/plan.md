

# Refactor: Use Official Google Generative AI SDK

## What Changes

Replace the raw `fetch` call in `supabase/functions/chat/index.ts` with the official `@google/generative-ai` SDK imported from `esm.sh`. This handles endpoint routing, request formatting, and response parsing automatically -- eliminating the 404/429 issues caused by manual URL construction.

## Technical Details

### File: `supabase/functions/chat/index.ts`

1. **Replace import**: Swap `import "https://deno.land/x/xhr@0.1.0/mod.ts"` with `import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.1.3"`
2. **SDK initialization**: Create `GoogleGenerativeAI` instance with the API key and get the `gemini-1.5-flash` model via `getGenerativeModel()`
3. **Chat API**: Use `model.startChat()` with mapped history and `systemInstruction: SYSTEM_PROMPT`, then `chat.sendMessage(message)` to get the reply
4. **Fallback**: If `gemini-1.5-flash` throws a 429 or 404 error, retry with `gemini-pro` as a backup model
5. **Error handling**: Wrap in try/catch; return friendly JSON messages for rate limits (429) and general errors
6. **Keep unchanged**: CORS headers, system prompt, demo mode check, conversation history format

### No other files are affected.

