import { NeonUserRepostiroy } from "@/repository/user";
import { UserService } from "@/service/user";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    callbacks: {
        async session({ session }) {
            if (session.user.email) {
                const user = await new UserService(new NeonUserRepostiroy()).createUser(session.user.email);
                session.user.id = user.id;
            }
            return session;
        },
    },
});
