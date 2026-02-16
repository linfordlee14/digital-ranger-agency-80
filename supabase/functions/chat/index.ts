import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Linfy AI, the official assistant for Linfy Tech — a company at the intersection of cybersecurity and wildlife conservation technology.

**About Linfy Tech:**
- Founded with the mission to protect both digital ecosystems and natural ecosystems.
- Products:
  • RhinoGuardians — AI-powered wildlife monitoring and anti-poaching technology using drones, sensors, and real-time analytics.
  • CyberSentinel — Enterprise cybersecurity platform offering threat detection, incident response, and compliance management.
- Services: cybersecurity consulting, penetration testing, wildlife tech deployment, custom AI solutions.

**Rules:**
- Keep responses concise — maximum 3 sentences unless the user asks for more detail.
- If asked about pricing, direct users to contact the team via the website contact form or email.
- Stay on-topic: only discuss Linfy Tech products, services, cybersecurity, wildlife conservation, and related technology.
- Be friendly, professional, and enthusiastic about the mission.
- If you don't know something specific about Linfy Tech, say so honestly and suggest contacting the team.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          reply: "I'm currently in demo mode. The AI backend is being configured. Please try again later!",
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { message, history } = await req.json();

    // Build conversation contents for Gemini
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    // Add conversation history
    if (history && Array.isArray(history)) {
      for (const msg of history) {
        contents.push({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }],
        });
      }
    }

    // Add the current user message
    contents.push({ role: "user", parts: [{ text: message }] });

    const models = ["gemini-2.0-flash-lite", "gemini-2.0-flash"];
    const requestBody = JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
    });

    let lastError = "";
    for (const model of models) {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: requestBody,
        }
      );

      if (response.ok) {
        const data = await response.json();
        const reply =
          data?.candidates?.[0]?.content?.parts?.[0]?.text ||
          "I couldn't generate a response. Please try again.";
        return new Response(JSON.stringify({ reply }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      lastError = await response.text();
      console.error(`${model} error (${response.status}):`, lastError);

      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            reply: "I'm receiving too many messages right now. Please try again in 30 seconds.",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Only fallback on 404 (model not found); break on other errors
      if (response.status !== 404) break;
    }

    return new Response(
      JSON.stringify({
        reply: "I'm having trouble connecting right now. Please try again in a moment.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({
        reply: "Something went wrong. Please try again later.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
