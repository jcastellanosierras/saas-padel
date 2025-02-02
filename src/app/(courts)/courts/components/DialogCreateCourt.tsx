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
import { useRef, useState } from 'react'

export default function DialogCreateCourt() {
  const [open, setOpen] = useState<boolean>(false)
  const [creating, setCreating] = useState<boolean>(false)

  const router = useRouter()
  const { toast } = useToast()

  const courtNameRef = useRef<HTMLInputElement>(null)

  const supabase = createClient()

  const handleCreateCourt = async () => {
    const courtName = courtNameRef.current?.value

    if (!courtName) {
      alert('La pista tiene que tener un nombre')
      return
    }

    setCreating(true)

    const res = await supabase.from('courts').insert({ name: courtName })

    if (res.status !== 201) {
      toast({
        title: 'Error',
        description: 'No se ha podido crear la pista correctamente',
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Pista creada',
        description: 'La pista se ha creado correctamente',
        variant: 'default',
      })

      setOpen(false)
      router.refresh()
    }

    setCreating(false)
  }

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Añadir pista</Button>
      </DialogTrigger>
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
            className={creating ? 'opacity-50 cursor-not-allowed' : ''}
            onClick={handleCreateCourt}
          >
            Crear pista
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
