import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function GET() {
  const supabase = createClient()

  await supabase.auth.signOut()

  revalidatePath('/')
  redirect('/')
}