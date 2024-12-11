import { NextResponse } from "next/server"
import { equipoCargo } from "./controller";


// ruta get one
export const GET = async()=>{
    try {
        return NextResponse.json(await equipoCargo.getEquipoCargo())
    } catch (error) {
        return NextResponse.json(error)
    }
}