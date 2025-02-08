import { Suspense } from "react";
import Time from "./time";
import MagneticButton from "@/components/ui/magnetic-button";
import { MoveDown } from "lucide-react";
import Link from "next/link";
import TimeSkeleton from "../skeleton/time";

export default function Hero() {
    const firstName: string = 'Nicolas';
    const lastName: string = 'Becharat';

    const NameDisplay = ({ text }: { text: string }) => (
        <div className="flex flex-wrap gap-2 lg:gap-0">
            {text.split('').map((letter, index) => (
                <div key={index} className="relative group">
                    <MagneticButton>
                        <span
                            className="absolute left-0 -bottom-26 text-7xl lg:text-9xl text-indigo-500 dark:text-neutral-50 font-bloop
                        opacity-100 lg:opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0
                        transition-all duration-700 ease-in-out z-10 group-hover:animate-letter text-balance"
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    </MagneticButton>
                    <span
                        className="inline-block opacity-0 lg:opacity-100 text-neutral-900 dark:text-neutral-50 text-7xl lg:text-9xl font-sans
                        transition-all duration-700 ease-in-out group-hover:opacity-0 cursor-pointer text-balance font-neueMontreal "
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="py-16">
            <div className="flex flex-col justify-between h-[calc(100vh-8rem)] relative">

                <Suspense fallback={<TimeSkeleton />}>
                    <Time />
                </Suspense>


                <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                    <div className="flex flex-col justify-center gap-8 lg:gap-4">
                        <p className="text-lg md:text-2xl text-neutral-800 text-balance font-neueMontreal font-light">
                            Howdy! Meet your trusted <span className="italic">full-stack developer</span> and develop your next project with me
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <NameDisplay text={firstName} />
                            <NameDisplay text={lastName} />
                        </div>
                    </div>
                    <Link href="#exploration" className="p-4">
                        <MagneticButton>
                            <div className="flex flex-col items-center justify-center gap-4 text-center border border-neutral-500 rounded-full p-4 lg:p-8 h-fit my-auto text-neutral-900 hover:bg-indigo-500/50 transition-all duration-1000 ease-in-out animate-bounce hover:animate-none">
                                <MoveDown size={32} />
                            </div>
                        </MagneticButton>
                    </Link>
                </div>

                <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-50"></div>
            </div>
            <div className="absolute bottom-auto left-auto right-20 top-10 h-[500px] w-[500px] -translate-x-[30%] translate-y-[80%] rounded-full bg-[rgba(99,102,241,0.5)] opacity-50 blur-[80px] animate-sphere"></div>
        </div>
    );
}