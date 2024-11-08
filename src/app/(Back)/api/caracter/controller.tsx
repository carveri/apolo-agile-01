
import prisma from "@/libs/prisma"
import { format } from "date-fns";


class Caracter {
    postCaracter =async(req:Request)=>{
        const {nombreCaracter} = await req.json()
        const saveCaracter = await prisma.caracter.create({
            data:{
                nombreCaracter,
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            }
        })
        return saveCaracter
    }

    getCaracter =async(req:Request)=>{
        const getAllCaracter = await prisma.caracter.findMany({
            orderBy:{
                nombreCaracter: 'asc'
            }
        })
        return getAllCaracter
    }
}

export const caracter1 = new Caracter()