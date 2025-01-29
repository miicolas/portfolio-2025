import { cn } from "@/lib/utils"
import { ReactNode } from "react"


export default function Card( { children, className, style }: { children: ReactNode, className?: string, style?: React.CSSProperties }) {
    return (
        <div className={cn(`flex flex-col p-2 rounded-lg bg-neutral-50 border border-neutral-200 ${className}`)} style={style}>
            {children}
        </div>
    )

}