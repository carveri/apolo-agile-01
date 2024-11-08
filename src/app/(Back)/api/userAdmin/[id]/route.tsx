
import { NextResponse } from "next/server"
import {userAdmin1 } from "./controller";


// ruta get one
export const GET = async(req:Request, {params})=>{
    try {
        return NextResponse.json(await userAdmin1.getUserAdmin(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}
