
import { NextResponse } from "next/server"
import { evento1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await evento1.postEvento(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await evento1.getEvento())
    } catch (error) {
        return NextResponse.json(error)
    }
}