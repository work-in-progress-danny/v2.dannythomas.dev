"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

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
			className="h-max w-1/12 max-w-36 flex flex-row absolute top-0 right-10 z-0 overflow-hidden"
		>
			<div className="bg-red-500 flex-grow" />
			<div className="bg-orange-500 flex-grow" />
			<div className="bg-yellow-500 flex-grow" />
		</div>
	);
};
