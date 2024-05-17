"use client";
import { motion } from "framer-motion";
import { Monoton } from "next/font/google";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { MutableRefObject, ReactNode } from "react";
import { textColours } from "./colours";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });

const Name = () => (
	<>
		<h1 className={`text-4xl sm:text-8xl ${monoton.className}`}>DANNY</h1>
		<h1 className={`text-4xl sm:text-8xl pl-20 sm:pl-40 ${monoton.className}`}>
			THOMAS
		</h1>
	</>
);

export const Header = () => {
	const [headerHeightState, setHeaderHeight] = useState(0);
	const { headerRef } = useHeaderRef();

	useEffect(() => {
		if (headerRef?.current) {
			setHeaderHeight(headerRef.current.offsetHeight);
		}
	}, [headerRef]);

	return (
		<>
			<div
				ref={headerRef}
				className="fixed top-0 w-full max-w-7xl border-yellow-100 border-b sm:border-b-0"
			>
				<div className="w-full bg-yellow-50/90 backdrop-blur-sm pb-2 sm:pb-5">
					<div className="relative z-10">
						<Name />
					</div>
					{textColours.map((colour, index) => (
						<motion.div
							key={colour}
							style={{ zIndex: 5 - index }}
							className={`absolute top-0 left-0 ${colour}`}
							animate={{ y: (index + 1) * 2, x: (index + 1) * 3 }}
							transition={{ type: "spring", stiffness: 100 }}
						>
							<Name />
						</motion.div>
					))}
				</div>
			</div>
			<div
				style={{
					paddingTop: `${headerHeightState + 5}px`,
					width: "100%",
				}}
			/>
		</>
	);
};

const HeaderRefContext =
	createContext<MutableRefObject<HTMLDivElement | null> | null>(null);

export const HeaderRefProvider = ({ children }: { children: ReactNode }) => {
	const headerRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

	return (
		<HeaderRefContext.Provider value={headerRef}>
			{children}
		</HeaderRefContext.Provider>
	);
};

export const useHeaderRef = (): {
	headerRef: MutableRefObject<HTMLDivElement | null> | null;
	headerHeight: number;
} => {
	const headerRef = useContext(HeaderRefContext);
	return {
		headerRef,
		headerHeight: headerRef?.current?.getBoundingClientRect().height ?? 0,
	};
};
