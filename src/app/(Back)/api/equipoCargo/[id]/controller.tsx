
import prisma from "@/libs/prisma"

class EquipoCargo {
    // metodo
    getEquipoCargo = async()=>{
        const getOneEquipoCargo = await prisma.equipo.findMany()
        return getOneEquipoCargo
    }
}

export const equipoCargo = new EquipoCargo()