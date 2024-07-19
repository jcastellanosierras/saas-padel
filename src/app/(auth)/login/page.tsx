import { Button } from '@/components/ui/button'
import { login } from './actions'
import Fieldset from '../components/Fieldset'
import Link from 'next/link'
import LoginWithGithubButton from '../components/LoginWithGithubButton'

export default function LoginPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <form className='w-5/6 sm:w-3/4 md:w-1/2 flex flex-col gap-2'>
        <Fieldset>
          <label htmlFor="email">Email:</label>
          <input className='border-2 rounded-md' id="email" name="email" type="email" required />
        </Fieldset>

        <Fieldset>
          <label htmlFor="password">Password:</label>
          <input className='border-2 rounded-md' id="password" name="password" type="password" required />
        </Fieldset>

        <Fieldset>
          <Button formAction={login}>Log in</Button>
          <LoginWithGithubButton />
        </Fieldset>

        <p>
          ¿Todavía no tienes cuenta? Créala <Link className='underline' href="/register">aquí</Link>
        </p>
      </form>
    </div>
  )
}