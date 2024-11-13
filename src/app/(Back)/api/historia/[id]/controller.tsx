
import prisma from "@/libs/prisma"

class HistoriaOne {

    // metodo put

    // el param es el is de la historia
    putHistoria = async(req:Request, {params})=>{
        const {id} = params
        const {nombreHistoria,presupuestoHistoria, tiempoHistoria, discrepancia1, descripcion1, status, discrepancia2, descripcion2,discrepancia3, descripcion3, tiempo1, peso1, presupuesto2, peso2, equipo3, peso3} = await req.json()
        const updatedCategorias = await prisma.historia.update({
            where:{
                id
            },
            data:{
                nombreHistoria,
                presupuestoHistoria,
                tiempoHistoria,
                discrepancia1,
                descripcion1,
                discrepancia2,
                descripcion2,
                discrepancia3,
                descripcion3,
                
                status,
                tiempo1,
                peso1,
                presupuesto2,
                peso2,
                equipo3,
                peso3



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