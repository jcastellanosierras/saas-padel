import DialogCreateCourt from "./components/DialogCreateCourt"
import { isAdmin } from "@/utils/supabase/server"

export default async function CourtsLayout({ children }: {
  children: React.ReactNode
}) {
  const userIdAdmin = await isAdmin()

  return (
    <div className="w-full flex flex-col items-center justify-center pt-8">

      <main className="w-[90%] flex flex-col gap-8">
        <h1 className="text-4xl font-bold">Courts</h1>
        {userIdAdmin && (
          <section>
            <h2 className="text-2xl font-bold">Panel de administrador</h2>
            <DialogCreateCourt />
          </section>
        )}
        <section className="flex flex-col gap-4">
          {children}
        </section>
      </main>
    </div>
  )
}