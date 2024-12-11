import { NextResponse } from "next/server"
import { cargo1 } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await cargo1.getCargoDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}