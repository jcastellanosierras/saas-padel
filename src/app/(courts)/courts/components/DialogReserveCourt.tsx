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
import { useToast } from '@/components/ui/use-toast'
import { createClient, getUser } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

export default function DialogReserveCourt({
  turnId,
  open,
  setOpen,
}: {
  turnId: number
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  const router = useRouter()
  const { toast } = useToast()

  const handleReserve = async () => {
    const supabase = createClient()

    const user = await getUser()

    const res = await supabase.from('reserves').insert({ id_profile: user.id, id_turn: turnId })

    if (res.status !== 201) {
      toast({
        title: 'Error',
        description: 'No se ha podido reservar la pista correctamente',
        variant: 'destructive',
      })
    } else {
      toast({
        title: 'Pista reservada',
        description: 'La pista se ha reservado correctamente',
        variant: 'default',
      })
    }

    setOpen(false)
    router.refresh()
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservar pista</DialogTitle>
          <DialogDescription>
            ¿Estás seguro de que quieres reservar esta pista?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleReserve}>Confirmar</Button>
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
