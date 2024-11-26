import { createClient } from "../../../utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: cities } = await supabase.from("Countries").select();

  return (
    <div>
      <h1>City List</h1>
      <ul>
        {cities.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
