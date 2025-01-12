import { createClient } from "@/src/utils/supabase/server";

export const GET = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cart")
    .select("*,products(name, image_link, price)");

  if (error) {
    console.error("Error fetching cartData", error);
  }

  return Response.json(data);
};
