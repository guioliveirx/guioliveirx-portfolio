import { Hero } from "@/components/base/Main/(component)/hero";
import { Main } from "@/components/base/Main";
import { Semantic } from "@/components/base/Semantic";

export default function Home() {
	return (
		<>
			<Semantic type="main">
				<Main/>
			</Semantic>
			<div className="flex bg-blue900 w-[50px] h-[773px] shadow-md rounded">

			</div>
		</>
	);
}
