import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";
import { NextResponse } from "next/server";

const tablatureService = new TablatureService(new NeonTablatureRepository());

export async function POST(req: Request) {
    try {
        const tablature = await tablatureService.createTablature();
        return NextResponse.json({ id: tablature.id }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
