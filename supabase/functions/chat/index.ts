import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.21.0";
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

async function generateWithModel(apiKey: string, modelName: string, message: string, history: Array<{ sender: string; text: string }>) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: modelName });

  const chat = model.startChat({
    history: [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: "Understood. I am Linfy AI, ready to help!" }] },
      ...history.map(msg => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.text }],
      })),
    ],
  });

  const result = await chat.sendMessage(message);
  const response = await result.response;
  return response.text();
}

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
    const chatHistory = history && Array.isArray(history) ? history : [];

    let reply: string;
    try {
      reply = await generateWithModel(apiKey, "gemini-2.0-flash", message, chatHistory);
    } catch (primaryError: any) {
      const status = primaryError?.status || primaryError?.message || "";
      if (String(status).includes("429") || String(status).includes("404")) {
        console.warn(`gemini-2.0-flash failed (${status}), falling back to gemini-2.0-flash-lite`);
        try {
          reply = await generateWithModel(apiKey, "gemini-2.0-flash-lite", message, chatHistory);
        } catch (fallbackError) {
          console.error("Fallback also failed:", fallbackError);
          return new Response(
            JSON.stringify({
              reply: "I'm receiving too many messages right now. Please try again in 30 seconds.",
            }),
            { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
          );
        }
      } else {
        throw primaryError;
      }
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
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
