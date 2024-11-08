
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class ProductBacklog {
    postProductBacklog =async(req:Request)=>{
        const {nombreProductBacklog} = await req.json()
        const saveProductBacklog = await prisma.productBacklog.create({
            data:{
                nombreProductBacklog,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveProductBacklog
    }

    getProductBacklog =async(req:Request)=>{
        const getAllProductBacklog = await prisma.productBacklog.findMany({
            orderBy:{
                nombreProductBacklog: 'asc'
            }
        })
        return getAllProductBacklog
    }
}

export const productBacklog1 = new ProductBacklog()