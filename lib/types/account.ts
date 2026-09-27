
export type AuthNavUser = {
    name: string | null;
    email: string | null;
}

export type AuthMode = "login" | "register";

export type AccountProfile = {
    id: string;
    name: string;
    email: string;
    username: string;
    image?: string | null;
    emailVerified: boolean;
    createdAt: string;
}