
import { NextResponse } from "next/server"
import { historiaStatus } from "./controller"
import { IHistoriaStatusParams } from "@/app/Interfaces/IParams"

// ruta put
export const GET = async({params}:IHistoriaStatusParams)=>{
    try {
        return NextResponse.json(await historiaStatus.getHistoriaStatus({params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}