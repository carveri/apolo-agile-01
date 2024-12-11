import prisma from "@/libs/prisma"
import { NextRequest } from "next/server";

class HistoriaStatus {
    
    // metodo get
    // el param es el status
    getHistoriaStatus = async(req:NextRequest)=>{
        const url = new URL(req.url)

        //const userId = url.searchParams.get("userId")
        const status:any = url.searchParams.get("status")
        const empresaId:any = url.searchParams.get("empresaId")
        //console.log('cosas:', userId, status);
        const getHistoriaStatus = await prisma.historia.findMany({
            where:{
                //userId: userId,
                status: status,
                user:{
                    empresaId: empresaId
                },
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
        return getHistoriaStatus
    }
    }

   


export const historiaStatus = new HistoriaStatus()