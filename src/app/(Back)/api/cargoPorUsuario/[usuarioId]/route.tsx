import { NextResponse } from "next/server"
import { cargoporusuario1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await cargoporusuario1.getCargoPorUsuario(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}