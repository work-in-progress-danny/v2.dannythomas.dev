import { Streak } from "@/components";
import { About, Contact, Header, Projects } from "./Sections";

const App = () => (
	<div className="w-screen flex justify-center">
		<div className="z-10 h-full w-full gap-10 px-2 sm:px-5 max-w-[1520px] flex flex-col items-center">
			<Header />
			<About />
			<Projects />
			<Contact />
		</div>
		<Streak />
	</div>
);

export default App;
