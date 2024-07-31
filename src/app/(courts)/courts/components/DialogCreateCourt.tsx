'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createClient } from "@/utils/supabase/client";
import { useRef } from "react";
// import { createCourt } from "../actions";

export default function DialogCreateCourt() {
  const courtNameRef = useRef<HTMLInputElement>(null)

  const supabase = createClient()

  const handleCreateCourt = async () => {
    const courtName = courtNameRef.current?.value

    if (!courtName) {
      alert('La pista tiene que tener un nombre')
      return
    }

    await supabase.from('courts').insert({ name: courtName })
  }

  return (
    <Dialog>
      <DialogTrigger>Añadir pista</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Completa estos datos para añadir una nueva pista a tu club</DialogTitle>
          <DialogDescription>
            <Input ref={courtNameRef} placeholder="Nombre de la pista" />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleCreateCourt}>Crear pista</Button>
          <DialogClose>Cancelar</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}