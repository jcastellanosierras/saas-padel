export const getFormattedTime = (date: Date) => {
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

export const getFormattedDate = (date: Date) => {
  const day = date.getDate()
  const month = date.toLocaleString('es-ES', { month: 'long' })
  const year = date.getFullYear()
  return `${day} de ${month} de ${year}`
}
