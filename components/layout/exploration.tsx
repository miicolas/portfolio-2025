import { MoveDown, MoveRight } from "lucide-react";
import HorizontalScoll from "./horizontal-scroll";
import CardProject from "@/app/projects/_projects/card-project";


export default function Exploration() {

    return (
        <div className="mt-20">
           
            <HorizontalScoll itemCount={3}>
                <CardProject />
                <CardProject />
                <CardProject />
                <div className="flex flex-col items-center justify-center gap-4 text-center border border-neutral-500 rounded-full p-8 h-fit my-auto text-neutral-900 hover:bg-neutral-500 transition-all duration-300 ease-in-out">
                    <MoveRight size={32} className="hidden lg:block" />
                    <MoveDown size={32} className="block lg:hidden" />
                </div>
            </HorizontalScoll>
        </div>
    )

}

