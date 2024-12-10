
import { IUserParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class EmpresaPorUsuario {

    // metodo get
    getEmpresaPorUsuario = async(req:Request, {params}:IUserParams)=>{
        const {userId} = await params
        const getEmpresaPorUsuario = await prisma.empresa.findMany({
            where:{
                usuarios:{
                    some:{
                        id: userId
                    }
                }
            },
            // include:{
            //     usuarios:{
            //         where:{
            //             id: userId
            //         }
            //     }
            // }
            
        })
        return getEmpresaPorUsuario
    }
}

export const empresaPorUsuario = new EmpresaPorUsuario()