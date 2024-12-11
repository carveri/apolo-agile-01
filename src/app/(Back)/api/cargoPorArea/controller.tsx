import prisma from "@/libs/prisma"
import { format } from "date-fns";

class Cargo {
    postCargo =async(req:Request)=>{
        const {nombreCargo, departamentoId} = await req.json()
        const saveArea = await prisma.cargo.create({
            data:{
                nombreCargo,
                departamentoId,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveArea
    }

    getCargo =async()=>{
        const getAllCargo = await prisma.cargo.findMany({
            orderBy:{
                nombreCargo: 'asc'
            }
        })
        return getAllCargo
    }
}

export const cargo1 = new Cargo()