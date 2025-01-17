import Link from "next/link"
import { Button } from "../ui/button"

export default function Header() {
    const navLinks = [
        { name: "Exploration", href: "#exploration", responsive: true },
        { name: "Experience", href: "#experience", responsive: false },
        { name: "Skills", href: "#skills", responsive: false },
    ]

    return (
        <header className="flex items-center px-6 py-2 bg-neutral-100 rounded-full border border-neutral-200 w-fit m-auto z-50">
            <nav className="flex space-x-0 lg:space-x-4 list-none items-center">
                {navLinks.map((link) => (
                    <li key={link.name} className={`${link.responsive ? 'block' : 'hidden'} md:block`}>
                        <Link
                            href={link.href}
                            className="text-neutral-500 border border-transparent py-2 px-4 rounded-full hover:text-neutral-700 hover:border-neutral-200 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hover:border-neutral-600 transition-all duration-300"
                        >
                            <span className="font-neueMontreal font-light">{link.name}</span>
                        </Link>
                    </li>
                ))}
                <li>
                    <Button variant="hello" asChild className="group">
                        <Link href="/contact">
                            <span className="text-neutral-200 group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-300 transition-all duration-300">Say `Hello`</span>
                        </Link>
                    </Button>
                </li>
            </nav>
        </header>
    )
}