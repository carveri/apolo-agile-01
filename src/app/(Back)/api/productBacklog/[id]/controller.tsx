import prisma from "@/libs/prisma"

class Pb {
    // metodo 1
    
        // // metodo GET ONE
    getOnePb = async(req:Request, {params})=>{
        //const session = await getServerSession(authOptions)
        const {id} = params
        const getOnePb = await prisma.productBacklog.findUnique({
            where:{
                id: id
            },
            include:{
                historias: {
                    where: {
                        nombreHistoria: "Bajar los costos55"
                    },
                    orderBy:{
                        nombreHistoria: 'asc'
                    }
                },
                
            }, 
        })
        return getOnePb
    }
    }


export const pb1 = new Pb()