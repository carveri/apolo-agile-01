import { NextResponse } from "next/server"
import { equipoCargo } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await equipoCargo.getEquipoCargo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}