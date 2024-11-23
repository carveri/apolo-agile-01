// 'use client'

import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";
import FormularioClientePeticion from "@/app/(Front)/React/Components/Formularios/FormularioClientePeticion"
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

// import { useState, useEffect } from "react";
// import { format } from "date-fns";

// import { dataClientes } from '@/app/(Front)/React/Utils/dataClientes'

// import React from 'react'
// import { dataDeptos } from "@/app/(Front)/React/Utils/dataDeptos";
// import { dataCaracter } from "@/app/(Front)/React/Utils/dataCaracter";
// import { dataCargo } from "@/app/(Front)/React/Utils/dataCargo";
// import { getData } from "@/app/(Front)/React/Fetch/getData";
// import { postData } from "@/app/(Front)/React/Fetch/postData";
// import { getDataLista } from "@/app/(Front)/React/Fetch/getDataLista";
// import FormularioClientePeticion from "@/app/(Front)/React/Components/Formularios/FormularioClientePeticion";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/(Back)/api/auth/[...nextauth]/route";



const page = async() => {

    const session = await getServerSession(authOptions)
// validacion
if(!session){
 redirect('/api/auth/signin')
}
//console.log(user);

const {user}= session
const {id} = user
console.log('datauserpal cliente:', user);




    

  return (
    <div className='w-full h-full bg-white grid place-items-center' >
        <section className='w-[99%] h-[99%] bg-gray-50 rounded '>
            <header className='w-full h-[5%] py-4 pl-4 '>
                Dashboard Cliente {'>'} Clientes {'>'} Comercial {'>'} Agregar Tarea
            </header>
            <main className='w-full h-[95%] '>
            <FormularioClientePeticion
                id={id}
            />
        </main>
        </section>
        
    </div>
  )
}

export default page