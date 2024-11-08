
import prisma from "@/libs/prisma"


class UserDetalle {

    // metodo get
    getUserDetalle = async(req:Request, {params})=>{
        const {email} = params
        const getOneUser = await prisma.user.findFirst({
            where:{
                email:email
            },include:{
                cargo: {
                    include:{
                        departamento:{
                            include:{
                                area: {
                                    include: {
                                        empresas: {
                                            select: {
                                                rutEmpresa: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        return getOneUser
    }

    // getUserDetalle2 = async(req:Request, {params})=>{
    //     const {email} = params
    // }
}


export const user1 = new UserDetalle()