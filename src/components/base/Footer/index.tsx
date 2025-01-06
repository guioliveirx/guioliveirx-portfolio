import { AddressBook, Book, Briefcase, Code, House, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex lg:flex-col bg-blue900 xl:h-[773px] md:h-dvh shadow-md xl:rounded">
            <div className="md:relative flex md:flex-col md:h-[100%] h-[50px] md:w-[70px] w-[100%] justify-center items-center gap-12
            ">
                <Link href="https://linkedin.com/in/guioliveira2002">
                    <Briefcase className="relative" size={30} color="#f5efef" weight="light" />
                </Link>
                <Link href="/skills">
                    <Code size={30} color="#f5efef" weight="light" />
                </Link>
                <Link href="https://wa.me/5571981847173">
                    <AddressBook size={30} color="#f5efef" weight="light" />
                </Link>
                <Link href="/">
                    <House size={30} color="#f5efef" weight="light" />
                </Link>
            </div>
        </footer>
    );
}