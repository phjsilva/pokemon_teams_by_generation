"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
    const pathname = usePathname();
    const navItems = [
        { label: "Início", href: "/" },
        { label: "Kanto", href: "/kanto" },
        { label: "Johto", href: "/johto" },
        { label: "Hoenn", href: "/hoenn" },
        { label: "Buscar", href: "/buscar" },
    ];
    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-700  bg-black ">
            <div className="mx-auto flex h-16 max-w-full items-center gap-4 px-4 sm:px-6 lg:px-8 justify-between">
                <Link href="/" className="flex items-center  ">
                    <h1 className=" text-tiny">
                        Poke<span className="text-theme">Teams</span>
                    </h1>
                </Link>

                <nav className="flex gap-5 mx-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                pathname === item.href
                                    ? "text-theme"
                                    : "text-white"
                            }
                        >
                            <h1>{item.label}</h1>
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
