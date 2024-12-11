import { NextResponse } from "next/server"
import { cargoEquipo } from "./controller";



// ruta get one
export const GET = async()=>{
    try {
        return NextResponse.json(await cargoEquipo.getCargoEquipo())
    } catch (error) {
        return NextResponse.json(error)
    }
}