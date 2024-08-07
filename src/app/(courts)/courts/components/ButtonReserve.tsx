'use client'

import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import DialogReserveCourt from './DialogReserveCourt'
import { createClient } from '@/utils/supabase/client'

const courtIsReserved = async (turnId: number) => {
  const supabase = createClient()

  const { data, error } = await supabase.from('reserves').select().eq('id_turn', turnId)

  if (error) {
    throw new Error('Error fetching reserves')
  }

  return data.length > 0
}

export default function ButtonReserve({
  turnId,
  startTime,
  endTime,
}: {
  turnId: number
  startTime: string
  endTime: string
}) {
  const [isReserved, setIsReserved] = useState<boolean>(true)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const checkIsReserved = async () => {
    const reserved = await courtIsReserved(turnId)

    setIsReserved(reserved)
  }

  useEffect(() => {
    checkIsReserved()
  }, [])

  return (
    <>
      <Button disabled={isReserved} variant={'outline'} onClick={() => setOpenDialog(true)}>
        {startTime} - {endTime}
      </Button>

      <DialogReserveCourt turnId={turnId} open={openDialog} setOpen={setOpenDialog} />
    </>
  )
}
