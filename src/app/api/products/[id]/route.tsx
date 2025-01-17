import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const cookieStore = cookies();

  if (!cookieStore) {
    return new Response("Cookie store not available", { status: 400 });
  }

  const productId = params.id;

  if (!productId) {
    return new Response("Product ID is required", { status: 400 });
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

  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("id", productId)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    return new Response("Error fetching product", { status: 500 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
};
