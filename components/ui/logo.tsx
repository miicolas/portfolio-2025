import Image from "next/image";
import { LogoData } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function Logo({src, alt, width, height, className} : LogoData) {
    return(
        <Image src={src} alt={alt} width={width} height={height} className={cn(`${className}`)} />
    )
}