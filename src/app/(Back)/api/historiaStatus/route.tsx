import { NextRequest, NextResponse } from "next/server"
import { historiaStatus } from "./controller"

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await historiaStatus.getHistoriaStatus(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}