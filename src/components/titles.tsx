import { useEffect, useState } from "react";
import type { HTMLProps } from "react";
import { textColours } from "./colours";

type TitleProps = { title: string } & HTMLProps<HTMLDivElement>;

export const SubTitle = ({ title, ...divProps }: TitleProps) => {
	const commonStyle = "text-3xl sm:text-5xl bold title pb-5";
	const upperCaseTitle = title.toUpperCase();
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
	}, []);

	const decoratorElements = textColours.map((colour, index) => {
		const style = {
			transform: `translateX(${1 * (index + 1)}px) translateY(${index + 1}px)`,
			zIndex: 10 - index,
		};
		const animationStyle = {
			transition: "transform 1s ease-in-out",
		};

		return (
			<p
				key={title + colour}
				style={rendered ? { ...style, ...animationStyle } : animationStyle}
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
			style={{
				top: window.document?.getElementById("title")?.offsetHeight ?? 0,
			}}
		>
			{decoratorElements}
			<h2
				onMouseOver={() => rendered && setRendered(false)}
				onMouseLeave={() => !rendered && setRendered(true)}
				onFocus={() => rendered && setRendered(false)}
				onBlur={() => !rendered && setRendered(true)}
				className={`${commonStyle} relative z-10`}
			>
				{upperCaseTitle}
			</h2>
		</div>
	);
};

export const Title = ({ title, ...divProps }: TitleProps) => {
	const commonStyle = "text-5xl sm:text-8xl bold title";
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
			zIndex: 10 - index,
		};

		const animationStyle = {
			transition: "transform 1s ease-in-out",
		};

		return (
			<p
				key={title + colour}
				style={rendered ? { ...style, ...animationStyle } : animationStyle}
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
			<h1
				className={`${commonStyle} relative z-10`}
				onMouseOver={() => rendered && setRendered(false)}
				onMouseLeave={() => !rendered && setRendered(true)}
				onFocus={() => rendered && setRendered(false)}
				onBlur={() => !rendered && setRendered(true)}
			>
				{upperCaseTitle}
			</h1>
		</div>
	);
};

export const H3 = ({ title, ...divProps }: TitleProps) => {
	const upperCaseTitle = title.toUpperCase();

	return (
		<h3
			{...divProps}
			className={`subtitle text-2xl font-bold ${divProps.className}`}
		>
			{upperCaseTitle}
		</h3>
	);
};
