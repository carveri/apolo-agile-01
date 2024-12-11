import { NextResponse } from "next/server"
import { empresaPorUsuario } from "./controller";
import { IUserParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IUserParams)=>{
    try {
        return NextResponse.json(await empresaPorUsuario.getEmpresaPorUsuario(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}