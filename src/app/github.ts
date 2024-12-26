import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = "SUPABASE_CLIENT_API_KEY";

const SUPABASE_URL = "https://ouupyyaxhbcnkxmmjyfm.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });
}

// async function signOut() {
//   const { error } = await supabase.auth.signOut();
// }
