
import { IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class CargoEquipo {
    // metodo
    getCargoEquipo = async()=>{
        
        const getOneCargoEquipo = await prisma.cargo.findMany({})
        return getOneCargoEquipo
    }
}

export const cargoEquipo = new CargoEquipo()