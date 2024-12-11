
import { NextResponse } from "next/server"
import {userAdmin1 } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await userAdmin1.getUserAdmin(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}
