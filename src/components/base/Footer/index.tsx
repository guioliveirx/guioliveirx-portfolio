import { AddressBook, Book, Briefcase, Code, House, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex xl:flex-col bg-blue900 xl:h-[773px] gap-2 shadow-md rounded">
            <div className="flex xl:flex-col xl:h-[100%] h-[70px]  w-[100%] justify-center items-center gap-10
            ">
                <Briefcase size={30} color="#f5efef" weight="bold" />
                <Link href="/skills">
                    <Code size={30} color="#f5efef" weight="bold" />
                </Link>
                <AddressBook size={30} color="#f5efef" weight="bold" />
                <Link href="/">
                    <House size={30} color="#f5efef" weight="bold" />
                </Link>
            </div>
        </div>
    );
}