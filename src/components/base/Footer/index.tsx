import { AddressBook, Book, Briefcase, Code, House, List } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Navigation } from "../Navigation";

export default function Footer() {
    return (
        <footer>
            <div className="flex lg:flex-col md:relative fixed bottom-0 right-0 left-0 bg-blue900 xl:max-h-[773px] md:h-dvh shadow-md xl:rounded">
                <Navigation type="footer"/>
            </div>
        </footer>
    );
}