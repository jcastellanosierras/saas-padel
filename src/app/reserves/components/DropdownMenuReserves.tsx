'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Ellipsis } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'

export default function DropdownMenuReserves() {
  return (
    <>
      <DropdownMenu>
      <DropdownMenuTrigger>
          <div className='p-1 rounded-sm transition-colors cursor-pointer hover:bg-slate-300'>
            <Ellipsis size={24} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Acciones de tu reserva</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className='text-red-500'
            onClick={() => alert('Cancelar reserva')}
          >
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
