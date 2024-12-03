
import { IHistoriaStatusParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class HistoriaStatus {
    
    // metodo get
    // el param es el status
    getHistoriaStatus = async(req:Request, {params}:IHistoriaStatusParams)=>{
        const {status} = await params
        //console.log('statusito', id);
        
        const getHistoriaStatus = await prisma.historia.findMany({
            where:{
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
        return getHistoriaStatus
    }
    }

   


export const historiaStatus = new HistoriaStatus()