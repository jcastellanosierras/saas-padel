import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createCourt } from "../actions";

export default async function DialogCreateCourt() {
  return (
    <form>
      <Dialog>
        <DialogTrigger>Añadir pista</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Completa estos datos para añadir una nueva pista a tu club</DialogTitle>
            <DialogDescription>
              <Input name="court_name" placeholder="Nombre de la pista" />
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => console.log('hol')} type="submit">Crear pista</Button>
            <DialogClose>Cancelar</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  )
}