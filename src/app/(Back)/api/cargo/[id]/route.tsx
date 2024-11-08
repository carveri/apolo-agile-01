import { NextResponse } from "next/server"
import { cargo1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await cargo1.getCargoDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}