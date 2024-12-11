
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Historia {
    postHistoria =async(req:Request)=>{
        const {nombreHistoria, productBacklogId, caracterId, como, para, quiero, detalleHistoria, presupuestoHistoria, puntoHistoria,tiempoHistoria, userId} = await req.json()
        const saveHistoria = await prisma.historia.create({
            data:{
                nombreHistoria,
                productBacklogId,
                caracterId,
                detalleHistoria,
                presupuestoHistoria,
                tiempoHistoria,
                userId,
                puntoHistoria,
                como,
                para,
                quiero,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveHistoria
    }

    getHistoria =async()=>{
        const getAllHistoria = await prisma.historia.findMany({
            orderBy: {
                nombreHistoria: 'asc'
            }
        })
        return getAllHistoria
    }
}

export const historia1 = new Historia()