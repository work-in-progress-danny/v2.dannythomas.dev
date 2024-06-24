type Props = {
  isSelected: boolean
} & React.ComponentProps<'button'>

export const Button = ({ isSelected, className, ...props }: Props) => (
  <button
    {...props}
    className={`ml-2 pr-2 hover:underline text-left ${
      isSelected ? 'text-orange-500' : ''
    } ${className}`}
  />
)
