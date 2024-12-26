import { NextRequest } from "next/server";
import { createClient } from "@/src/utils/supabase/server";

export const GET = async (req: NextRequest) => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cart")
    .select("*,products(name, image_link, price)");

  if (error) {
    console.error("Error fetching cartData", error);
  }

  return Response.json(data);
};
