import { NextResponse } from "next/server"
import { cargoEquipo } from "./controller";
import { IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await cargoEquipo.getCargoEquipo(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}