import { IHistoriaParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class MediumBacklogOne {

    // metodo put
    // el param es el is de la historia
    putMediumBacklog = async(req:Request, {params})=>{
        const {id} = await params
        const {nombreMediumBacklog, isActive, sprint} = await req.json()
        const updatedCategorias = await prisma.mediumBacklog.update({
            where:{
                id: id
            },
            data:{
                sprint,
                nombreMediumBacklog,
                isActive
                
            }
        })
        return updatedCategorias
    }

    // metodo delete
    deleteHistoria = async(req:Request, {params})=>{
        const {id} = await params
        const deleteCategoria = await prisma.mediumBacklog.delete({
            where:{
                id:id
            }
        })
        return deleteCategoria
    }

    // // metodo get
    // getOneHistoria = async(req:Request, {params}:IHistoriaParams)=>{
    //     const {historiaId} = await params
        
    //     const getOneHistoria = await prisma.historia.findMany({
    //         where:{
    //             id:{
    //                 equals: historiaId
    //             }, 
    //         },include:{
    //             user:{
    //                 include:{
    //                     cargo:{
    //                         select:{
    //                             nombreCargo:true
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         orderBy:{
    //             updatedAt:'desc'
    //         }
            
    //     })
    //     return getOneHistoria
    // }
}

export const mediumBacklogOne1 = new MediumBacklogOne()