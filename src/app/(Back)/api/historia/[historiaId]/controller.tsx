
import { IHistoriaParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class HistoriaOne {

    // metodo put
    // el param es el is de la historia
    putHistoria = async(req:Request, {params}:IHistoriaParams)=>{
        const {historiaId} = await params
        const {nombreHistoria, productBacklogId, mediumBacklogId, presupuestoHistoria, tiempoHistoria, discrepancia1, descripcion1, status, discrepancia2, descripcion2,discrepancia3, descripcion3, peso1, peso2, peso3} = await req.json()
        const updatedCategorias = await prisma.historia.update({
            where:{
                id: historiaId
            },
            data:{
                nombreHistoria,
                presupuestoHistoria,
                tiempoHistoria,
                discrepancia1,
                descripcion1,
                discrepancia2,
                descripcion2,
                status,
                peso1,
                peso2,
                peso3,
                productBacklogId,
                mediumBacklogId
            }
        })
        return updatedCategorias
    }

    // metodo delete
    deleteHistoria = async(req:Request, {params}:IHistoriaParams)=>{
        const {historiaId} = params
        const deleteCategoria = await prisma.historia.delete({
            where:{
                id:historiaId
            }
        })
        return deleteCategoria
    }

    // metodo get
    getOneHistoria = async(req:Request, {params}:IHistoriaParams)=>{
        const {historiaId} = await params
        
        const getOneHistoria = await prisma.historia.findMany({
            where:{
                id:{
                    equals: historiaId
                }, 
            },include:{
                user:{
                    include:{
                        cargo:{
                            select:{
                                nombreCargo:true
                            }
                        }
                    }
                }
            },
            orderBy:{
                updatedAt:'desc'
            }
            
        })
        return getOneHistoria
    }
}

export const historiaOne1 = new HistoriaOne()