import { IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class DepartamentoDetalle {
    
    deleteDepartamento = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const deleteDepartamento = await prisma.departamento.delete({
            where:{
                id
            }
        })
        return deleteDepartamento
    }
}

export const departamentoDetalle = new DepartamentoDetalle()