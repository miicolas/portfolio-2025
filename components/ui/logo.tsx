import Image from "next/image";
import { LogoData } from "@/lib/types";

export default function Logo({src, alt, width, height} : LogoData) {
    return(
        <Image src={src} alt={alt} width={width} height={height} className="rounded-lg" />
    )
}