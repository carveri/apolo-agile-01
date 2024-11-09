
import prisma from "@/libs/prisma"

class EquipoCargo {
    // metodo
    getEquipoCargo = async(req:Request, {params})=>{
        const {id} = params
        const getOneEquipoCargo = await prisma.cargo.findFirst({
            where: {
                departamentoId: '2b4a5b1b-532e-4498-bfbf-cc9ab3688de0'
            },
            // orderBy:{
            //     nombreCargo: 'asc'
            // }
        })
        return getOneEquipoCargo
    }
}

export const equipoCargo = new EquipoCargo()