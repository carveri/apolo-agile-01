import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Departamento {
    postDepartamento =async(req:Request)=>{
        const {nombreDepartamento, areaId} = await req.json()
        const saveDepartamento = await prisma.departamento.create({
            data:{
                nombreDepartamento,
                areaId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveDepartamento
    }

    getDepartamento =async(req:Request)=>{
        const getAllDepartamento = await prisma.departamento.findMany({
            orderBy:{
                nombreDepartamento: 'asc'
            }
        })
        return getAllDepartamento
    }
}

export const departamento1 = new Departamento()

