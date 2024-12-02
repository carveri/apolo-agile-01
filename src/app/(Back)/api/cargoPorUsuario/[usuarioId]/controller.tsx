
import { ICargoPorUsuarioParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class CargoPorUsuario {
    // metodo
    getCargoPorUsuario = async(req:Request, {params}:ICargoPorUsuarioParams)=>{
        const {usuarioId} = await params
        const getCargoPorUsuario = await prisma.cargo.findFirst({
            where: {
                usuarios:{
                    some:{
                        id:usuarioId
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