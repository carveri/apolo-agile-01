
import prisma from "@/libs/prisma"

class CargoPorUsuario {
    // metodo
    getCargoPorUsuario = async(req:Request, {params})=>{
        const {id} = params
        const getCargoPorUsuario = await prisma.cargo.findFirst({
            where: {
                usuarios:{
                    some:{
                        id:id
                    }
                }
            },
            
            
            orderBy:{
                nombreCargo: 'asc'
            }
        })
        return getCargoPorUsuario
    }
}

export const cargoporusuario1 = new CargoPorUsuario()