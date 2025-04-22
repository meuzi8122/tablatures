import { auth } from "@/auth";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";
import { NextResponse } from "next/server";

export const POST = auth(async function POST(req) {
    if (!req.auth) {
        return NextResponse.json({}, { status: 401 });
    }

    try {
        const tablature = await new TablatureService(new NeonTablatureRepository()).createTablature(req.auth.user.id);
        console.log(tablature);
        return NextResponse.json({ tablature }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({}, { status: 500 });
    }
});
