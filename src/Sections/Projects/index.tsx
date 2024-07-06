import { H3, SubTitle } from "@/components";
import { ThingBucket } from "./Thingbucket";
import { CGPhotography } from "./CGPhotography";
import { Essay } from "./Essay";
import { Corne } from "./Corne";

const projects: { title: string; child: () => JSX.Element }[] = [
	{
		title: "Caitlin Grant Photography",
		child: CGPhotography,
	},
	{
		title: "Essay",
		child: Essay,
	},
	{
		title: "Thing Bucket",
		child: ThingBucket,
	},
	{
		title: "Corne",
		child: Corne,
	},
];

export const Projects = () => {
	return (
		<div className="flex flex-col w-full">
			<SubTitle title="projects" />
			<div className="flex flex-col gap-5 justify-center w-full">
				{projects.map(({ title, child }) => (
					<div
						className="border p-2 drop-shadow rounded bg-yellow-50"
						key={title}
					>
						<H3 title={title} />
						{child()}
					</div>
				))}
			</div>
		</div>
	);
};
