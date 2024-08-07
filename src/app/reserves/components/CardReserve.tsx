import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Ellipsis } from 'lucide-react'
import DropdownMenuReserves from './DropdownMenuReserves'

export default function CardCourt({
  day,
  startTime,
  endTime,
}: {
  day: string
  startTime: string
  endTime: string
}) {
  return (
    <>
      <Card className='flex flex-col justify-center'>
        <CardHeader className='py-2 px-4'>
          <CardTitle className='flex flex-col gap-4 p-0'>
            <DropdownMenuReserves />
            <span>{day}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className='py-2 px-4'>
          <div className='flex items-center justify-center border-[1px] p-2 rounded-sm border-slate-200'>
            {startTime} - {endTime}
          </div>
        </CardContent>
      </Card>

    </>
  )
}
