
import prisma from "@/libs/prisma"

class HistoriaOne {

    // metodo put
    putHistoria = async(req:Request, {params})=>{
        const {id} = params
        const {nombreHistoria, discrepancia1, descripcion1, discrepancia2, descripcion2,discrepancia3, descripcion3,discrepancia4, descripcion4} = await req.json()
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
            }
        })
        return updatedCategorias
    }

    // // metodo delete
    // deleteCategoria = async(req:Request, {params}: InterParams)=>{
    //     const {id} = params
    //     const deleteCategoria = await prisma.categoria.delete({
    //         where:{
    //             id
    //         }
    //     })
    //     return deleteCategoria
    // }

    // // metodo GET ONE
    // getOneCategoria = async(req:Request, {params}: InterParams)=>{
    //     const session = await getServerSession(authOptions)
    //     const {id} = params
    //     const getOne = await prisma.categoria.findUnique({
    //         where:{
    //             id,
    //         },
    //         include:{
    //             gastos: {
    //                 where: {
    //                     userId: session?.user?.id
    //                 },
    //                 orderBy:{
    //                     nombreGasto: 'asc'
    //                 }
    //             },
    //         }
    //     })
    //     return getOne
    // }
}

export const historiaOne1 = new HistoriaOne()