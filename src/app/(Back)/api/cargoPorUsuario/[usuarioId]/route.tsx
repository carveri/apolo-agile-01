import { NextResponse } from "next/server"
import { cargoporusuario1 } from "./controller";
import { ICargoPorUsuarioParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:ICargoPorUsuarioParams)=>{
    try {
        return NextResponse.json(await cargoporusuario1.getCargoPorUsuario(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}