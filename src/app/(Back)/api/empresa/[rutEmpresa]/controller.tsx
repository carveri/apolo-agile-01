import { IRutEmpresaParams } from "@/app/Interfaces/IParams"
import prisma from "@/libs/prisma"

class EmpresaDetalle {

    // metodo get
    getEmpresaDetalle = async(req:Request, {params}:IRutEmpresaParams)=>{
        const {rutEmpresa} = await params
        //console.log('rutt:', rutEmpresa);
        
        const getOneEmpresa = await prisma.empresa.findFirst({
            where:{
                rutEmpresa:{
                    equals:rutEmpresa
                }
            }
            
        })
        return getOneEmpresa
    }

    // deleteEmpresaDetalle = async(req:Request, {params}:IRutEmpresaParams)=>{
    //     const {rutEmpresa} = await params
    //     //console.log('rutt:', rutEmpresa);
        
    //     const deleteOneEmpresa = await prisma.empresa.delete({
    //         where:{
    //             rutEmpresa: rutEmpresa
    //         }
            
    //     })
    //     return deleteOneEmpresa
    // }

    // metodo put
    // putEmpresaDetalle = async(req:Request, {params})=>{
    //     const {id} = await params
    //     const {nombreEmpresa, } = await req.json()
    //     const updatedCategorias = await prisma.historia.update({
    //         where:{
    //             id: id
    //         },
    //         data:{
    //             nombreHistoria,
    //             presupuestoHistoria,
    //             tiempoHistoria,
    //             discrepancia1,
    //             descripcion1,
    //             discrepancia2,
    //             descripcion2,
    //             discrepancia3,
    //             descripcion3,
    //             status,
    //             peso1,
    //             peso2,
    //             peso3
    //         }
    //     })
    //     return updatedCategorias
    // }
}

export const empresaDetalle1 = new EmpresaDetalle()