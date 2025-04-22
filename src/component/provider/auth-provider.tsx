"use client";

import { SessionProvider } from "next-auth/react";

export type Props = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>;
};
