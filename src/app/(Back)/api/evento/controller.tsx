
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Evento {
    postEvento =async(req:Request)=>{
        const {nombreEvento, cargoId} = await req.json()
        const saveEvento = await prisma.evento.create({
            data:{
                nombreEvento,
                cargoId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveEvento
    }

    getEvento =async()=>{
        const getAllEvento = await prisma.evento.findMany({
            orderBy:{
                nombreEvento: 'asc'
            }
        })
        return getAllEvento
    }
}

export const evento1 = new Evento()