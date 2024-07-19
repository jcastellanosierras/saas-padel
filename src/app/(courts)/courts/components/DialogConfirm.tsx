import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { sayHello } from "../actions"

export default function DialogConfirm({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reservar pista</DialogTitle>
          <DialogDescription>
            ¿Estás seguro de que quieres reservar esta pista?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <form>
            <Button formAction={sayHello}>Confirmar</Button>
          </form>
          <DialogClose asChild>
            <Button variant={'destructive'}>Cancelar</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
} 