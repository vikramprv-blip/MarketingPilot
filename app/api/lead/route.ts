import { createClient } from "@supabase/supabase-js";

console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
const form = await req.formData();

const email = form.get("email");
const source = form.get("source");

await supabase.from("leads").insert({
email,
source
});

return new Response("saved");
}
