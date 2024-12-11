import { IPermisoParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class PermisoDetalle {

    // get one
    getOnePermiso =async({params}:IPermisoParams)=>{
        const {id} = await params
        const onePermiso = await prisma.permiso.findFirst({
            where:{
                id:id
            },
            orderBy:{
                nombrePermiso: 'asc'
            }
        })
        return onePermiso
    }

    // borrar un permiso 
    deleteOnePermiso = async({params}:IPermisoParams)=>{
        const {id} = await params
        const deleteOnePermiso = await prisma.permiso.delete({
            where:{
                id:id
            }
        })
        return deleteOnePermiso
    }

    // // updated 
    // updatedOnePermiso = async(req:Request, {params}:IPermisoParams)=>{
    //     const {id} = await params
    //     const updatedOnePermiso = await 
    // }
}


export const permisoDetalle = new PermisoDetalle()