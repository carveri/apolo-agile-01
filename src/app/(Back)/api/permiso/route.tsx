
import { NextResponse } from "next/server"
import { permiso1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await permiso1.postPermiso(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:NextResponse)=>{
    try {
        return NextResponse.json(await permiso1.getPermiso(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}