import { NextResponse } from "next/server"
import { equipoDetalle } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await equipoDetalle.getEquipoDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//ruta delete
export const DELETE = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await equipoDetalle.deleteEquipo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}