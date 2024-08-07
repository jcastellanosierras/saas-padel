import DialogCreateCourt from "./components/DialogCreateCourt"
import { isAdmin } from "@/utils/supabase/server"

export default async function CourtsLayout({ children }: {
  children: React.ReactNode
}) {
  const userIdAdmin = await isAdmin()

  return (
    <>
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
    </>
      
  )
}