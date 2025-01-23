'use client'

import { updateData } from '@/app/(Front)/React/Fetch/updateData'
//import { usuarioStore } from '@/app/Stores/usuariosStore'
import {useEffect, useState} from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from "next/navigation";
import { getDataLista } from '@/app/(Front)/React/Fetch/getDataLista'
import { postData } from '@/app/(Front)/React/Fetch/postData';
import { getData } from '@/app/(Front)/React/Fetch/getData';
import InputFormulario from '@/app/(Front)/React/Components/Formularios/InputFormulario';
import Image from 'next/image';
import ModalAviso from '@/app/(Front)/React/Components/ModalAviso/ModalAviso';
// import { IModal } from '@/app/Interfaces/IModal'
// import { IdatoUsuario } from '@/app/Interfaces/IFetch'
import flechaAbajo from '../../../../React/Assets/Icons/flechaAbajo4.png'


const Modal = ({isModalOpen, setIsModalOpen, datosUsuarios, empresaId, usuarios, idActualizar, setUsuarioActualizado, usuarioActualizado}) => {

  const [activoModal, setActivoModal] = useState(false)
  
      // ESTADOS DE ONCHANGE
      const [primerNombre, setPrimerNombre] = useState('')
      const [segundoNombre, setSegundoNombre] = useState('')
      const [apellidoPaterno, setApellidoPaterno] = useState('')
      const [apellidoMaterno, setApellidoMaterno] = useState('')
      const [rutPersonal, setRutPersonal] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
  
  
  
      const [parametro1, setParametro1] = useState('-')
      const [parametros1, setParametros1] = useState([])
      const [parametros1Id, setParametros1Id] = useState('sdd')
      
      const [parametro2, setParametro2] = useState('-')
      const [parametros2, setParametros2] = useState([])
      const [parametros2Id, setParametros2Id] = useState('')
  
      const [parametro3, setParametro3] = useState('-')
      const [parametros3, setParametros3] = useState([])
      const [parametros3Id, setParametros3Id] = useState('')
  
  
      // estado de activacion
      const [activoParametro1, setActivoParametro1] = useState(false)
      const [activoParametro2, setActivoParametro2] = useState(false)
      const [activoParametro3, setActivoParametro3] = useState(false)
  
      // estado traer las cosas de la empresa con el id del useer
      const [empresa, setEmpresa] = useState([])
      
  
      //console.log('datosusuarios;', datosUsuarios);
      
      console.log('usuarioActualizado;', usuarioActualizado);
      

      // traer datos de los departamentos
      useEffect(()=>{
          const traerParametros = async()=>{
              const ruta = 'departamento'
              const res = await getData({ruta})
              setParametros1(res)
              
          }    
          traerParametros()
          //location.reload();
      }, []);
   
  
      // traer datos de los cargos
          useEffect(()=>{
              const traerParametros = async()=>{
                  const ruta = 'cargoPorDepartamento'
                  const url = parametros1Id
                  const res = await getDataLista({ruta, url})
                  setParametros2(res)
              }    
              traerParametros()
          }, [parametros1Id])
      
  
      // traer datos de los equipos
      useEffect(()=>{
          const traerParametros = async()=>{
              const ruta = 'equipo'
              const res = await getData({ruta})
              setParametros3(res)
              
          }    
          traerParametros()
          
      }, [])
  
      // traer el id de la empresa con el id del admin
      useEffect(()=>{
          const traerParametros = async()=>{
              const ruta = 'empresaPorUser'
              const url = empresaId
              const res = await getDataLista({ruta, url})
              setEmpresa(res)
              
          }    
          traerParametros()
          
      }, [])
  
      
  
      // DEPARTAMENTO
      const handleClickSelectForm =({id,nombreDepartamento})=>{
          setParametros1Id(id)
          
          setParametro1(nombreDepartamento)
          // traer cargos
          
          setActivoParametro1(false)
      }
  
      const handleClickParam1 = ()=>{
          
          setActivoParametro1(!activoParametro1)
      }
  
      
      // CARGO
      const handleClickSelectForm2 =({id,nombreCargo})=>{
          setParametros2Id(id)
          
          setParametro2(nombreCargo)
          setActivoParametro2(false)
      }
  
      const handleClickParam2 = ()=>{
          setActivoParametro2(!activoParametro2)
      }
  
      // EQUIPO 
      const handleClickSelectForm3 =({id, nombreEquipo})=>{
          setParametros3Id(id)
          
          setParametro3(nombreEquipo)
          setActivoParametro3(false)
      }
  
      const handleClickParam3 = ()=>{
          setActivoParametro3(!activoParametro3)
      }
  
      //console.log('equipos:', parametros3);
  
      const filtrarEquiposDevs =(param)=>{
          const res = param?.filter((el)=> el?.nombreEquipo.at(0) === 'D')
          return res
      }
  
      //console.log('empresa:', empresa);
      
  
      // CAMBIAR ESTADO DEL ONCHANGE
      const handleChangeAdmin =(e:React.ChangeEvent<HTMLInputElement>)=>{
          if(e.target.name === 'primerNombre'){
              setPrimerNombre(e.target.value)
          }
          else if(e.target.name === 'segundoNombre'){
              setSegundoNombre(e.target.value)
          }
          else if(e.target.name === 'apellidoPaterno'){
              setApellidoPaterno(e.target.value)
          }
          else if(e.target.name === 'apellidoMaterno'){
              setApellidoMaterno(e.target.value)
          }
          else if(e.target.name === 'rutPersonal'){
              setRutPersonal(e.target.value)
          }
          else if(e.target.name === 'email'){
              setEmail(e.target.value)
          }
          else if(e.target.name === 'password'){
              setPassword(e.target.value)
          }
          else if(e.target.name === 'confirmPassword'){
              setConfirmPassword(e.target.value)
          }
      }
        

    const [nombre, setNombre] = useState('')
    const [tipo, setTipo] = useState('')
    const [precio, setPrecio] = useState(0)

    const [datoDelUsuario, setDatoDelUsuario] = useState(Object)

    const router = useRouter()
    //const {idUsuario} = usuarioStore()
    //console.log('idenmododal:', idActua);

    
    useEffect(()=>{
      const traerData = async()=>{
        const ruta = 'producto'
        const url = 'asa'
        const res = await getDataLista({ruta, url})
        setDatoDelUsuario(res)
      }
      traerData()
    }, [])

    if(idActualizar){
        //console.log('idActualizarddddddddddddddddddd;', idActualizar);
        
        const usuario = usuarios.find(usuario => usuario.id === idActualizar)
        setUsuarioActualizado(usuario)
      }

      console.log('por fin:', usuarioActualizado);
      
    

    // FUNCION DE LOS BOTONES ACTUALIZAR Y CERRAR DE LA MODAL
    const handleClickModalAdmin =(e)=>{
      e.preventDefault()
      if(e.target.name === 'actualizar'){
        e.preventDefault()
          const data = {
            // nombre:nombre.length > 0 ? nombre : datoDelUsuario?.nombre,
            // tipo:tipo.length > 0 ? tipo : datoDelUsuario?.tipo,
            // precio: precio.valueOf() > 0 ? precio : datoDelUsuario?.precio
              primerNombre, 
              segundoNombre, 
              apellidoPaterno, 
              apellidoMaterno, 
              rutPersonal, 
              empresaId: empresaId,
              cargoId: parametros2Id,
              equipoId: parametros3Id ? parametros3Id : '1c3eb8cf-684c-49d4-90da-6698060cbe54',
              email, 
              password, 
              confirmPassword
          }
              console.log(data);
              const ruta = 'user'
              const id= 'fbe29def-eb7d-4083-8c22-32c7bc0a0e52'
              updateData({ruta, id, data})
              alert('Se actualizo correctamente el usuario')
              setIsModalOpen(!isModalOpen)
              location.reload()    
      }
      else if(e.target.name === 'cerrar'){
        //console.log('que moierda hace');
        
        setIsModalOpen(!isModalOpen)
        
      }
    }

    if(!isModalOpen) return null;
  return createPortal(

// +++++++++++++++++++++++++++++++++++++++++ ACA EMPIEZA LA MODAL

    <div className=' rounded w-[900px] h-[700px] bg-gray-50 border border-gray-200 shadow-2xl fixed top-14 left-[600px] py-3 text-tamañoLetraChica'>
        <header className=' w-[100%] h-12  grid place-content-center  text-violet-500 font-semibold text-tamañoLetra '>
          Formulario de Actualizacion
        </header>
        <form   className=' w-full h-[500px] '>

<div className='flex h-[100%] place-content-center  mt-4  px-20 gap-x-5 '>
    
    <section className='w-[55%] h-[550px] border border-gray-200 bg-white  px-4 mr-10 pt-5  rounded shadow-lg'>
        <header className='w-full h-[10%]  grid place-content-center text-tamañoLetra'>
            Datos Personales
        </header>
        <div className='w-full h-[80%] grid grid-rows-5 px-8 '>
            {/* PRIMER NOMBRE */}
            <InputFormulario
                texto = 'Primer Nombre:'
                nombre = 'primerNombre'
                tipo = 'text'
                placeholder = 'Pedro'
                handleChangeAdmin={handleChangeAdmin}
                //usuarios={usuarioActualizado.primerNombre}
            />
            {/* SEGUNDO NOMBRE */}
            <InputFormulario
                texto = 'Segundo Nombre:'
                nombre = 'segundoNombre'
                tipo = 'text'
                placeholder = 'Raul'
                handleChangeAdmin={handleChangeAdmin}
               // usuarios={usuarioActualizado.segundoNombre}
            />
            
            {/* AP PATERNO */}
            <InputFormulario
                texto = 'Apellido Paterno:'
                nombre = 'apellidoPaterno'
                tipo = 'text'
                placeholder = 'Ruiz'
                handleChangeAdmin={handleChangeAdmin}
                //usuarios={usuarioActualizado.apellidoPaterno}
            />
            {/* AP MATERNO */}
            <InputFormulario
                texto = 'Apellido Materno:'
                nombre = 'apellidoMaterno'
                tipo = 'text'
                placeholder = 'Cortes'
                handleChangeAdmin={handleChangeAdmin}
                //usuarios={usuarioActualizado.apellidoMaterno}
            />
            {/* RUT PERSONAL */}
            <InputFormulario
                texto = 'Rut Personal (Puntos y guion):'
                nombre = 'rutPersonal'
                tipo = 'text'
                placeholder = '11.111.111-1'
                handleChangeAdmin={handleChangeAdmin}
               // usuarios={usuarioActualizado.rutPersonal}
            />    
        </div>
        
    </section>




    <section className='w-[45%] h-[550px] border border-gray-200 bg-white  mr-4 pt-5 px-8 rounded shadow-lg  '>
        <header className='w-full h-[10%]  grid place-content-center  text-tamañoLetra' >
            Datos Laborales
        </header>
        <div className='w-full h-[80%] grid grid-rows-6 px-8 mt-2 '>

            {/* LISTA DE Departamento */}
        <article className='grid grid-rows-2  pb-3 '>
            <label  htmlFor="">Nombre Departamento</label>
            <div  className=" pl-3 pr-3 rounded-md w-[220px] border  border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam1}>
                <div className=" w-[350px] flex items-center">
                    {parametro1}
                </div> 
                {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                <div className="pt-2">
                <Image
                    src={flechaAbajo}
                    alt="a"
                    width={20}
                    height={20}
                />
                </div>
            </div>
            {activoParametro1 &&
                <div className={` mt-[60px] z-50  w-[220px] absolute  left-3/5 max-h-[120px] overflow-auto `}>
                                
                    {parametros1.map((el)=>{
                        const {id, nombreDepartamento} = el
                            return  (<button name='departamentoId' onClick={()=>handleClickSelectForm({id, nombreDepartamento})} className='w-[200px]  text-start cursor-pointer h-10 bg-white  hover:bg-violet-200  pl-4' key={id}>
                                {nombreDepartamento}
                                    </button>)
                                    })}
                            </div>
                        
                        }
        </article>




            {/* LISTA DE CARGO */}
            {parametro1 !== '-' &&
                <article className='grid grid-rows-2 pb-3 '>
                <label  htmlFor="">Nombre Cargo</label>
                <div  className=" pl-3 pr-3 rounded-md w-[220px] border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam2}>
                    <div className=" w-[350px] flex items-center">
                        {parametro2}
                    </div> 
                    {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                    <div className="pt-2">
                        <Image
                            src={flechaAbajo}
                            alt="a"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                {activoParametro2 &&
                    <div className={` mt-[60px] w-[220px] z-50 absolute left-3/5 max-h-[120px] overflow-auto `}>
                                    
                        {parametros2?.map((el)=>{
                            const {id, nombreCargo} = el
                                return  (<button name='cargoId' onClick={()=>handleClickSelectForm2({id, nombreCargo})} className='w-[200px] text-start cursor-pointer h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
                                    {nombreCargo}
                                        </button>)
                                        })}
                                </div>
                            
                            }
                    </article>
            
            }

            {/* LISTA DE Equipos */}
            {(parametro1 === 'Backend' || parametro1 === 'Frontend' || parametro1 ==='Database' || parametro1 ==='Diseño' || parametro1 ==='Quality Assurance' || parametro1 ==='SysAdmin') &&
                <article className='grid grid-rows-2 pb-3 '>
                <label  htmlFor="">Nombre Equipo</label>
                <div  className=" pl-3 pr-3 rounded-md w-[220px]  border border-gray-200 cursor-pointer  flex space-x-[10px]  " onClick={handleClickParam3}>
                    <div className=" w-[350px] flex items-center">
                        {parametro3}
                    </div> 
                    {/* <input type="text" className="w-56 "  readOnly aria-valuetext="ds" defaultValue={parametro1} name="cargoId"/> */}
                    <div className="pt-2">
                        <Image
                            src={flechaAbajo}
                            alt="a"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                {activoParametro3 &&
                    <div className={` mt-[60px] w-[220px] z-50 absolute left-3/5 max-h-[120px] overflow-auto `}>
                                    
                        {filtrarEquiposDevs(parametros3)?.map((el)=>{
                            const {id, nombreEquipo} = el
                                return  (<button name='equipoId' onClick={()=>handleClickSelectForm3({id, nombreEquipo})} className='w-[200px] text-start cursor-pointer h-10 bg-white hover:bg-violet-200  pl-4' key={id}>
                                    {nombreEquipo}
                                        </button>)
                                        })}
                                </div>
                            
                            }
                    </article>
            }
            
            {/* EMAIL */}
            <InputFormulario
                texto = 'Email:'
                nombre = 'email'
                tipo = 'text'
                placeholder = 'juanitoxx@gmail.com'
                handleChangeAdmin={handleChangeAdmin}
                //usuarios={usuarioActualizado.email}
            />
            {/* PASSWORD */}
            <InputFormulario
                texto = 'Password:'
                nombre = 'password'
                tipo = 'password'
                placeholder = '************'
                handleChangeAdmin={handleChangeAdmin}
               // usuarios={usuarioActualizado?.password}
            />
            {/* CONFIRM PASSWORD */}
            <InputFormulario
                texto = 'Confirmar Password:'
                nombre = 'confirmPassword'
                tipo = 'password'
                placeholder = '************'
                handleChangeAdmin={handleChangeAdmin}
                //usuarios={usuarioActualizado?.password}
             />
            
        </div>
        
    </section>
</div>
<div className=' w-full h-[7%] grid  justify-items-end mt-[65px] text-tamañoLetraChica '>
    <div className='w-[450px] h-full  flex justify-center gap-x-2 '>
        <button name='actualizar' onClick={handleClickModalAdmin} className='  w-[150px] h-[100%] bg-colorBarraBaja hover:bg-violet-600 text-white rounded font-semibold'>
            Actualizar Usuario
        </button>
        <button name='cerrar' onClick={handleClickModalAdmin} className=' w-[70px] h-[100%] bg-colorBotonEliminar hover:bg-red-700 text-white rounded font-semibold'>
            Cerrar
        </button>
    </div>
</div>
<ModalAviso 
    isOpen = {activoModal}
    onClose = {()=>setActivoModal(false)}
    
/>
</form>
    </div>, document.body
  )
}

export default Modal