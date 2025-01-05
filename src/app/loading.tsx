import { FadeLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="bg-blue900 absolute left-0 top-0 right-0 bottom-0 flex justify-center items-center">
            <FadeLoader
                color="#b0b0b0"
                height={10}
                loading
                margin={0}
                radius={1}
                width={4}
            />
        </div>
    );
}