"use client"

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "cn";
import { Button } from "../ui/button";

export function ModeToggle({ className }: { className?: String }) {
    const { resolvedTheme, setTheme } = useTheme();
    return (
        < Button
            variant="outline"
            size="icon"
            className={cn(className, "cursor-pointer")}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
        >
            <MoonIcon className="dark:hidden" />
            <SunIcon className="hidden dark:block" />
            <span className="sr-only">Toggle theme</span>
        </Button >
    )
}