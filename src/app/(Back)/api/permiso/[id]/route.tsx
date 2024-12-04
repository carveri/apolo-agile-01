import { NextResponse } from "next/server"
import { permisoDetalle } from "./controller"
import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async(req:Request, {params}:IPermisoParams)=>{
    try {
        return NextResponse.json(await permisoDetalle.getOnePermiso(req, {params}))
    } catch (error) {
        
    }
}


export const DELETE = async(req:Request, {params}:IPermisoParams)=>{
    try {
        return NextResponse.json(await permisoDetalle.deleteOnePermiso(req, {params}))
    } catch (error) {
        
    }
}