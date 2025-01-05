import { AddressBook, Book, Briefcase, Code, House, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex lg:flex-col bg-blue900 xl:h-[773px] md:h-dvh shadow-md rounded">
            <div className="md:relative flex md:flex-col md:h-[100%] h-[50px] md:w-[70px] w-[100%] justify-center items-center gap-12
            ">
                <span className="absolute md:top-5 top-3 right-4 bg-blue900 rounded p-1">
                    <List size={30} color="#f5efef" weight="light" />
                </span>
                <Briefcase className="relative" size={30} color="#f5efef" weight="light" />
                <Link href="/skills">
                    <Code size={30} color="#f5efef" weight="light" />
                </Link>
                <AddressBook size={30} color="#f5efef" weight="light" />
                <Link href="/">
                    <House size={30} color="#f5efef" weight="light" />
                </Link>
            </div>
        </div>
    );
}