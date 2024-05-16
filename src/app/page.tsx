import {
	Contact,
	Header,
	HeaderRefProvider,
	MidSection,
	Projects,
} from "@/components/pages/home";

export default function Home() {
	return (
		<HeaderRefProvider>
			<div className="z-10 h-full relative flex flex-col">
				<Header />
				<MidSection />
				<div className="flex flex-col gap-5">
					<Projects />
					<Contact />
				</div>
			</div>
		</HeaderRefProvider>
	);
}
