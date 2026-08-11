import { createClient } from "@supabase/supabase-js";

// Values come from your Supabase project settings (free tier).
// Never commit the actual values — put them in .env.local instead.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Checks whether the currently logged-in user has purchased a given course.
 * This is the function that gates course content — call it in any
 * page/component that shows paid material before rendering it.
 */
export async function hasPurchased(courseCode: string): Promise<boolean> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data, error } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("course_code", courseCode)
    .maybeSingle();

  if (error) {
    console.error("Purchase check failed:", error.message);
    return false;
  }

  return !!data;
}
