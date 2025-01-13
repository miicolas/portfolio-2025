import { Suspense } from "react";
import Time from "./time";

export default function Hero() {
    const firstName:string = 'Nicolas';
    const lastName:string = 'Becharat';

    const NameDisplay = ({ text }: { text: string }) => (
        <div className="flex flex-wrap">
            {text.split('').map((letter, index) => (
                <div key={index} className="relative group">
                    <span
                        className="absolute left-0 -bottom-0.5 text-8xl lg:text-9xl text-indigo-500 dark:text-neutral-50 font-bloop
                        opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0
                        transition-all duration-[800ms] ease-in-out z-10 group-hover:animate-letter cursor-pointer text-balance"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                    <span
                        className="inline-block text-neutral-900 dark:text-neutral-50 text-8xl lg:text-9xl font-sans
                        transition-all duration-[800ms] ease-in-out group-hover:opacity-0 cursor-pointer text-balance"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <>
            <div className="flex flex-col justify-between h-[calc(100vh-6rem)] relative">
                <div className="pt-8">
                    <Suspense fallback={<Time />}>
                        <Time />
                    </Suspense>
                </div>

                <div className="flex flex-col justify-center gap-4">
                    <p className="text-lg md:text-2xl text-neutral-800 text-balance">
                        Howdy! Meet your trusted full-stack developer and develop your next project with me
                    </p>

                    <div className="flex gap-4 flex-col lg:flew-row">
                        <NameDisplay text={firstName} />
                        <NameDisplay text={lastName} />
                    </div>
                </div>

                <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] -z-50"></div>
            </div>
            <div className="absolute bottom-auto left-auto right-20 top-10 h-[500px] w-[500px] -translate-x-[30%] translate-y-[80%] rounded-full bg-[rgba(99,102,241,0.5)] opacity-50 blur-[80px] animate-sphere"></div>
        </>
    );
}