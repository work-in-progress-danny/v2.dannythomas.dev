const content = [
	"A creative designer, software engineer and tinkerer based in Melbourne, Australia.",
];

export const About = () => (
	<div className="flex flex-col sm:flex-row justify-between gap-5">
		<div className="flex flex-col gap-5">
			{content.map((c) => (
				<p key={c} className="pt-5 w-full">
					{c}
				</p>
			))}
		</div>
		<img
			className="w-1/4 rounded-md"
			height={518}
			width={370}
			src={"/danny.png"}
			alt={""}
		/>
	</div>
);
