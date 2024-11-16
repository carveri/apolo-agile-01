
import { NextResponse } from "next/server"
import { historiaStatusCargo } from "./controller"

// ruta put
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await historiaStatusCargo.getHistoriaStatusCargo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}