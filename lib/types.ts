export type NavLink = {
    label: string;
    href: string;
    accent?: boolean;
    descriptions?: boolean;
}

type NavSubsection = {
    title: string;
    links: NavLink[];
}

export type NavGroup = {
    title: string;
    items: NavItem[]
}

export type NavItem = {
    label: string;
    href: string;
}

export const siteConfig = {
    name: "Docly",
    description: "Docly turns scattered docs into a single searchable workspace your team can trust."
}