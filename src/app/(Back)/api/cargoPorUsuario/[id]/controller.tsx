
import prisma from "@/libs/prisma"

class CargoPorUsuario {
    // metodo
    getCargoPorUsuario = async(req:Request, {params})=>{
        const {departamentoId} = params
        const getCargoPorUsuario = await prisma.cargo.findFirst({
            where: {
                departamentoId
            },
            
            
            orderBy:{
                nombreCargo: 'asc'
            }
        })
        return getCargoPorUsuario
    }
}

export const cargoporusuario1 = new CargoPorUsuario()