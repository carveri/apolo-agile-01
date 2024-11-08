
import { NextResponse } from "next/server"
import { departamento1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await departamento1.postDepartamento(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await departamento1.getDepartamento(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}