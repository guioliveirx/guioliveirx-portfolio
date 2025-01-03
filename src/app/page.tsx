import { AboutMe } from "@/components/base/AboutMe";
import { Card } from "@/components/base/Card";
import Image from "next/image";



export default function Home() {
	return (
		<div className="bg-[#EBF3FF] w-screen h-screen flex justify-center items-center gap-[10px]">
			<AboutMe/>
			<div className="flex bg-[#EBF2FF] w-[900px] h-[400px] shadow-md rounded">

			</div>
			<div className="flex bg-[#002352] w-[50px] h-[400px] shadow-md rounded">

			</div>
		</div>
	);
}
