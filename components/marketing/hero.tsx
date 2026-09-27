import { ArrowRight, ArrowRightIcon, CheckIcon, PlayIcon } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import Link from "next/link"
import { HeroPreview } from "./hero-preview"
import { TrustedBy } from "./trusted-by"

const PROOF_POINTS = ["Free for 5 documents", "No card required"]

export function Hero() {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 pt-16 pb-13 lg:pt-24 lg:pb-19">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 flex flex-col">
                <div className="flex flex-col items-start gap-6">
                    <Badge
                        variant="outline"
                        className="h-7 gap-2 px-3 text-sm font-normal text-foreground-muted"
                    >
                        <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                        Grounded answers - a citation for every claim

                    </Badge>
                    <h1 className="text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block">Chat with your document</span>
                        <span className="relative inline-block">
                            <span aria-hidden className="absolute inset-x-0 bottom-[0.06em] h-[0.24em] bg-brand/30" />
                            <span className="relative"> Verify every word.</span>
                        </span>
                    </h1>
                    <p>Docly reads your PDFs, contracts, and reports, then answers in plain languaage
                        — with a link to the exact passage behind every claim. No more Ctrl+F. No skimming, No Hallucination.
                    </p>
                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        {/* TODO: make theis auth dialog trigger button later */}
                        <Button
                            variant="outline"
                            className="bg-black text-white px-2 py-4"
                        >
                            Try docly free
                            <ArrowRightIcon data-icon="inline-end" className="text-white" />
                        </Button>
                        <Button
                            variant="outline"
                            className=""
                            render={<Link href="#how-it-works"></Link>}
                            nativeButton={false}
                        >
                            <PlayIcon data-icon="inline-start" className="fill-current" />
                            See how it works
                        </Button>
                    </div>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                        {PROOF_POINTS.map((item) => (
                            <li key={item}
                                className="flex items-center gap-1.5 text-muted-foreground">
                                <CheckIcon className="size-4 text-brand" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <HeroPreview />
            </div>
            <TrustedBy className="mt-20 lg:mt-28" />
        </section>
    )
}