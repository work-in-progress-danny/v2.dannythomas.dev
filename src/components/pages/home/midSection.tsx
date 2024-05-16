import Image from "next/image";

const content = [
	"A creative designer, software engineer and tinkerer based in Melbourne, Australia.",
];

export const MidSection = () => (
	<div className="flex flex-col sm:flex-row justify-between gap-5">
		<div className="flex flex-col gap-5">
			{content.map((c) => (
				<p key={c} className="pt-5  w-full">
					{c}
				</p>
			))}
		</div>
		<Image
			className="h-full sm:w-2/5 rounded-lg"
			layout="cover"
			src={"/danny.png"}
			alt={""}
			width={"2000"}
			height={"2000"}
		/>
	</div>
);
