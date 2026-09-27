import { cn } from "cn";
import React from "react"
type TitleSizeVariant = "default" | "sm";
type DescriptionSizeVariant = "default" | "sm";
const TitleSize: Record<TitleSizeVariant, string> = {
    "default": "text-3xl sm:text-4xl lg:text-[2.5em]",
    "sm": "text-2xl sm:text-3xl lg:text-4xl"
};

const DescriptionSize: Record<DescriptionSizeVariant, string> = {
    "default": "text-lg",
    "sm": "text-base"
};

type FunctionHeadingProps = {
    eyebrow: React.ReactNode,
    title: React.ReactNode,
    description?: React.ReactNode,
    size?: TitleSizeVariant,
    className?: string
}


export function SectionHeading({
    eyebrow,
    title,
    description,
    size = "default",
    className
}: FunctionHeadingProps
) {
    return (
        <div className={cn("flex, flex-col gap-4", className)}>
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-brand uppercase">{eyebrow}</p>
            <h2
                className={cn("leading-[1.15] font-bold tracking-tight", TitleSize[size])}>
                {title}
            </h2>
            {description ? (
                <p className={cn("leading-relaxed text-muted-foreground", DescriptionSize[size])}>
                    {description}
                </p>
            ) : null}
        </div>
    )
}