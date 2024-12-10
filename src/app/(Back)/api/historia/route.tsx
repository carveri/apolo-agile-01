
import { NextResponse } from "next/server"
import { historia1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await historia1.postHistoria(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await historia1.getHistoria(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}