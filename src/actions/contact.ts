"use server";

import { ContactClient } from "@/clients/contact";

export async function contactAction(_: any, formData: any) {
    await ContactClient.createContact({ category: formData.get("category"), content: formData.get("content") });
}
