
import { NextResponse } from "next/server"
import { caracter1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await caracter1.postCaracter(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await caracter1.getCaracter(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}