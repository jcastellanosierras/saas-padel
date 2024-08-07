import { createClient, getUser } from '@/utils/supabase/server'
import CardReserve from './components/CardReserve'
import { getFormattedDate, getFormattedTime } from '@/utils/formatDate'

export default async function ReservesPage() {
  const user = await getUser()

  const supabase = createClient()

  const { data: reserves, error } = await supabase.from('reserves').select().eq('id_profile', user.id)

  const turns = []

  if (reserves) {
    for (const reserve of reserves) {
      const { data: turn } = await supabase.from('turns').select().eq('id', reserve.id_turn).single()
  
      turns.push(turn)
    }
  }

  if (error) {
    throw new Error('Error fetching reserves: ' + error.message)
  }

  return (
    <>
      <h1 className='text-4xl font-bold'>Mis reservas</h1>
      <ul className='flex gap-4'>
        {reserves.map(reserve => (
          <CardReserve
            key={reserve.id}
            day={getFormattedDate(new Date(turns.find(turn => turn.id === reserve.id_turn)?.start_time))}
            startTime={getFormattedTime(new Date(turns.find(turn => turn.id === reserve.id_turn)?.start_time))}
            endTime={getFormattedTime(new Date(turns.find(turn => turn.id === reserve.id_turn)?.end_time))}
          />
        ))}
      </ul>
    </>
  )
}
