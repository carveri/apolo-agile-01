import { NextResponse } from "next/server"
import { user1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await user1.getUserDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//export const GET 