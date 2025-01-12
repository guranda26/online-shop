import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export const GET = async () => {
  const cookieStore = cookies();

  if (!cookieStore) {
    return new Response("Cookie store not available", { status: 400 });
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch (error) {
            console.error("Error setting cookies:", error);
          }
        },
      },
    }
  );

  const { data, error } = await supabase.from("posts").select();

  if (error) {
    console.error("Error fetching data:", error);
    return new Response("Error fetching data", { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
