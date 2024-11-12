
import { NextResponse } from "next/server"
import {userArea1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await userArea1.getUserArea(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}