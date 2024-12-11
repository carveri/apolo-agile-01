
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Empresa {
    postEmpresa =async(req:Request)=>{
        const {nombreEmpresa, rutEmpresa} = await req.json()
        const saveEmpresa = await prisma.empresa.create({
            data:{
                nombreEmpresa,
                rutEmpresa,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveEmpresa
    }

    getEmpresa =async()=>{
        const getAllEmpresa = await prisma.empresa.findMany({
            orderBy:{
                nombreEmpresa: 'asc'
            }
        })
        return getAllEmpresa
    }
}

export const empresa1 = new Empresa()