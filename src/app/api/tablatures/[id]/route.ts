import { auth } from "@/auth";
import { NeonTablatureRepository } from "@/repository/tablature";
import { TablatureService } from "@/service/tablature";
import { NextResponse } from "next/server";

export const DELETE = auth(async function DELETE(req, { params }) {
    if (!req.auth) {
        return NextResponse.json({}, { status: 401 });
    }

    if (!params) {
        return NextResponse.json({}, { status: 404 });
    }

    const { id } = params;

    try {
        await new TablatureService(new NeonTablatureRepository()).deleteTanblature(Number(id));
        console.log(params);
    } catch (error) {
        console.log(error);
        return NextResponse.json({}, { status: 500 });
    }

    return NextResponse.json({}, { status: 200 });
});
