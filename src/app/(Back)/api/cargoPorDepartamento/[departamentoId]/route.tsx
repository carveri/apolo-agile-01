import { NextResponse } from "next/server"
import { cargopordepto1 } from "./controller";
import { IDepartamentoParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IDepartamentoParams)=>{
    try {
        return NextResponse.json(await cargopordepto1.getCargoPorDepto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}