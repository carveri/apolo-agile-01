
import { NextResponse } from "next/server"
import { empresaDetalle1 } from "./controller";
import { IRutEmpresaParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IRutEmpresaParams)=>{
    try {
        return NextResponse.json(await empresaDetalle1.getEmpresaDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}