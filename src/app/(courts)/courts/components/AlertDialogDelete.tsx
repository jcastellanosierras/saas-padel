'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { createClient, isAdmin } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'

export default function AlertDialogDelete({
  open,
  setOpen,
  courtId,
}: {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  courtId: number
}) {
  const [deleting, setDeleting] = useState<boolean>(false)

  const router = useRouter()
  const { toast } = useToast()

  const handleDelete = async () => {
    const supabase = createClient()

    setDeleting(true)

    const res = await supabase.from('courts').delete().eq('id', courtId)

    if (res.status !== 204) {
      toast({
        title: 'Error',
        description: 'No se ha podido eliminar la pista correctamente',
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Pista eliminada',
        description: 'La pista se ha eliminado correctamente',
        variant: 'default',
      })

      setDeleting(false)

      router.refresh()
    }

    setOpen(false)
  }

  return (
    <AlertDialog open={open}>
      {/* <AlertDialogTrigger>Eliminar</AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            ¿Estás seguro de que quieres eliminar la pista?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Esto no se puede deshacer. Tendrás que crearla de nuevo si te
            arrepientes.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button
              variant='destructive'
              className={deleting ? 'opacity-50 cursor-not-allowed' : ''}
              onClick={handleDelete}
            >
              Confirmar
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
