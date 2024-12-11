import { IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"


class EquipoDetalle {

    // metodo get
    getEquipoDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const getOneEquipo = await prisma.equipo.findFirst({
            where:{
              areaId: {
                equals: id
              }
            }},
            
        )
        return getOneEquipo
    }

    deleteEquipo = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const deleteEquipo = await prisma.user.delete({
            where:{
                id
            }
        })
        return deleteEquipo
    }
}


export const equipoDetalle = new EquipoDetalle()