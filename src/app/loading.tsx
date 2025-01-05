import { Container } from "@/components/base/Container";
import { FadeLoader } from "react-spinners";

export default function Loading() {
    return (
            <div className="bg-slate-500 flex justify-center items-center w-dvw h-dvh">
                <FadeLoader height={40} width={40} color="#ff0000"/>
            </div>
    );
}