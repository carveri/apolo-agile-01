import { NextResponse } from "next/server"
import { useronemanydetalle } from "./controller"



export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await useronemanydetalle.getOneUserMany(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

export const DELETE = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await useronemanydetalle.deleteOneUserMany(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}