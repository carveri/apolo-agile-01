import prisma from "@/libs/prisma"
import { NextRequest } from "next/server"


class UserAreaEmpresa {
    // metodo get

    getAreaEmpresa = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const areaId = url.searchParams.get("areaId")
        const empresaId = url.searchParams.get("empresaId")

        const getAreaEmpresa = await prisma.user.findMany({
            where:{
                cargo:{
                    departamento:{
                        areaId: areaId
                    }
                },
                empresaId: empresaId
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
                updatedAt: 'desc'
            }
        })
        return getAreaEmpresa
    }
}

export const areaEmpresa1  = new UserAreaEmpresa()