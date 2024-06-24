import { H2, SubHeading } from './Headings'

type FooterProps = {}

export const Footer = ({}: FooterProps) => {
  const socials = [
    { label: 'Github', href: 'https://github.com/Danny-Duck' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/dannylowater/' },
    { label: 'Email', href: 'mailto:hi@dannythomas.dev' },
  ]
  return (
    <footer className={'flex w-full justify-center flex-col'}>
      <H2>Socials</H2>
      <SubHeading>Find me here</SubHeading>
      <div className="grid-cols-3 grid w-auto self-center">
        {socials.map(({ label, href }) => (
          <a
            key={label}
            target="_blank"
            className={'text-sm hover:underline text-blue-300'}
            href={href}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
