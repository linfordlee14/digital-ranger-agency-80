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
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
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

    // Build messages array in OpenAI-compatible format
    const messages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...chatHistory.map((msg: { sender: string; text: string }) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      })),
      { role: "user", content: message },
    ];

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages,
        stream: false,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            reply: "I'm receiving too many messages right now. Please try again in a moment.",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({
            reply: "The AI service needs attention. Please contact the team.",
          }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "I couldn't generate a response. Please try again.";

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
