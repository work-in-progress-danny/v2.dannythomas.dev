"use client";
import { motion } from "framer-motion";
import { Monoton } from "next/font/google";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import type { MutableRefObject, ReactNode } from "react";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });

const shadowHeaderColours = [
	"text-orange-500",
	"text-yellow-500",
	"text-red-500",
];

const Name = () => (
	<>
		<h1 className={`text-8xl font-bold ${monoton.className} `}>DANNY</h1>
		<h1 className={`text-8xl font-bold pl-40 ${monoton.className}`}>THOMAS</h1>
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
				className="pb-5 fixed top-0 border-b-2 w-1/2 border-black bg-yellow-50/90 backdrop-blur-sm"
			>
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
