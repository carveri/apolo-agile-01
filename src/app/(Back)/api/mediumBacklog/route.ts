
import { NextResponse } from "next/server"
import { mediumBacklog1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await mediumBacklog1.postMediumBacklog(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await mediumBacklog1.getMediumBacklog())
    } catch (error) {
        return NextResponse.json(error)
    }
}