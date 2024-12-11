
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Sprint {
    postSprint =async(req:Request)=>{
        const {nombreSprint} = await req.json()
        const saveSprint = await prisma.sprint.create({
            data:{
                nombreSprint,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveSprint
    }

    getSprint =async()=>{
        const getAllSprint = await prisma.sprint.findMany({
            orderBy:{
                nombreSprint: 'asc'
            }
        })
        return getAllSprint
    }
}

export const sprint1 = new Sprint()