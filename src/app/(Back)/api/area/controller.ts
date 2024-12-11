import prisma from "@/libs/prisma"
import { format } from "date-fns";

class Area {
    postArea =async(req:Request)=>{
        const {nombreArea} = await req.json()
        const saveArea = await prisma.area.create({
            data:{
                nombreArea: nombreArea,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveArea
    }


    getArea =async()=>{
        const getAllArea = await prisma.area.findMany({
            orderBy:{
                nombreArea: 'asc'
            }
        })
        return getAllArea
    }
}

export const area1 = new Area()