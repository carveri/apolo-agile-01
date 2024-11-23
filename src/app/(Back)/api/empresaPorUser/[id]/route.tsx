import { NextResponse } from "next/server"
import { empresaPorUsuario } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await empresaPorUsuario.getEmpresaPorUsuario(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}