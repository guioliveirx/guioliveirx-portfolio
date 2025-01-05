import { AddressBook, Book, Briefcase, Code, House, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex lg:flex-col bg-blue900 lg:h-[773px] gap-2 shadow-md rounded">
            <div className="flex lg:flex-col lg:h-[100%] h-[70px] lg:w-[70px] w-[100%] justify-center items-center gap-10
            ">
                <Briefcase size={30} color="#f5efef" weight="light" />
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