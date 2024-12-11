
import { NextResponse } from "next/server"
import {userArea1 } from "./controller";
import { IAreaParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IAreaParams)=>{
    try {
        return NextResponse.json(await userArea1.getUserArea(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}
