
import { NextResponse } from "next/server"
import { equipo1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await equipo1.postEquipo(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await equipo1.getEquipo())
    } catch (error) {
        return NextResponse.json(error)
    }
}