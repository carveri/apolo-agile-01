
import { IPermisoParams } from "@/app/Interfaces/IParams";
import prisma from "@/libs/prisma"
import { format } from "date-fns";
import { NextRequest } from "next/server";


class Permiso {
    postPermiso =async(req:Request)=>{
        const {nombrePermiso, cargoId, cargoId2, cargoId3, cargoId4, cargoId5} = await req.json()
        const savePermiso = await prisma.permiso.create({
            data:{
                nombrePermiso,
                cargos:{
                    connect:[
                        {id:cargoId},{id:cargoId2},{id:cargoId3},{id:cargoId4},{id:cargoId5}
                    ]
                },
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return savePermiso
    }

    getPermiso =async(req:NextRequest)=>{
        const getAllPermiso = await prisma.permiso.findMany({
            include:{
                cargos:{
                    select:{
                        nombreCargo:true
                    }
                }
            }
        })
        return getAllPermiso
    }
}

export const permiso1 = new Permiso()