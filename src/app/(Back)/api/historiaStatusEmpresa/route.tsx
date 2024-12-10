import { NextResponse } from "next/server"
import { historiaStatusEmpresa } from "./controller"

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await historiaStatusEmpresa.getHistoriaStatusEmpresa(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}