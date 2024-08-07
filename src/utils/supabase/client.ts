import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export const getUser = async () => {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  const profile = await supabase.from('profiles').select('*').eq('id', user?.id).single()

  return profile.data
}

export const isAdmin = async () => {
  const profile = await getUser()
  
  return profile.role === 'ADMIN'
}
