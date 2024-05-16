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
			<div className="z-10 h-full w-full relative flex flex-col items-center">
				<Header />
				<div className="px-5 flex flex-col w-full">
					<MidSection />
					<div className="flex flex-col gap-5">
						<Projects />
						<Contact />
					</div>
				</div>
			</div>
		</HeaderRefProvider>
	);
}
