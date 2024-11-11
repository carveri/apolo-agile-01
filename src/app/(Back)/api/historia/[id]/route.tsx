
import { NextResponse } from "next/server"
import { historiaOne1 } from "./controller"

// ruta put
export const PUT = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await historiaOne1.putHistoria(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const DELETE = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await historiaOne1.deleteHistoria(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}