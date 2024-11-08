
import { NextResponse } from "next/server"
import { empresaDetalle1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await empresaDetalle1.getEmpresaDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}