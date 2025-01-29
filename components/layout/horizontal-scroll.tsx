'use client'

import { useRef, ReactNode, useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";


interface ScrollSectionProps {
    children: ReactNode;
    itemCount: number;
}

export default function HorizontalScroll({ children, itemCount }: ScrollSectionProps) {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const scrollRange = useMemo(() => {
        const baseRange = 24;
        const range = baseRange * (itemCount - 1);
        return [`${mobile ? range - 7.5 : range - 12.5}%`, `-${mobile ? range - 1 : range - 12.5}%`];
    }, [itemCount, mobile]);

    const x = useTransform(scrollYProgress, [0, 1], scrollRange);



    return (

        <motion.div className="relative" initial={{ opacity: 0, y: 100, scale: 0.8 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}>
            <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-neutral-50 to-neutral-50/0 z-50 hidden lg:block"></div>
            <section className="relative h-full lg:h-[300vh]" ref={targetRef}>
                <div className="sticky top-0 flex h-screen justify-center items-center overflow-hidden snap-y snap-mandatory">
                    <motion.div style={{ x }} className="flex gap-52 snap-x snap-mandatory lg:flex-row flex-col">
                        {children}
                    </motion.div>
                </div>
            </section>
            <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-neutral-50 to-neutral-50/0 z-50 hidden lg:block"></div>
        </motion.div>
    );
};