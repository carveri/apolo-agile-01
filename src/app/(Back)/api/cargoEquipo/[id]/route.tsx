import { NextResponse } from "next/server"
import { cargoEquipo } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await cargoEquipo.getCargoEquipo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}