import { db } from "@/clients/prisma";
import { User } from "@/generated/prisma";

export interface UserReposiytory {
    createUser(email: string): Promise<User>;
}

export class NeonUserRepostiroy implements UserReposiytory {
    async createUser(email: string): Promise<User> {
        return await db.user.create({ data: { email } });
    }
}
