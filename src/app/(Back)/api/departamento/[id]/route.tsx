import { NextResponse } from "next/server"
import { departamentoDetalle } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";



//ruta delete
export const DELETE = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await departamentoDetalle.deleteDepartamento(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}