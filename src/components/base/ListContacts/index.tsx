import { Contact } from "../Contact";

export function ListContacts () {
    return (
        <div>
            <ul className="pt-[10px] ps-[10px]">
                <Contact/>
            </ul>
        </div>
    );
}