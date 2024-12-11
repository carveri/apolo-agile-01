
import { NextResponse } from "next/server"
import {areaEmpresa1 } from "./controller";


// ruta get one
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await areaEmpresa1.getAreaEmpresa(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}
