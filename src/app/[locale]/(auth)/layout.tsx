import ThemeButton from "../../components/ThemeButton";
import { createClient } from "../../../utils/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return redirect("/");
  }

  return (
    <div className="h-screen text-center">
      <header className="bg-contactBackground p-10 flex justify-end">
        <ThemeButton />
      </header>
      <main className="main bg-contactBackground h-screen">{children}</main>
    </div>
  );
}
