import { NextResponse } from "next/server"
import { area1 } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await area1.getAreaDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta put
export const PUT = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await area1.putArea(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}