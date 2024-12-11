
import { NextResponse } from "next/server"
import { sprint1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await sprint1.postSprint(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await sprint1.getSprint())
    } catch (error) {
        return NextResponse.json(error)
    }
}