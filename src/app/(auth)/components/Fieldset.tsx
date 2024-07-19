export default function Fieldset({ children }: {
  children: React.ReactNode
}) {
  return (
    <fieldset className='flex flex-col gap-2'>
      {children}
    </fieldset>
  )
}