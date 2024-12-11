import { NextResponse } from "next/server"
import { equipoDetalle } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await equipoDetalle.getEquipoDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//ruta delete
export const DELETE = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await equipoDetalle.deleteEquipo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}