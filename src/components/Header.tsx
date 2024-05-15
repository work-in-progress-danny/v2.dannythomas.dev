import { motion } from "framer-motion"
import { Monoton } from "next/font/google"
const monoton = Monoton({ weight: '400', subsets: ['latin'] })

const shadowHeaderColours =
  [
    "text-orange-500",
    "text-yellow-500",
    "text-red-500",
  ]

const Name = () => (
  <>
    <h1 className={`text-8xl font-bold ${monoton.className} `}>DANNY</h1>
    <h1 className={`text-8xl font-bold pl-40 ${monoton.className}`}>THOMAS</h1>
  </>
)

export const Header = () => (
  <div className="pb-5">
    <div className="relative z-10">
      <Name />
    </div>
    {shadowHeaderColours.map((colour, index) => (
      <motion.div
        key={colour}
        style={{ zIndex: 5 - index }}
        className={`absolute top-0 left-0 ${colour}`}
        animate={{ y: (index + 1) * 3, x: (index + 1) * 4 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Name />
      </motion.div>
    ))}
  </div >
)
