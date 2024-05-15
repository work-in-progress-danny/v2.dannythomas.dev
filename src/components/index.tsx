import { Monoton } from "next/font/google"
import { ReactNode } from "react"

const monoton = Monoton({ weight: '400', subsets: ['latin'] })

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className={`text-5xl pb-5 ${monoton.className}`}>{children}</h2>
)

export const H3 = ({ children }: { children: ReactNode }) => (
  <h2 className={`text-3xl pb-5 ${monoton.className}`}>{children}</h2>
)
