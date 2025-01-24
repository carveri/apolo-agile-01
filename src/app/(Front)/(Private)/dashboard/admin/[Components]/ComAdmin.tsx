'use client'

import Tabla from '@/app/(Front)/React/Components/Tablas/Tabla'
import React, { useEffect, useState } from 'react'
import { format } from "date-fns";
import BadgeNoAun from '@/app/(Front)/React/Components/BadgeNoAun/BadgeNoAun';
import { IComAdmin } from '@/app/Interfaces/IComAdmin';
import { useHistoriaAdmin } from '../../../[stores]/adminStore';
import Modal from './Modal';
import { deleteData } from '@/app/(Front)/React/Fetch/deleteData';
import { useRouter } from "next/navigation";

const ComAdmin = ({logicaTabla,nombre, url,res}:IComAdmin) => {

  const router = useRouter()

  //console.log('resllega;', res);
  const {usuarios, getUsuarios} = useHistoriaAdmin()
  const [activarModal, setActivarModal] = useState(false)

  //const {updateidUsuario} = usuarioStore()
  const [datosUsuarios, setDatosUsuarios] = useState([])
  const [isModalOpen, setIsModalOpen] = useState<boolean> (false)

  const [idActualizar, setIdActualizar] = useState('')
  const [usuarioActualizado, setUsuarioActualizado] = useState([])
  
  const empresaId =  res.at(0)?.id

  useEffect(()=>{
    getUsuarios(url, empresaId)
  }, [])

//console.log('usuario;', usuarios);
  //console.log('empressaaaid;', empresaId);
  // useEffect(()=>{
  //   if(idActualizar){
  //     const usuario = usuarios.find(usuario=> usuario.id === idActualizar)
  //     setUsuarioActualizado(usuario)
  //   }
  // }, [])
  
  const handleClickTablaAdmin =(e, id)=>{
    if(e.target.name === 'ver'){
      console.log('soy el de ver');
    }
    else if(e.target.name === 'actualizar'){
      setIsModalOpen(!isModalOpen)
      console.log('idd:', id);
      setIdActualizar(id)
      
      //console.log(idActualizar);
      
    }
    else if(e.target.name ==='eliminar'){
      const ruta = 'user'
      const url = id
      deleteData({ruta, url})
      alert('Se elimino correctamente el usuario!')
      location.reload()
    }
    else {
      console.log('sd');
      
    }
 }
  console.log('usuarioActualizado;', usuarioActualizado);
  console.log('idddsssssssssssssssssss;', idActualizar);
  
  
  
  return (
    <div className='w-full h-full ' >
        {usuarios.length !== 0 ?
        <section  className={`${isModalOpen ?  'w-[99%] h-[99%] bg-gray-200 opacity-10': 'w-[99%] h-[99%]'}`}> 
        <main className=' px-4 w-full h-[99%] '>
            <div className='h-14  bg-colorBarraSuperiorTablas grid place-content-center text-colorTextoBarraAlta font-semibold'>
               {nombre} {res.at(0)?.nombreEmpresa}
            </div>
            <header className='w-full h-[7%] -mt-12 flex justify-end items-center  pb-3 font-bold mb-1 pr-6  text-colorTextoBarraAlta'>
              <div className='pr-3 '>
                Fecha Actual
              </div>
              <div>
                {format(new Date(), 'dd/MM/yyyy')}
              </div>
            </header>
            <div className='w-[1620px] mt-1 z-30  top-28 left-3/5 max-h-[617px] overflow-auto'>
            <Tabla
                logicaTabla ={logicaTabla}
                usuarios={usuarios}
                activarModal={activarModal}
                setActivarModal={setActivarModal}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                setIdActualizar={setIdActualizar}
                idActualizar={idActualizar}
                setUsuarioActualizado={setUsuarioActualizado}
                handleClickTablaAdmin={handleClickTablaAdmin}
            />
      </div>
        </main>
        <div className=' '>
                  <Modal
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    datosUsuarios={datosUsuarios}
                    empresaId={empresaId}
                    usuarios={usuarios}
                    usuarioActualizado={usuarioActualizado}
                    idActualizar={idActualizar}
                    setUsuarioActualizado={setUsuarioActualizado}
                    usuarioActualizado={usuarioActualizado}
                  />
                </div>
    </section>
    
    : 
    <BadgeNoAun
        nombre = {nombre}
    />
      }      
    </div>
  )
}

export default ComAdmin