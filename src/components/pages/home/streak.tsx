"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { backgroundColours } from "./colours";

export const Streak = () => {
	const { scrollY } = useScroll();

	const [documentHeight, setDocumentHeight] = useState(0);

	useEffect(() => {
		setDocumentHeight(document.documentElement.scrollHeight);
	}, []);

	useMotionValueEvent(scrollY, "change", () => {
		if (documentHeight !== document.documentElement.scrollHeight) {
			setDocumentHeight(document.documentElement.scrollHeight);
		}
	});

	return (
		<div
			style={{ height: `${documentHeight}px` }}
			className="h-max w-1/6 sm:w-1/12 max-w-36 flex flex-row absolute top-0 right-10 sm:right-20 z-0 overflow-hidden"
		>
			{backgroundColours.map((colour) => (
				<div key={colour} className={`${colour} flex-grow`} />
			))}
		</div>
	);
};
