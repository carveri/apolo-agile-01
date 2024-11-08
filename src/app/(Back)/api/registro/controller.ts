import prisma from "@/libs/prisma"
import bcrypt from "bcryptjs";


class Registro {

    // metodo post
    postRegistro = async(req:Request)=>{
        const {primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, email, rut, nombreEmpresa, password} = await req.json()
        const bpassword = bcrypt.hashSync(password)
        const saveUser = await prisma.user.create({
            data:{
                primerNombre,
                segundoNombre,
                apellidoPaterno,
                apellidoMaterno,
                email, 
                rut,
                nombreEmpresa,
                password: bpassword
            }
        })
        return saveUser
    }

    // metodo get
    getRegistro = async(req:Request)=>{
        const getAllUser = await prisma.user.findMany({
            orderBy:{
                primerNombre: 'asc'
            }
        })
        return getAllUser
    }
}

export const registro1 = new Registro()