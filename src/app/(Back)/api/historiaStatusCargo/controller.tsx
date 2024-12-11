import prisma from "@/libs/prisma"
import { NextRequest} from "next/server";

class HistoriaStatusCargo {
    
    // metodo get
    // el param es el status
    getHistoriaStatusCargo = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const userId:any = url.searchParams.get("userId")
        const status:any = url.searchParams.get("status")
        const empresaId:any = url.searchParams.get("empresaId")
        //console.log('cosas:', userId, status);
        const getHistoriaStatusCargo = await prisma.historia.findMany({
            where:{
                userId: userId,
                status: status,
                user:{
                    empresaId:empresaId
                }

            },
            include:{
                user:{
                    include:{
                        cargo:{
                            select:{
                                nombreCargo: true
                            }
                        }
                    }
                }
            },
            orderBy:{
                updatedAt: 'desc'
            }
        })
        return getHistoriaStatusCargo
    }
    }

   


export const historiaStatusCargo = new HistoriaStatusCargo()