import prisma from "@/libs/prisma"
import { NextRequest } from "next/server";

class HistoriaStatusEmpresa {
    
    // metodo get
    // el param es el status
    getHistoriaStatusEmpresa = async(req:NextRequest)=>{
        const url = new URL(req.url)

        //const userId = url.searchParams.get("userId")
        const status:any = url.searchParams.get("status")
        const empresaId:any = url.searchParams.get("empresaId")
        const getHistoriaStatusEmpresa = await prisma.historia.findMany({
            where:{
                // userId: userId,
                //userId: userId,
                status: status,
                // status: status,
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
        return getHistoriaStatusEmpresa
    }
    }

   


export const historiaStatusEmpresa = new HistoriaStatusEmpresa()