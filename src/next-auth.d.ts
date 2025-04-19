import "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            username: string;
            email: string;
            role: string;
            [key: string]: string;
        };
    }
}
