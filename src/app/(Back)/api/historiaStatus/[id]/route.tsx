
import { NextResponse } from "next/server"
import { historiaStatus } from "./controller"

// ruta put
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await historiaStatus.getHistoriaStatus(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}