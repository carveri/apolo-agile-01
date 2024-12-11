import { NextResponse } from "next/server"
import { equipoCargo } from "./controller";


// ruta get one
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await equipoCargo.getEquipoCargo(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}