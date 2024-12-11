import { NextResponse } from "next/server"
import { permisoDetalle } from "./controller"
import { IPermisoParams } from "@/app/Interfaces/IParams"


export const GET = async({params}:IPermisoParams)=>{
    try {
        return NextResponse.json(await permisoDetalle.getOnePermiso({params}))
    } catch (error) {
        
    }
}


export const DELETE = async({params}:IPermisoParams)=>{
    try {
        return NextResponse.json(await permisoDetalle.deleteOnePermiso({params}))
    } catch (error) {
        
    }
}