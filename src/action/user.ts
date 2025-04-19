"use server";

import { auth, signIn, signOut } from "@/auth";
import { NeonUserRepostiroy } from "@/repository/user";
import { UserService } from "@/service/user";

export async function signInAction() {
    await signIn();

    const session = await auth();
    if (session?.user?.email) {
        await new UserService(new NeonUserRepostiroy()).createUser(session.user?.email);
    }
}

export async function signOutAction() {
    await signOut();
}
