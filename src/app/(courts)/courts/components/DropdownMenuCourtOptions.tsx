'use client'

import { Ellipsis } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import AlertDialogDelete from './AlertDialogDelete'
import { useState } from 'react'
import DialogUpdateCourt from './DialogUpdateCourt'

export default function DropdownMenuCourtOptions({
  courtId,
}: {
  courtId: number
}) {
  const [alertDialogOpen, setAlertDialogOpen] = useState<boolean>(false)
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className='p-1 rounded-sm transition-colors cursor-pointer hover:bg-slate-300'>
            <Ellipsis size={24} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Acciones de la pista</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setDialogOpen(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setAlertDialogOpen(true)}>
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DialogUpdateCourt
        open={dialogOpen}
        setOpen={setDialogOpen}
        courtId={courtId}
      />
      <AlertDialogDelete
        open={alertDialogOpen}
        setOpen={setAlertDialogOpen}
        courtId={courtId}
      />
    </>
  )
}
