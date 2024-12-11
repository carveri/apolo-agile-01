
import { IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class CargoDetalle {
    // metodo
    getCargoDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const getOneCargo = await prisma.cargo.findFirst({
            where: {
                id: id
            },
            orderBy:{
                nombreCargo: 'asc'
            }
        })
        return getOneCargo
    }
}

export const cargo1 = new CargoDetalle()