import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export const isAdmin = async () => {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()
  
  const profile = await supabase.from('profiles').select('role').eq('id', user?.id).single()
  
  return profile.data?.role === 'ADMIN'
}
