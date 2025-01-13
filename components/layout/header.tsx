import Link from "next/link"
import { Button } from "../ui/button"

export default function Header() {
    const navLinks = [
        { name: "Work", href: "#work" },
        { name: "Explorations", href: "#explorations" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" }
    ]

    return (
        <header className="flex items-center px-6 py-4 bg-neutral-100 rounded-full border border-neutral-200 w-fit m-auto z-50">
            <nav className="flex space-x-4 list-none items-center">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link
                            href={link.href}
                            className="text-neutral-500 border border-transparent py-2 px-4 rounded-full hover:text-neutral-700 hover:border-neutral-200 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-600 transition-all duration-300"
                        >
                            <span>{link.name}</span>
                        </Link>
                    </li>

                ))}
                <li>
                    <Button variant='hello' asChild>
                        <Link href="/contact">
                            <span>Say "Hello"</span>
                        </Link>
                    </Button>
                </li>
            </nav>
        </header>
    )
}