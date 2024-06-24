export const H1 = ({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 {...props} className={`text-3xl ${className}`}>
    {children}
  </h1>
)

export const H2 = ({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) => (
  <h2 {...props} className={`text-2xl  ${className}`}>
    {children}
  </h2>
)

export const H3 = ({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) => (
  <h3 {...props} className={`text-xl  ${className}`}>
    {children}
  </h3>
)

export const SubHeading = (props: React.HTMLProps<HTMLParagraphElement>) => (
  <p className="text-slate-400 text-sm" {...props} />
)

export const Section = (props: React.HTMLProps<HTMLParagraphElement>) => {
  return <section {...props} />
}
