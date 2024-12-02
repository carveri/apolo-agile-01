
import { NextResponse } from "next/server"
import { historiaOne1 } from "./controller"
import { IHistoriaParams } from "@/app/Interfaces/IParams"

// ruta put
export const PUT = async(req:Request, {params}:IHistoriaParams)=>{
    try {
        return NextResponse.json(await historiaOne1.putHistoria(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const DELETE = async(req:Request, {params}:IHistoriaParams)=>{
    try {
        return NextResponse.json(await historiaOne1.deleteHistoria(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// ruta put
export const GET = async(req:Request, {params}:IHistoriaParams)=>{
    try {
        return NextResponse.json(await historiaOne1.getOneHistoria(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}