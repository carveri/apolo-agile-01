import prisma from "@/libs/prisma"

class EmpresaDetalle {

    // metodo get
    getEmpresaDetalle = async(req:Request, {params})=>{
        const {rutEmpresa} = params
        const getOneEmpresa = await prisma.empresa.findFirst({
            where:{
                rutEmpresa
            }
            
        })
        return getOneEmpresa
    }
}

export const empresaDetalle1 = new EmpresaDetalle()