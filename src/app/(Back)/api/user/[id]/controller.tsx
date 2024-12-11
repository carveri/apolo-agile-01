
import { IEmailEmpresaParams, IParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"


class UserDetalle {

    // metodo get
    getUserDetalle = async(req:Request, {params}:IEmailEmpresaParams)=>{
        const {email} = params
        const getOneUser = await prisma.user.findFirst({
            where:{
                email:email
            },
            orderBy:{
                updatedAt:'desc'
            }
            
        })
        return getOneUser
    }

    // metodo delete
    deleteUser = async(req:Request, {params}:IParams)=>{
        const {id} = params
        const deleteUser = await prisma.user.delete({
            where:{
                id
            }
        })
        return deleteUser
    }

    // metodo put
    putUserDetalle = async(req:Request, {params}:IParams)=>{
        const {id} = await params
        const {primerNombre,segundoNombre, apellidoPaterno, apellidoMaterno, rutPersonal, empresaId, cargoId, equipoId } = await req.json()
        const updatedUser = await prisma.user.update({
            where:{
                id: id
            },
            data:{
                primerNombre,
                segundoNombre,
                apellidoPaterno,
                apellidoMaterno,
                rutPersonal,
                empresaId,
                cargoId,
                equipoId
                
            }
        })
        return updatedUser
    }
}


export const user1 = new UserDetalle()