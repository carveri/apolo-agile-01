
import prisma from "@/libs/prisma"

class UserAdmin {

    // metodo
    getUserAdmin = async(req:Request, {params})=>{
        const {id} = params
        const getOneUserAdmin = await prisma.user.findMany({
            where:{
                id: id
            },
            select:{
                cargo:{
                    select:{
                        departamento:{
                            select:{
                                area:{
                                    include:{
                                        empresas: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
            orderBy:{
                apellidoPaterno: 'asc'
            }
        })
        return getOneUserAdmin
    }
}


export const userAdmin1 = new UserAdmin()