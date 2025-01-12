import { createClient } from "@/src/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = await createClient();
  const { data: user } = await supabase.auth.getUser();

  if (!user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("user_id", user.id);

    if (error) {
      console.error("Error clearing cart:", error);
      return NextResponse.json(
        { error: "Failed to clear cart" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export const config = {
  runtime: "edge",
};
