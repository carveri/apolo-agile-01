
import { IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class CargoEquipo {
    // metodo
    getCargoEquipo = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const getOneCargoEquipo = await prisma.cargo.findFirst({
            where: {
                
            },
            // orderBy:{
            //     nombreCargo: 'asc'
            // }
        })
        return getOneCargoEquipo
    }
}

export const cargoEquipo = new CargoEquipo()