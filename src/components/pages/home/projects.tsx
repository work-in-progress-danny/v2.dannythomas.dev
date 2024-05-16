"use client";
import { H2 } from "@/components";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { useHeaderRef } from "./header";

const projects: { name: string; url?: string }[] = [
	{
		name: "Caitlin Grant Photography",
		url: "https://caitlingrantphotography.com/",
	},
	{
		name: "Debra's Care",
		url: "https://debras.care",
	},
];

export const Projects = () => {
	const { headerHeight } = useHeaderRef();
	const [lockHeader, setLockHeader] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (pageScrollY) => {
		const projectsHeaderScrollY =
			(ref.current?.getBoundingClientRect().top ?? 0) + headerHeight;
		const currentScrollY = pageScrollY - headerHeight;

		if (projectsHeaderScrollY <= currentScrollY && !lockHeader) {
			setLockHeader(true);
		} else if (projectsHeaderScrollY >= currentScrollY && lockHeader) {
			setLockHeader(false);
		}
	});

	return (
		<div className="flex flex-col w-full">
			<div ref={ref}>
				<H2
					animate={lockHeader}
					style={
						lockHeader
							? { position: "fixed", top: `${headerHeight + 5}px` }
							: {}
					}
				>
					PROJECTS
				</H2>
			</div>
			{lockHeader && (
				<div
					style={{ height: `${ref.current?.getBoundingClientRect().height}px` }}
				/>
			)}
			<div className="flex flex-col gap-2 justify-center w-full px-2">
				{projects.map(({ name, url }) => (
					<motion.div key={name}>
						<div className="flex gap-2 flex-col">
							<a
								href={url}
								className="text-2xl flex gap-2 hover:text-orange-500"
							>
								<span>{name}</span>
								<i className="ri-external-link-line" />
							</a>
							<div className="h-200 w-full rounded border-1 border p-1 border-black overflow-hidden bg-yellow-50">
								<iframe
									title={name}
									src={url}
									className="overflow-hidden w-full h-full"
									style={{ height: "1920", width: "1080" }}
									scrolling="no"
								/>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};
