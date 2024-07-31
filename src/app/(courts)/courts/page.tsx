import { createClient } from "@/utils/supabase/server"
import CardCourt from "./components/CardCourt"

export default async function CourtsPage() {
  const supabase = createClient()

  const { data: courts } = await supabase.from('courts').select('*')

  return (
    <>
      <h2>Pistas disponibles</h2>
      {courts?.map(court => (
        <CardCourt key={court.id} court={court} />
      ))}
    </>
  )
}
