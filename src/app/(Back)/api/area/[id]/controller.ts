

import prisma from "@/libs/prisma"


class AreaDetalle {

    // metodo get
    getAreaDetalle = async(req:Request, {params})=>{
        const {nombreArea} = params
        const getOneArea = await prisma.area.findFirst({
            where:{
                nombreArea:nombreArea
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

    // getUserDetalle2 = async(req:Request, {params})=>{
    //     const {email} = params
    // }
}


export const area1 = new AreaDetalle()