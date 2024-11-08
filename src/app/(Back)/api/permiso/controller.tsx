
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Permiso {
    postPermiso =async(req:Request)=>{
        const {nombrePermiso} = await req.json()
        const savePermiso = await prisma.permiso.create({
            data:{
                nombrePermiso,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return savePermiso
    }

    getPermiso =async(req:Request)=>{
        const getAllPermiso = await prisma.permiso.findMany({
            orderBy: {
                nombrePermiso: 'asc'
            }
        })
        return getAllPermiso
    }
}

export const permiso1 = new Permiso()