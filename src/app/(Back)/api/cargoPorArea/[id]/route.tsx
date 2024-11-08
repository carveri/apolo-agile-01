import { NextResponse } from "next/server"
import { cargoArea1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await cargoArea1.getCargoDetalleArea(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}