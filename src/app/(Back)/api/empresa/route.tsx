
import { NextResponse } from "next/server"
import { empresa1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await empresa1.postEmpresa(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await empresa1.getEmpresa())
    } catch (error) {
        return NextResponse.json(error)
    }
}