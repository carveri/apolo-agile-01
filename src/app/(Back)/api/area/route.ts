
import { NextResponse } from "next/server"
import { area1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await area1.postArea(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async(req:Request)=>{
    try {
        return NextResponse.json(await area1.getArea(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}