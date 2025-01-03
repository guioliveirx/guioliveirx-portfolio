import { Card } from "@/components/base/card";
import Image from "next/image";



export default function Home() {
	return (
		<div className="bg-[#EBF3FF] w-screen h-screen flex justify-center items-center gap-[10px]">
			<div className="flex flex-col bg-[#002352] w-[400px] rounded p-[20px]">
				<Card/>
			</div>
			<div className="flex bg-[#EBF2FF] w-[900px] h-[400px] shadow-md rounded">

			</div>
			<div className="flex bg-[#002352] w-[50px] h-[400px] shadow-md rounded">

			</div>
		</div>
	);
}
