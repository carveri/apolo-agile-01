
import prisma from "@/libs/prisma"

class HistoriaStatus {
    
    // metodo get
    // el param es el status
    getHistoriaStatus = async(req:Request, {params})=>{
        const {id} = params
        //console.log('statusito', id);
        
        const getHistoriaStatus = await prisma.historia.findMany({
            where:{
                status: id
            }
            
        })
        return getHistoriaStatus
    }
    }

   


export const historiaStatus = new HistoriaStatus()