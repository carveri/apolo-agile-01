import prisma from "@/libs/prisma"



class UserManyDetalle {
    // metodo get one
    getOneUserMany = async (req: Request, {params}) => {
        const {id} = await params
        const getonemanyuser = await prisma.user.findUnique({
            where:{
                id: id
            }
        })
        return getonemanyuser
    }


    // metodo delete 
    deleteOneUserMany = async(req:Request, {params})=>{
        const {id} = params
        const deleteoneuser = await prisma.user.delete({
            where:{
                id:id
            }
        })
        return deleteoneuser
    }
}


export const useronemanydetalle = new UserManyDetalle()