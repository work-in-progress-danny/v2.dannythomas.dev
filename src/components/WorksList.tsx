import { useState } from 'react'
import { Button } from './Button'
import { H2, Section, SubHeading } from './Headings'

interface Props {
  title: string
  subtitle: string
  works: Array<{ title: string; content: string }>
}

export const WorksList = ({ title, subtitle, works }: Props) => {
  const [state, setState] = useState(-1)

  const toggleSelection = (index: number) =>
    state == index ? setState(-1) : setState(index)

  return (
    <Section>
      <H2>{title}</H2>
      <SubHeading>{subtitle}</SubHeading>
      <ul className="flex-col list-outside">
        {works.map(({ title, content }, index) => {
          const isSelected = index === state
          return (
            <li key={index + title}>
              <Button
                isSelected={isSelected}
                onClick={() => toggleSelection(index)}
              >
                {title}
              </Button>
              {isSelected && (
                <div
                  className={`my-2 bg-[#262a2b] `}
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              )}
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
