import { NextResponse } from "next/server"
import { departamentoDetalle } from "./controller";



//ruta delete
export const DELETE = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await departamentoDetalle.deleteDepartamento(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}