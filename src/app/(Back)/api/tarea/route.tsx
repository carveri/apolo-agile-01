
import { NextResponse } from "next/server"
import { tarea1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await tarea1.postTarea(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await tarea1.getTarea(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}