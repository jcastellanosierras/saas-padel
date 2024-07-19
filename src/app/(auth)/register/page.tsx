import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signup } from './actions'
import Fieldset from '../components/Fieldset'
import Link from 'next/link'
import LoginWithGithubButton from '../components/LoginWithGithubButton'

export default function LoginPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <form className='w-5/6 sm:w-3/4 md:w-1/2 flex flex-col gap-2'>
        <Fieldset>
          <Label htmlFor="first_name">Nombre:</Label>
          <Input className='border-2 rounded-md' id="first_name" name="first_name" type="text" required />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="last_name">Apellido:</Label>
          <Input className='border-2 rounded-md' id="last_name" name="last_name" type="text" required />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="email">Email:</Label>
          <Input className='border-2 rounded-md' id="email" name="email" type="email" required />
        </Fieldset>

        <Fieldset>
          <Label htmlFor="password">Password:</Label>
          <Input className='border-2 rounded-md' id="password" name="password" type="password" required />
        </Fieldset>

        <Fieldset>
          <Button formAction={signup}>Register</Button>
          <LoginWithGithubButton />
        </Fieldset>

        <p>
          Ya tienes cuenta? Inicia sesión <Link className='underline' href="/login">aquí</Link>
        </p>
      </form>
    </div>
  )
}