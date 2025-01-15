import { createClient } from "@/src/utils/supabase/server";

export const DELETE = async (req: Request) => {
  const supabase = await createClient();

  const { productId } = await req.json();

  if (!productId) {
    return new Response(JSON.stringify({ error: "Product ID is required" }), {
      status: 400,
    });
  }

  const { data, error } = await supabase
    .from("cart")
    .delete()
    .eq("product_id", productId);

  if (error) {
    console.error("Error deleting product from cart", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete product from cart" }),
      { status: 500 }
    );
  }

  return new Response(
    JSON.stringify({ message: "Product deleted successfully", data }),
    { status: 200 }
  );
};
