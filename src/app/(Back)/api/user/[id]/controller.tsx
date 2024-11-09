
import prisma from "@/libs/prisma"


class UserDetalle {

    // metodo get
    getUserDetalle = async(req:Request, {params})=>{
        const {email} = params
        const getOneUser = await prisma.user.findFirst({
            where:{
                email:email
            },
            // include:{
            //     cargo: {
            //         include:{
            //             departamento:{
            //                 select:{
            //                     nombreDepartamento: true
            //                 },include:{
            //                     area:{
            //                         select: {
            //                             nombreArea: true
            //                         },include:{
            //                             empresas:{
            //                                 select:{
            //                                     nombreEmpresa:true
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // }
        })
        return getOneUser
    }

    deleteUser = async(req:Request, {params})=>{
        const {id} = params
        const deleteUser = await prisma.user.delete({
            where:{
                id
            }
        })
        return deleteUser
    }
}


export const user1 = new UserDetalle()