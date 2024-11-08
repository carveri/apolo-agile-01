
import prisma from "@/libs/prisma"

class CargoDetalle {
    // metodo
    getCargoDetalleArea = async(req:Request, {params})=>{
        const {departamentoId} = params
        const getOneCargoArea = await prisma.cargo.findFirst({
            where: {
                departamentoId
            },
            
            
            orderBy:{
                nombreCargo: 'asc'
            }
        })
        return getOneCargoArea
    }
}

export const cargoArea1 = new CargoDetalle()