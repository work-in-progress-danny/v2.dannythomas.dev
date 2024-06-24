import { backgroundColours } from "./colours";

export const Streak = () => (
	<div className="w-1/6 sm:w-1/12 max-w-36 flex flex-row absolute top-0 right-10 sm:right-20 z-0 min-h-screen overflow">
		{backgroundColours.map((colour) => (
			<div key={colour} className={`${colour} flex-grow`} />
		))}
	</div>
);
