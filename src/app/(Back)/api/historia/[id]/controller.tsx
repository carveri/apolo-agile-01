
import prisma from "@/libs/prisma"

class HistoriaOne {

    // metodo put

    // el param es el is de la historia
    putHistoria = async(req:Request, {params})=>{
        const {id} = params
        const {nombreHistoria, discrepancia1, descripcion1, status, discrepancia2, descripcion2,discrepancia3, descripcion3,discrepancia4, descripcion4} = await req.json()
        const updatedCategorias = await prisma.historia.update({
            where:{
                id
            },
            data:{
                nombreHistoria,
                discrepancia1,
                descripcion1,
                discrepancia2,
                descripcion2,
                discrepancia3,
                descripcion3,
                discrepancia4,
                descripcion4,
                status
            }
        })
        return updatedCategorias
    }

    // metodo delete
    deleteHistoria = async(req:Request, {params}: InterParams)=>{
        const {id} = params
        const deleteCategoria = await prisma.historia.delete({
            where:{
                id
            }
        })
        return deleteCategoria
    }

    // metodo get
    getOneHistoria = async(req:Request, {params})=>{
        const {id} = params
        const getOneHistoria = await prisma.historia.findFirst({
            where:{
                id
            },
            
        })
        return getOneHistoria
    }
    
    
}

export const historiaOne1 = new HistoriaOne()