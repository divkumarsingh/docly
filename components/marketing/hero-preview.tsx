import { cn } from "cn";
import { Badge } from "../ui/badge";
import { DoclyMark } from "../ui/logo";
import { FileIcon, VerifiedIcon } from "lucide-react";


function Docline({ className }: { className?: string }) {
    return (
        <div aria-hidden className={cn("h-1.5 rounded-full bg-muted", className)}></div>
    )
}

function Citation({ index }: { index: number }) {
    return (
        <sup className="ml-0.5 font-mono text-[0.6em] text-brand">[{index}]</sup>
    )
}

function WindowBar() {
    return (
        <div className="flex items-center gap-3 border-b px-4 py-3">
            <div aria-hidden className="flex gap-1.5">
                <span className="rounded-full bg-muted-foreground gap-1.5"></span>
                <span className="rounded-full bg-muted-foreground gap-1.5"></span>
                <span className="rounded-full bg-muted-foreground gap-1.5"></span>
            </div>
            <div className="text-muted-foreground flex min-w-0 items-center gap-1.5 font-mono text-xs" >
                <FileIcon className="shrink-0 size-3.5" />
                <span className="truncate">Q3_Vendor_Agreement.pdf</span>
            </div>

            <Badge
                variant="outline"
                className="ml-auto hidden h-6 rounded-lg font-mono text-[0.625rem] font-normal text-muted-foreground sm:inlien-flex">
                5 docs indexed
            </Badge>
        </div>
    )
}

function AnswerPane() {
    return (
        <div className="flex-col gap-3 flex border-b p-4 sm:border-r sm:border-b-0">
            <p className="ml-auto max-w-[90%] rounded-xl bg-muted px-3.5 py-2.5 text-sm">
                What&apos;s the termination notice period?
            </p>
            <DoclyMark className="size-4" />
            <span className="font-mono text-[0.625em] tracking-[0.18em] text-muted-foreground">DOCLY</span>
            <p className="text-sm leading-relaxed">
                Either party may terminate with {" "}
                <mark>
                    60 day&apos;s written notice
                </mark>
                <Citation index={1} />
                , and immediately for a material breach that is uncured after 30 days <Citation index={2} />.
            </p>
            <p className="flex items-center gap-1.5 text-xs text-brand">
                <VerifiedIcon className="size-3.5" />
                Verify in source
            </p>
            {/* TODO: Implement typing dots here */}
            <p> . . .</p>

            <div className="mt-auto flex items-center gap-2 rounded-xl border px-3 py-2.5">
                <span className="truncate text-sm text-muted-foreground">
                    Ask about your documents...
                </span>
                <kbd className="ml-auto">⌘K</kbd>
            </div>
        </div>
    )
}

function SourcePane() {
    return (
        <div className="flex flex-col gap-2.5 p-4">
            <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[0.625rem] tracking-[0.15em] text-muted-foreground">
                    SOURCE · P.12
                </span>
                <Badge
                    variant="outline"
                    className="rounded-md border-brand font-mono text-[0.625rem] font-normal text-brand"
                >
                    [1]
                </Badge>
            </div>

            <Docline />
            <Docline className="w-4/5" />

            <blockquote className="border-l-2 border-brand bg-brand/15 p-3 text-xs leading-relaxed">
                &ldquo;…may be terminated by either party upon{" "}
                <strong className="font-semibold">
                    sixty (60) days&apos; prior written notice
                </strong>{" "}
                delivered to the address of record…&rdquo;
            </blockquote>

            <Docline className="w-11/12" />
            <Docline className="w-3/4" />
            <Docline className="w-10/12" />
            <Docline className="w-1/2" />
        </div>
    )
}



export function HeroPreview({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "overflow-hidden shadow-xl bg-card border rounded-xl"
            )}>
            <WindowBar />
            <div className="grid sm:grid-cols-[1.5fr_1fr]">
                <AnswerPane />
                <SourcePane />
            </div>
        </div>
    )
}