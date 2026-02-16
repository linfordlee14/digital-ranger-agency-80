

# Switch to Gemini 1.5 Flash (Single Model, No Fallback)

## Change

Rewrite `supabase/functions/chat/index.ts` to:

- Remove the model array and loop entirely
- Hardcode a single fetch call to `gemini-1.5-flash`
- Endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`
- On 429, return: "I'm receiving too many messages right now. Please try again in 30 seconds."
- On any other error, return a generic friendly message
- Keep everything else (CORS, system prompt, conversation history) unchanged

## File

| File | Change |
|------|--------|
| `supabase/functions/chat/index.ts` | Remove model loop, hardcode `gemini-1.5-flash`, simplify error handling |

