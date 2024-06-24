import { Streak } from "./components";
import { About, Contact, Header, Projects } from "./Sections";

const App = () => (
	<div className="w-screen flex justify-center">
		<div className="z-10 h-full w-full max-w-[1520px] relative flex flex-col items-center">
			<Header />
			<div className="px-5 flex flex-col w-full">
				<About />
				<div className="flex flex-col gap-5">
					<Projects />
					<Contact />
				</div>
			</div>
		</div>
		<Streak />
	</div>
);

export default App;
