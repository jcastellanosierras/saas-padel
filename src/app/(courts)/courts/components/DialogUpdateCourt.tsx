'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'

export default function DialogCourt({ open, setOpen, courtId }: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  courtId: number
}) {
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()
  const { toast } = useToast()

  const courtNameRef = useRef<HTMLInputElement>(null)

  const supabase = createClient()

  const handleUpdateCourt = async () => {
    const courtName = courtNameRef.current?.value

    if (!courtName) {
      setOpen(false)
      return
    }

    setLoading(true)

    const res = await supabase.from('courts').update({ name: courtName }).eq('id', courtId)

    if (res.status !== 204) {
      toast({
        title: 'Error',
        description: 'No se ha podido crear la pista correctamente',
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Pista actualizada',
        description: 'La pista se ha creado correctamente',
        variant: 'default',
      })

      setOpen(false)
      router.refresh()
    }

    setLoading(false)
  }

  useEffect(() => {
    setOpen(open ?? false)
  }, [open])

  return (
    <Dialog open={open}>
      {!courtId && (
        <DialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
          >
            Añadir pista
          </Button>
        </DialogTrigger>
      )}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Completa estos datos para añadir una nueva pista a tu club
          </DialogTitle>
          <DialogDescription>
            <Input ref={courtNameRef} placeholder='Nombre de la pista' />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            className={loading ? 'opacity-50 cursor-not-allowed' : ''}
            onClick={handleUpdateCourt}
          >
            Actualizar
          </Button>
          <DialogClose asChild>
            <Button onClick={() => setOpen(false)} variant={'destructive'}>
              Cancelar
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
