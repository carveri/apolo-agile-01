

import { IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"


class AreaDetalle {

    // metodo get
    getAreaDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const getOneArea = await prisma.area.findFirst({
            where:{
                nombreArea:id
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

    // metodo put
    putArea = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const {nombreArea} = await req.json()
        const updatedArea = await prisma.area.update({
            where:{
                id
            },
            data:{
                nombreArea,
            }
        })
        return updatedArea
    }
}


export const area1 = new AreaDetalle()