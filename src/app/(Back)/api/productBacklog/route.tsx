
import { NextResponse } from "next/server"
import { productBacklog1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await productBacklog1.postProductBacklog(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await productBacklog1.getProductBacklog(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}