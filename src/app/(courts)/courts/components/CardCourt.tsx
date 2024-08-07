import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { createClient } from '@/utils/supabase/server'
import Image from 'next/image'
import { isAdmin } from '@/utils/supabase/server'
import DropdownMenuCourtOptions from './DropdownMenuCourtOptions'
import ButtonReserve from './ButtonReserve'
import { getFormattedTime } from '@/utils/formatDate'

export default async function CardCourt({
  court,
}: {
  court: {
    id: number
    name: string
  }
}) {
  const supabase = createClient()

  const userIdAdmin = await isAdmin()

  const { data } = await supabase
    .from('turns')
    .select('*')
    .eq('court_id', court.id)

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between'>
          <span>{court.name}</span>
          {userIdAdmin && (
            <DropdownMenuCourtOptions courtId={court.id} />
          )}
        </CardTitle>
        <CardDescription>
          <Image
            src='/pista-padel.jpeg'
            alt='Imagen de una pista de pádel'
            width={300}
            height={200}
          />
        </CardDescription>
      </CardHeader>
      <CardContent>
        Estos son los turnos disponibles:
        <div className='flex gap-2'>
          {data?.map((turn) => (
            <ButtonReserve
              key={`button-${turn.id}`}
              turnId={turn.id}
              startTime={getFormattedTime(new Date(turn.start_time))}
              endTime={getFormattedTime(new Date(turn.end_time))}
            />
          ))}
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Turnos</p>
      </CardFooter> */}
    </Card>
  )
}
