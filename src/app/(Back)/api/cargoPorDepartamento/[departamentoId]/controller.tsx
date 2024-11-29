
import { IDepartamentoParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class CargoPorDepto {
    // metodo
    getCargoPorDepto = async(req:Request, {params}:IDepartamentoParams)=>{
        const {departamentoId} = await params
        const getcargopordepto = await prisma.cargo.findMany({
            where:{
                departamentoId: {
                    equals: departamentoId
                }
            },
            include:{
                departamento:{
                    include:{
                        area:{
                            include:{
                                equipos:true
                            }
                        }
                    }
                }
            },
            orderBy:{
                nombreCargo: 'asc'
            }
        })
        return getcargopordepto
    }
}

export const cargopordepto1 = new CargoPorDepto()