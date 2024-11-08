
import { NextResponse } from "next/server"
import { pb1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await pb1.getOnePb(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}
