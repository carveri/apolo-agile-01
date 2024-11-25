
import prisma from "@/libs/prisma"

class UserArea {

    // metodo
    getUserArea = async(req:Request, {params})=>{
        const {id} = params
        const getOneUserArea = await prisma.user.findMany({
            where:{
                cargo:{
                    departamento:{
                        areaId: id
                    }
                }
            },
            include:{
                cargo:{
                    include:{
                        departamento:{
                            include:{
                               area:{
                                include:{
                                    equipos:{
                                        select:{
                                            usuarios:{
                                                select:{
                                                    primerNombre: true
                                                }
                                            }
                                        }
                                    }
                                }
                               }
                            }
                        }
                    }
                }
            },
            orderBy:{
                apellidoPaterno: 'asc'
            }
        })
        return getOneUserArea
    }
}


export const userArea1 = new UserArea()