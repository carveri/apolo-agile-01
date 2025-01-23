import { NextResponse } from "next/server"
import { userMany1 } from "./controller"



// ruta post 
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await userMany1.postUserMany(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}


// ruta get 
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await userMany1.getUserMany(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}