'use client'

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function LoginWithGithubButton() {
  const supabase = createClient()

  const loginWithGithub = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    })
  }
  
  return (
    <Button type="button" onClick={loginWithGithub}>
      Log in with Github
    </Button>
  )
}