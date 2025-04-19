import { User } from "@/generated/prisma";
import { UserReposiytory } from "@/repository/user";

export class UserService {
    constructor(private repository: UserReposiytory) {}

    async createUser(email: string): Promise<User> {
        return this.repository.createUser(email);
    }
}
