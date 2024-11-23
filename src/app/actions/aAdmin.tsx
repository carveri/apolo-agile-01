"use server"

import bcrypt from "bcryptjs";


export const agregarUsuario = async(formData:FormData)=>{

    interface IData{
        password: string

            email: string
            apellidoPaterno:string
            apellidoMaterno:string
            primerNombre:string
            segundoNombre:string
            cargoId:string
            empresaId:string
            equipoId:string
            rutPersonal:string
            createdAt: string,
            horaAt: string
    }

    const primerNombre = formData.get('primerNombre')?.toString()
    const segundoNombre = formData.get('segundoNombre')?.toString()
    const apellidoPaterno = formData.get('apellidoPaterno')?.toString()
    const apellidoMaterno = formData.get('apellidoMaterno')?.toString()
    const rutPersonal = formData.get('rutPersonal')?.toString()

    const email = formData.get('email')?.toString()
    const cargoId = formData.get('cargoId')
    const empresaId = '12112'
    const equipoId = formData.get('equipoId')?.toString()
    const password = formData.get('password')?.toString()
    const confirmPassword = formData.get('confirmPassword')?.toString()
    //const empresaId = 'c9ecf7bd-bc9c-4505-a1e9-43da91112f34'
    const datitos = datos
    console.log({primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, rutPersonal, email, cargoId, empresaId, equipoId, password, confirmPassword, datitos});
    

    if(!primerNombre || !segundoNombre || !apellidoPaterno || !apellidoMaterno || !rutPersonal || !email  ||  !password) {
        return
    } 

    if(password !== confirmPassword) {
        return
    }
    
    
    const bpassword = bcrypt.hashSync(password)
    // const nuevoUsuario = await prisma.user.create({
    //     data:{
    //         primerNombre,
    //         segundoNombre,
    //         apellidoPaterno,
    //         apellidoMaterno,
    //         rutPersonal,
    //         email,
    //         cargoId,
    //         empresaId,
    //         equipoId,
    //         password:bpassword,
    //         createdAt: format(new Date(), 'dd/MM/yyyy'),
    //         horaAt: format(new Date(), 'H:mm')
    //     }})
    //    console.log({nuevoUsuario});
       
}