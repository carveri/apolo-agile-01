import prisma from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server";

class HistoriaStatusEmpresa {
    
    // metodo get
    // el param es el status
    getHistoriaStatusEmpresa = async(req:NextRequest)=>{
        const url = new URL(req.url)

        //const userId = url.searchParams.get("userId")
        const status = url.searchParams.get("status")
        const empresaId = url.searchParams.get("empresaId")
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
            // include:{
            //     user:{
            //         include:{
            //             cargo:{
            //                 select:{
            //                     nombreCargo: true
            //                 }
            //             }
            //         }
            //     }
            // },
            orderBy:{
                updatedAt: 'desc'
            }
        })
        return getHistoriaStatusEmpresa
    }
    }

   


export const historiaStatusEmpresa = new HistoriaStatusEmpresa()