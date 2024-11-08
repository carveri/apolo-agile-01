
import prisma from "@/libs/prisma"
import { format } from "date-fns";
import bcrypt from "bcryptjs";


class User {
    postUser =async(req:Request)=>{
        const {password, email, apellidoPaterno, apellidoMaterno, primerNombre, segundoNombre, cargoId, empresaId, equipoId, rutPersonal} = await req.json()
        const bpassword = bcrypt.hashSync(password)
        const saveUser = await prisma.user.create({
            data:{
                password:bpassword,
                email,
                apellidoPaterno,
                apellidoMaterno,
                primerNombre,
                segundoNombre,
                cargoId,
                empresaId,
                equipoId,
                rutPersonal,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveUser
    }

    getUser =async(req:Request)=>{
        const getUser = await prisma.user.findMany({
            orderBy: {
                apellidoPaterno: 'asc'
            }
        })
        return getUser
    }
}

export const user1 = new User()