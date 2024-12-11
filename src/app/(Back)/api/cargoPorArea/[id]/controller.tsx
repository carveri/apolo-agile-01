
import { INombreAreaParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class CargoDetalle {
    // metodo
    getAreaDetalle = async(req:Request, {params}:INombreAreaParams)=>{
        const {nombreArea} = params
        const getOneArea = await prisma.area.findFirst({
            where:{
                nombreArea: nombreArea
            },include:{
                equipos:{
                    include:{
                        usuarios:{
                            include:{
                                cargo: true
                            }
                        }
                    }
                }
            },
            orderBy:{
                nombreArea: 'asc'
            }
        })
        return getOneArea
    }
}

export const cargoArea1 = new CargoDetalle()