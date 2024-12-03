
import { NextResponse } from "next/server"
import { historiaStatus } from "./controller"
import { IHistoriaStatusParams } from "@/app/Interfaces/IParams"

// ruta put
export const GET = async(req:Request, {params}:IHistoriaStatusParams)=>{
    try {
        return NextResponse.json(await historiaStatus.getHistoriaStatus(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}