import { AboutMe } from "@/components/base/AboutMe";
import { Semantic } from "@/components/base/Semantic";

export default function Home() {
	return (
		<>
			<Semantic type="main">
				<AboutMe/>
			</Semantic>
			<div className="flex xl:flex-col bg-blue900 xl:w-[50px] xl:h-[773px] w-screen h-[100px] shadow-md rounded">

			</div>
		</>
	);
}
