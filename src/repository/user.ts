import { db } from "@/clients/prisma";
import { User } from "@/generated/prisma";

export interface UserReposiytory {
    createUser(email: string): Promise<User>;
}

export class NeonUserRepostiroy implements UserReposiytory {
    async createUser(email: string): Promise<User> {
        const user = await db.user.findUnique({
            where: { email },
        });

        if (user) {
            return user;
        } else {
            return await db.user.create({ data: { email } });
        }
    }
}
