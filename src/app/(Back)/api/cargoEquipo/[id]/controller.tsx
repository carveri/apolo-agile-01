
import prisma from "@/libs/prisma"

class CargoEquipo {
    // metodo
    getCargoEquipo = async(req:Request, {params})=>{
        const {id} = params
        const getOneCargoEquipo = await prisma.cargo.findFirst({
            where: {
                departamentoId: {
                    equals: id
                }
            },
            // orderBy:{
            //     nombreCargo: 'asc'
            // }
        })
        return getOneCargoEquipo
    }
}

export const cargoEquipo = new CargoEquipo()