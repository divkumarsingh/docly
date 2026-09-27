"use client"
import { AuthNavUser } from "@/lib/types/account";
import { useState } from "react";
import { NavGroup, NavLink } from "@/lib/types";
import { DoclyLogo } from "../ui/logo";
import Link from "next/link";
import { mainNav } from "@/lib/landing-data";
import { ModeToggle } from "../theme/mode-toggle";
import { SearchDocsButton } from "../search/search-docs-button";
export function NavBar({
    initialUser = null
}: {
    initialUser?: AuthNavUser | null;
}) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/80 supports-backdrop-filter:backdrop-blur-md">
            <div className=" flex mx-auto items-center gap-8 px-6 max-w-6xl h-16 ">
                <Link href="/" aria-label="docsy-home">
                    <DoclyLogo />
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    {mainNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm text-muted-foreground transition-colors hover:text-brand"
                        >{item.label}</Link>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-2">
                    <SearchDocsButton className="hidden lg:inline-flex" />
                    <ModeToggle className="" />
                    {/* have to add authentication signin/authheader authentication */}
                    {/* add mobile navigation*/}
                </div>
            </div>
        </header>
    )

}