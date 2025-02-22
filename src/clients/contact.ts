import { client } from "@/clients/client";
import type { Contact } from "@/types/domain";

export class ContactClient {
    private static endpoint = "contact";

    static async createContact(contact: Contact) {
        await client.create({
            endpoint: this.endpoint,
            /* セレクトフィールドの要素は配列 */
            content: { ...contact, category: [contact.category] },
        });
    }
}
