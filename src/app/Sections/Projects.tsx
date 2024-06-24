"use client";
import { SubTitle } from "../components";

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
	return (
		<div className="flex flex-col w-full">
			<SubTitle title="projects" />
			<div className="flex flex-col gap-2 justify-center w-full px-2">
				{/* {projects.map(({ name, url }) => ( */}
				{/* 	<motion.div key={name}> */}
				{/* 		<div className="flex gap-2 flex-col"> */}
				{/* 			<a */}
				{/* 				href={url} */}
				{/* 				className="text-2xl flex gap-2 hover:text-orange-500" */}
				{/* 			> */}
				{/* 				<span>{name}</span> */}
				{/* 				<i className="ri-external-link-line" /> */}
				{/* 			</a> */}
				{/* 			<div className="h-200 w-full rounded border-1 border p-1 border-black overflow-hidden bg-yellow-50"> */}
				{/* 				<iframe */}
				{/* 					title={name} */}
				{/* 					src={url} */}
				{/* 					className="overflow-hidden w-full h-full" */}
				{/* 					style={{ height: "1920", width: "1080" }} */}
				{/* 					scrolling="no" */}
				{/* 				/> */}
				{/* 			</div> */}
				{/* 		</div> */}
				{/* 	</motion.div> */}
				{/* ))} */}
			</div>
		</div>
	);
};
