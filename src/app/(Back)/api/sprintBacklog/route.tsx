
import { NextResponse } from "next/server"
import { sprintBacklog1} from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await sprintBacklog1.postSprintBacklog(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await sprintBacklog1.getSprintBacklog(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}