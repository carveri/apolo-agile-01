import { NextResponse } from "next/server"
import { cargopordepto1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await cargopordepto1.getCargoPorDepto(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}