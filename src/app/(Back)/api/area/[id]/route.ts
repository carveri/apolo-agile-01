import { NextResponse } from "next/server"
import { area1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await area1.getAreaDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}