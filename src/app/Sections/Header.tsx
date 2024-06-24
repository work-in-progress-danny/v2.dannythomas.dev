import { Title } from "../components";

export const Header = () => {
	return (
		<div id="title" className="sticky top-0 z-20">
			<Title title="Danny" />
			<Title className="pl-40" title="Thomas" />
		</div>
	);
};
