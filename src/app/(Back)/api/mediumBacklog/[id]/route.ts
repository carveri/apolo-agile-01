import { NextResponse } from "next/server"
import { mediumBacklogOne1 } from "./controller"

// ruta put
export const PUT = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await mediumBacklogOne1.putMediumBacklog(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


export const DELETE = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await mediumBacklogOne1.deleteHistoria(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}