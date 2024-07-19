import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server"
import DialogCreateCourt from "./components/DialogCreateCourt"

export default async function CourtsLayout() {
  const supabase = createClient()

  const { data: { user } } = await supabase.auth.getUser()
  
  const profile = await supabase.from('profiles').select('ROLE').eq('id', user?.id).single()

  return (
    <div className="w-full flex flex-col items-center justify-center">

      <main className="w-[90%] flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Courts</h1>
        {profile && profile.data?.ROLE === 'ADMIN' && (
          <section>
            <h2 className="text-2xl font-bold">Panel de administrador</h2>
            <DialogCreateCourt />
          </section>
        )}
        <section className="flex flex-col gap-4">
          
        </section>
      </main>
    </div>
  )
}