import { SubTitle } from "../components";

const socials = [
	{
		name: "Twitter",
		className: "ri-twitter-x-fill",
		url: "https://x.com/Danny80260197",
	},
	{
		name: "LinkedIn",
		className: "ri-linkedin-box-fill",
		url: "https://www.linkedin.com/in/dannylowater/",
	},
	{
		name: "Email",
		className: "ri-mail-line",
		url: "mailto:hello@dannythomas.dev",
	},
	{
		name: "Github",
		className: "ri-github-fill",
		url: "https://www.github.com/danny-duck",
	},
];

export const Contact = () => (
	<div>
		<SubTitle title="contact" />
		<div className="flex gap-3">
			{socials.map(({ className, url }) => (
				<a key={url} href={url} className="hover:text-orange-500 text-4xl">
					<i className={className} />
				</a>
			))}
		</div>
	</div>
);
