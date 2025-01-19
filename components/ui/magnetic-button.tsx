'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'motion/react';

export default function MagneticButton({children}: {children: ReactNode}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        if (!ref.current) return;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY - 10 }); 
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    }

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 100, damping: 8, mass: 0.5 }}
            className=' z-50 overflow-visible cursor-grabbing'
        >
            {children}
        </motion.div>
    )
}