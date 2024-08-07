'use client'

import { createClient } from "@/utils/supabase/client"
import { Button } from "./ui/button"
import { useToast } from "./ui/use-toast"


export default function LogoutButton() {
  const { toast } = useToast()
  
  const handleLogout = async () => {
    const supabase = createClient()
    
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      toast({
        title: 'Error',
        description: 'No se ha podido cerrar sesión correctamente',
        variant: 'destructive',
      })
    }
  }

  return (
    <Button variant={'ghost'} onClick={handleLogout}>Cerrar sesión</Button>
  )
}