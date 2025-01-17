import { cn } from "@/lib/utils"
import { ReactNode } from "react"


export default function Card( { children, className, style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) {
    return (
        <div className={cn(`flex flex-col p-4 rounded-lg bg-white border border-neutral-200 ${className}`)} style={style}>
            {children}
        </div>
    )

}