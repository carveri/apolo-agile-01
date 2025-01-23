
import { NextResponse } from "next/server"
import { user1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await user1.postUser(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await user1.getUser())
    } catch (error) {
        return NextResponse.json(error)
    }
}