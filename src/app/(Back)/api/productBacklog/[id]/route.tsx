
import { NextResponse } from "next/server"
import { pb1 } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await pb1.getOnePb(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}


// ruta delete
export const DELETE = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await pb1.deletePb(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}