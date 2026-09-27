import { NavGroup, NavItem } from "./types";

export const mainNav: NavItem[] = [
    { href: "#product", label: "Product" },
    { href: "#how-it-works", label: "How it works" },
    { href: "security", label: "Security" },
    { href: "pricing", label: "Pricing" }
]

export const footerNav: NavGroup[] = [
    {
        title: "Product",
        items: [
            { href: "/#product", label: "Features" },
            { href: "/#pricing", label: "Pricing" },
            { href: "/#security", label: "Security" },
            { href: "/changelog", label: "ChangeLog" },
        ]
    },
    {
        title: "Company",
        items: [
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blogs" },
            { href: "/careers", label: "Careers" },
            { href: "/contact", label: "Contact" },
        ]
    },
    {
        title: "Resources",
        items: [
            { href: "/docs", label: "Docs" },
            { href: "/api", label: "API" },
            { href: "/integration", label: "Integration" },
            { href: "/status", label: "Status" },
        ]
    },
    {
        title: "Legal",
        items: [
            { href: "/privacy", label: "Privacy" },
            { href: "/terms", label: "Terms" },
            { href: "/dpa", label: "DPA" },
            { href: "/soc2", label: "SOC 2" }
        ]
    }
]