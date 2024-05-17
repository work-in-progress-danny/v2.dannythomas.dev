"use client";
import { motion } from "framer-motion";
import { Monoton } from "next/font/google";
import { textColours } from "./pages/home/colours";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });

export const H2 = ({
	animate,
	...props
}: React.ComponentProps<"h2"> & { animate?: boolean }) => (
	<div className="relative">
		<h2
			{...props}
			className={`${props.className} text-3xl sm:text-5xl pb-5 ${monoton.className} z-10`}
		/>
		{animate &&
			textColours.map((colour, index) => (
				<motion.h2
					key={colour}
					style={{ zIndex: 5 - index, ...props.style }}
					className={`${props.className} text-3xl sm:text-5xl  pb-5 ${monoton.className} ${colour}`}
					animate={animate && { y: index + 1, x: (index + 1) * 2 }}
					transition={{ type: "spring", stiffness: 100 }}
				>
					{props.children}
				</motion.h2>
			))}
	</div>
);

export const H3 = (props: React.ComponentProps<"h3">) => (
	<h2 {...props} className={`text-3xl pb-5 ${monoton.className}`} />
);
