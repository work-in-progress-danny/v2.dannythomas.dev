type MainProps = {} & React.HTMLAttributes<HTMLElement>

export const Main = (props: MainProps) => {
  return (
    <main
      {...props}
      className={`p-5 w-full lg:w-3/4 xl:w-1/2 flex flex-col ${props.className}`}
    />
  )
}
