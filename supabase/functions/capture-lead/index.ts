import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, source } = await req.json();

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Save to database
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: dbError } = await supabase
      .from("leads")
      .insert({ email, source: source || "unknown" });

    if (dbError) {
      console.error("DB insert error:", dbError);
    }

    // Send to MailerLite
    const mailerliteKey = Deno.env.get("MAILERLITE_API_KEY");
    if (!mailerliteKey) {
      console.error("MAILERLITE_API_KEY not configured");
      return new Response(
        JSON.stringify({ success: true, warning: "Saved locally, MailerLite not configured" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Calling MailerLite for:", email);
    const mlResponse = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${mailerliteKey}`,
      },
      body: JSON.stringify({
        email,
        fields: { source: source || "unknown" },
      }),
    });

    const mlBody = await mlResponse.text();
    console.log(`MailerLite response [${mlResponse.status}]:`, mlBody);

    if (!mlResponse.ok) {
      return new Response(
        JSON.stringify({ success: true, mailerlite_status: mlResponse.status, mailerlite_error: mlBody }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, mailerlite_status: mlResponse.status }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("capture-lead error:", error);
    return new Response(
      JSON.stringify({ error: "Error interno" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
