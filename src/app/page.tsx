import { AboutMe } from "@/components/base/AboutMe";
import { Semantic } from "@/components/base/Semantic";

export default function Home() {
	return (
		<>
			<Semantic type="main">
				<AboutMe/>
			</Semantic>
			<div className="flex bg-blue900 w-[50px] h-[773px] shadow-md rounded">

			</div>
		</>
	);
}
