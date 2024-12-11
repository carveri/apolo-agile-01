
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Equipo {
    postEquipo =async(req:Request)=>{
        const {nombreEquipo, areaId} = await req.json()
        const saveEquipo = await prisma.equipo.create({
            data:{
                nombreEquipo,
                areaId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveEquipo
    }

    getEquipo =async()=>{
        const getAllEquipo = await prisma.equipo.findMany({
            orderBy:{
                nombreEquipo: 'asc'
            }
        })
        return getAllEquipo
    }
}

export const equipo1 = new Equipo()