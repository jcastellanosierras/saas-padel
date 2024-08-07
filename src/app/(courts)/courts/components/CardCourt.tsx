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

const getFormattedTime = (date: Date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

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
        <div>
          {data?.map((turn) => (
            <Button key={turn.id} variant={'outline'}>
              {getFormattedTime(new Date(turn.start_time))} -{' '}
              {getFormattedTime(new Date(turn.end_time))}
            </Button>
          ))}
        </div>
      </CardContent>
      {/* <CardFooter>
        <p>Turnos</p>
      </CardFooter> */}
    </Card>
  )
}
