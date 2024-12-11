import { NextResponse } from "next/server"
import { cargoArea1 } from "./controller";
import { INombreAreaParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:INombreAreaParams)=>{
    try {
        return NextResponse.json(await cargoArea1.getAreaDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}