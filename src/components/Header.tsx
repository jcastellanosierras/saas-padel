import { createClient } from "@/utils/supabase/server"
import Link from "next/link"
import HeaderNavigationMenu from "./HeaderNavigationMenu"

export default async function Header() {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()

  return (
    <header className="w-full h-16 bg-slate-900 text-slate-50 px-4 flex items-center justify-between">
      <Link href='/'>Inicio</Link>
      {user
        ? <HeaderNavigationMenu user={user} />
        : <Link href='login'>Iniciar sesión</Link>
      }
    </header>
  )
}

