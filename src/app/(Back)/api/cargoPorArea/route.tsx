
import { NextResponse } from "next/server"
import { cargo1 } from "./controller"


// ruta post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await cargo1.postCargo(req))
    } catch (error) {
        return NextResponse.json(error)
    }
}

// tuta get
export const GET = async()=>{
    try {
        return NextResponse.json(await cargo1.getCargo())
    } catch (error) {
        return NextResponse.json(error)
    }
}