
import prisma from "@/libs/prisma"

class EmpresaPorUsuario {

    // metodo get
    getEmpresaPorUsuario = async(req:Request, {params})=>{
        const {id} = params
        const getEmpresaPorUsuario = await prisma.empresa.findMany({
            where:{
                usuarios:{
                    some:{
                        id: id
                    }
                }
            }
            
        })
        return getEmpresaPorUsuario
    }
}

export const empresaPorUsuario = new EmpresaPorUsuario()