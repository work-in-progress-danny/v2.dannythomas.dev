import Tooltip from "./Tooltip";

export const Link = (props: { href: string; children: React.ReactNode }) => {
	return (
		<Tooltip.Wrapper>
			<Tooltip.Trigger>
				<a href={props.href} target="_blank" rel="noreferrer">
					{props.children}
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content className="bg-yellow-50">hello there</Tooltip.Content>
		</Tooltip.Wrapper>
	);
};
