"use client";

import { Monoton } from "next/font/google";
import { useEffect, useState } from "react";
import type { HTMLProps } from "react";
import { textColours } from "./colours";

const monoton = Monoton({ weight: "400", subsets: ["latin"] });

type TitleProps = { title: string } & HTMLProps<HTMLDivElement>;

export const SubTitle = ({ title, ...divProps }: TitleProps) => {
	const commonStyle = `text-5xl bold ${monoton.className}`;
	const upperCaseTitle = title.toUpperCase();
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
	}, []);

	const decoratorElements = textColours.map((colour, index) => {
		const style = {
			transform: `translateX(${1 * (index + 1)}px) translateY(${index + 1}px)`,
			transition: "transform 1s ease-in-out",
			zIndex: 10 - index,
		};

		return (
			<p
				key={title + colour}
				style={rendered ? style : {}}
				aria-hidden
				className={`${commonStyle} ${colour} absolute `}
			>
				{upperCaseTitle}
			</p>
		);
	});

	return (
		<div
			{...divProps}
			className={`sticky ${divProps.className}`}
			style={{ top: document?.getElementById("title")?.offsetHeight ?? 0 }}
		>
			{decoratorElements}
			<h2 className={`${commonStyle} relative z-10`}>{upperCaseTitle}</h2>
		</div>
	);
};

export const Title = ({ title, ...divProps }: TitleProps) => {
	const commonStyle = `text-8xl bold ${monoton.className}`;
	const upperCaseTitle = title.toUpperCase();
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
	}, []);

	const decoratorElements = textColours.map((colour, index) => {
		const style = {
			transform: `translateX(${2 * (index + 1)}px) translateY(${
				2 * (index + 1)
			}px)`,
			transition: "transform 1s ease-in-out",
			zIndex: 10 - index,
		};

		return (
			<p
				key={title + colour}
				style={rendered ? style : {}}
				aria-hidden
				className={`${commonStyle} ${colour} absolute`}
			>
				{upperCaseTitle}
			</p>
		);
	});

	return (
		<div {...divProps}>
			{decoratorElements}
			<h1 className={`${commonStyle} relative z-10`}>{upperCaseTitle}</h1>
		</div>
	);
};
