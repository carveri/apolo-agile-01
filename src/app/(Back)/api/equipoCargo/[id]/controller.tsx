
import prisma from "@/libs/prisma"

class EquipoCargo {
    // metodo
    getEquipoCargo = async(req:Request, {params})=>{
        const {id} = params
        const getOneEquipoCargo = await prisma.equipo.findMany({
            where: {
                
        })
        return getOneEquipoCargo
    }
}

export const equipoCargo = new EquipoCargo()