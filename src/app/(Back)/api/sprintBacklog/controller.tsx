
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class SprintBacklog {
    postSprintBacklog =async(req:Request)=>{
        const {nombreSprintBacklog, sprintId} = await req.json()
        const saveSprintBacklog = await prisma.sprintBacklog.create({
            data:{
                nombreSprintBacklog,
                sprintId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveSprintBacklog
    }

    getSprintBacklog =async()=>{
        const getAllSprintBacklog = await prisma.sprintBacklog.findMany({
            orderBy: {
                nombreSprintBacklog: 'asc'
            }
        })
        return getAllSprintBacklog
    }
}

export const sprintBacklog1 = new SprintBacklog()