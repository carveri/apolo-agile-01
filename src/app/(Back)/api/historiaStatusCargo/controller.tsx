import prisma from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server";

class HistoriaStatusCargo {
    
    // metodo get
    // el param es el status
    getHistoriaStatusCargo = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const userId = url.searchParams.get("userId")
        const status = url.searchParams.get("status")
        //console.log('cosas:', userId, status);
        const getHistoriaStatusCargo = await prisma.historia.findMany({
            where:{
                userId: userId,
                status: status
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
            }
        })
        return getHistoriaStatusCargo
    }
    }

   


export const historiaStatusCargo = new HistoriaStatusCargo()