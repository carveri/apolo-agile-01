
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class MediumBacklog {
    postMediumBacklog =async(req:Request)=>{
        const {nombreMediumBacklog} = await req.json()
        const saveMediumBacklog = await prisma.mediumBacklog.create({
            data:{
                nombreMediumBacklog,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveMediumBacklog
    }

    getMediumBacklog =async()=>{
        const getAllMediumBacklog = await prisma.mediumBacklog.findMany({
            orderBy:{
                nombreMediumBacklog: 'asc'
            }
        })
        return getAllMediumBacklog
    }
}

export const mediumBacklog1 = new MediumBacklog()