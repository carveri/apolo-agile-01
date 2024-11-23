
import prisma from "@/libs/prisma"

class CargoPorDepto {
    // metodo
    getCargoPorDepto = async(req:Request, {params})=>{
        const {id} = params
        const getcargopordepto = await prisma.cargo.findMany({
            where:{
                departamentoId: {
                    equals: id
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
            }
            // orderBy:{
            //     nombreDepartamento: 'asc'
            // }
        })
        return getcargopordepto
    }
}

export const cargopordepto1 = new CargoPorDepto()