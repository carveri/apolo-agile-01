import prisma from "@/libs/prisma"
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";
import xlsx from "node-xlsx";
import bcrypt from "bcryptjs";
import { format } from "date-fns";



class UserMany{
    // metodo post
    postUserMany = async(request:Request)=>{


        // del excel
        const data = await request.formData();
        const file: File | null = data.get("file") as unknown as File;

        if (!file) {
            return NextResponse.json({ success: false });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // With the file data in the buffer, you can do whatever you want with it.
        // For this, we'll just write it to the filesystem in a new location
        //   const filePath = `/tmp/${file.name}`
        const filePath = path.join(process.cwd(), "public", file.name);
        //console.log('menos uno;', filePath);
        
        await writeFile(filePath, buffer);
        
        
        // voy a ver si funciona la wea
        const workSheetsFromBuffer = xlsx.parse(filePath);
        //console.log('uno;', workSheetsFromBuffer);
        
        const arrayUsers = workSheetsFromBuffer.at(0).data 
        //console.log('arryalisto:', arrayUsers);
        
        const arraysincabecera = arrayUsers.slice(1,arrayUsers.length)
        //console.log('webeo la posta;', arraysincabecera);

        const res = arraysincabecera.map((el)=>{
            return el
        })

        //console.log('dos:', arraysincabecera);
        const objetos = Object.fromEntries(res)
        //console.log('objetos', objetos);
        

        const cuerpo = arraysincabecera
        // console.log('cuerpo;', cuerpo);
        // console.log('cuerpoUNico;', cuerpo.at(0)?.at(1));
        
        //const bpassword = bcrypt.hashSync(password)

        const fusion = [
            {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(0)?.at(0),
                segundoNombre: cuerpo.at(0)?.at(1),
                apellidoPaterno: cuerpo.at(0)?.at(2),
                apellidoMaterno: cuerpo.at(0)?.at(3),
                rutPersonal: cuerpo.at(0)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(0)?.at(5)),
                email: cuerpo.at(0)?.at(6),
                empresaId: cuerpo.at(0)?.at(7),
                cargoId: cuerpo.at(0)?.at(8),
                equipoId: cuerpo.at(0)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            },
            {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(1)?.at(0),
                segundoNombre: cuerpo.at(1)?.at(1),
                apellidoPaterno: cuerpo.at(1)?.at(2),
                apellidoMaterno: cuerpo.at(1)?.at(3),
                rutPersonal: cuerpo.at(1)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(1)?.at(5)),
                email: cuerpo.at(1)?.at(6),
                empresaId: cuerpo.at(1)?.at(7),
                cargoId: cuerpo.at(1)?.at(8),
                equipoId: cuerpo.at(1)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
              },
              {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(2)?.at(0),
                segundoNombre: cuerpo.at(2)?.at(1),
                apellidoPaterno: cuerpo.at(2)?.at(2),
                apellidoMaterno: cuerpo.at(2)?.at(3),
                rutPersonal: cuerpo.at(2)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(2)?.at(5)),
                email: cuerpo.at(2)?.at(6),
                empresaId: cuerpo.at(2)?.at(7),
                cargoId: cuerpo.at(2)?.at(8),
                equipoId: cuerpo.at(2)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
              },
              {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(3)?.at(0),
                segundoNombre: cuerpo.at(3)?.at(1),
                apellidoPaterno: cuerpo.at(3)?.at(2),
                apellidoMaterno: cuerpo.at(3)?.at(3),
                rutPersonal: cuerpo.at(3)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(3)?.at(5)),
                email: cuerpo.at(3)?.at(6),
                empresaId: cuerpo.at(3)?.at(7),
                cargoId: cuerpo.at(3)?.at(8),
                equipoId: cuerpo.at(3)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            },
            {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(4)?.at(0),
                segundoNombre: cuerpo.at(4)?.at(1),
                apellidoPaterno: cuerpo.at(4)?.at(2),
                apellidoMaterno: cuerpo.at(4)?.at(3),
                rutPersonal: cuerpo.at(4)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(4)?.at(5)),
                email: cuerpo.at(4)?.at(6),
                empresaId: cuerpo.at(4)?.at(7),
                cargoId: cuerpo.at(4)?.at(8),
                equipoId: cuerpo.at(4)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
              },
              {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(5)?.at(0),
                segundoNombre: cuerpo.at(5)?.at(1),
                apellidoPaterno: cuerpo.at(5)?.at(2),
                apellidoMaterno: cuerpo.at(5)?.at(3),
                rutPersonal: cuerpo.at(5)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(5)?.at(5)),
                email: cuerpo.at(5)?.at(6),
                empresaId: cuerpo.at(5)?.at(7),
                cargoId: cuerpo.at(5)?.at(8),
                equipoId: cuerpo.at(5)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
              },
              {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(6)?.at(0),
                segundoNombre: cuerpo.at(6)?.at(1),
                apellidoPaterno: cuerpo.at(6)?.at(2),
                apellidoMaterno: cuerpo.at(6)?.at(3),
                rutPersonal: cuerpo.at(6)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(6)?.at(5)),
                email: cuerpo.at(6)?.at(6),
                empresaId: cuerpo.at(6)?.at(7),
                cargoId: cuerpo.at(6)?.at(8),
                equipoId: cuerpo.at(6)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
            },
            {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(7)?.at(0),
                segundoNombre: cuerpo.at(7)?.at(1),
                apellidoPaterno: cuerpo.at(7)?.at(2),
                apellidoMaterno: cuerpo.at(7)?.at(3),
                rutPersonal: cuerpo.at(7)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(7)?.at(5)),
                email: cuerpo.at(7)?.at(6),
                empresaId: cuerpo.at(7)?.at(7),
                cargoId: cuerpo.at(7)?.at(8),
                equipoId: cuerpo.at(7)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
              },
              {
                //id: cuerpo.at(0)?.at(0),
                primerNombre: cuerpo.at(8)?.at(0),
                segundoNombre: cuerpo.at(8)?.at(1),
                apellidoPaterno: cuerpo.at(8)?.at(2),
                apellidoMaterno: cuerpo.at(8)?.at(3),
                rutPersonal: cuerpo.at(8)?.at(4),
                password: bcrypt.hashSync(cuerpo.at(8)?.at(5)),
                email: cuerpo.at(8)?.at(6),
                empresaId: cuerpo.at(8)?.at(7),
                cargoId: cuerpo.at(8)?.at(8),
                equipoId: cuerpo.at(8)?.at(9),
                createdAt: format(new Date(), 'dd/MM/yyyy'),
                horaAt: format(new Date(), 'H:mm')
              }
          ]
        //console.log('FUSION!!!!!!!;', fusion);

        //if(fusion.at(0)?.primerNombre === undefined){
        const postManyUser = await prisma.user.createMany({
           
            data: await fusion
        })
        return postManyUser
}

    // metodo get 
    getUserMany =async(req:Request )=>{
        const getUserMany = await prisma.user.findMany({
        })
        return getUserMany
    } 
}


export const userMany1 = new UserMany()