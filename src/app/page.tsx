import { About, Contact, Projects } from "./Sections";
import { Header } from "./Sections/Header";

export default function Home() {
	return (
		<div className="z-10 h-full w-full relative flex flex-col items-center">
			<Header />
			<div className="px-5 flex flex-col w-full">
				<About />
				<div className="flex flex-col gap-5">
					<Projects />
					<Contact />
				</div>
			</div>
		</div>
	);
}
