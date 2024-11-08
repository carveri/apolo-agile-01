
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Tarea {
    postTarea =async(req:Request)=>{
        const {nombreTarea, puntoHistoria, cargoId, usuarioId, historiaId, sprintBacklogId} = await req.json()
        const saveTarea = await prisma.tarea.create({
            data:{
                nombreTarea,
                puntoHistoria,
                cargoId,
                usuarioId,
                historiaId,
                sprintBacklogId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveTarea
    }

    getTarea =async(req:Request)=>{
        const getAllTarea = await prisma.tarea.findMany({
            orderBy:{
                nombreTarea:'asc'
            }
        })
        return getAllTarea
    }
}

export const tarea1 = new Tarea()