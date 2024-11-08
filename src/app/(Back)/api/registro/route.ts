import { NextResponse } from "next/server"
import { registro1 } from "./controller"


// post
export const POST = async(req:Request)=>{
    try {
        return NextResponse.json(await registro1.postRegistro(req))
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
} 


//get
export const GET =async(req:Request)=>{
    try {
        return NextResponse.json(await registro1.getRegistro(req))
    } catch (error) {
        return NextResponse.json(error, {
            status: 500
        })
    }
}