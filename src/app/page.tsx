"use client"

import { AboutMe } from "@/components/base/AboutMe";
import { Card } from "@/components/base/CardAvatar";
import Image from "next/image";



export default function Home() {
	return (
		<div className="bg-blue-50 w-screen h-screen flex justify-center items-center gap-[10px]">
			<AboutMe/>
			<div className="flex bg-blue100 w-[900px] h-[773px] shadow-md rounded p-[20px]">

			</div>
			<div className="flex bg-blue900 w-[50px] h-[773px] shadow-md rounded">

			</div>
		</div>
	);
}
