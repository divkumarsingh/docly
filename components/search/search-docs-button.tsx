import { cn } from "cn";
import { Button } from "../ui/button";
import { Kbd } from "../ui/kbd";


export function SearchDocsButton({
    className,
    showShortcut = true
}: {
    className?: String;
    showShortcut?: Boolean
}) {
    return (
        <Button
            variant="outline"
            className={cn("gap-3", showShortcut && "pr-1.5", className)}
        >
            <span className="font-normal text-muted-foreground">Search docs</span>
            {showShortcut && <Kbd className="ml-auto">⌘K</Kbd>}
        </Button>
    )
}