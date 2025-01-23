
const InputFormulario = ({texto, nombre, tipo, placeholder, handleChangeAdmin}) => {
  
  //console.log('usuarios;', usuarios);
  
  
  
  return (
    <article className='grid grid-rows-2 pb-3'>
        <label  htmlFor="">{texto}</label>
        <input onChange={handleChangeAdmin} name={nombre} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type={tipo} placeholder={placeholder}/>
    </article>
  )
}

export default InputFormulario