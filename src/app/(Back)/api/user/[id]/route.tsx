import { NextResponse } from "next/server"
import { user1 } from "./controller";
import { IEmailEmpresaParams, IParams } from "@/app/Interfaces/IParams";


// ruta get one
export const GET = async(req:Request, {params}:IEmailEmpresaParams)=>{
    try {
        return NextResponse.json(await user1.getUserDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//ruta delete
export const DELETE = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await user1.deleteUser(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}

//ruta delete
export const PUT = async(req:Request, {params}:IParams)=>{
    try {
        return NextResponse.json(await user1.putUserDetalle(req, {params}))
    } catch (error) {
        return NextResponse.json(error)
    }
}