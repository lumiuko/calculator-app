type ButtonProps = {
  color: 'primary' | 'secondary' | 'tertiary'
  text: string
  isWide?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export default function Button({ color = 'primary', text, isWide = false, ...props }: ButtonProps) {
  const colorClasses = {
    primary: 'bg-primary-background hover:bg-primary-background-hover text-primary-text shadow-primary text-xl md:text-2xl',
    secondary: 'bg-secondary-background hover:bg-secondary-background-hover text-secondary-text shadow-secondary text-md md:text-lg',
    tertiary: 'bg-tertiary-background hover:bg-tertiary-background-hover text-tertiary-text shadow-tertiary text-md md:text-lg'
  }

  return (
    <button className={`rounded-[0.3125rem] py-3 leading-10 md:rounded-[0.625rem] ${colorClasses[color]} ${isWide ? '' : ''}`} {...props}>
      {text}
    </button>
  )
}
