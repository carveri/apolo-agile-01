import React from 'react'

const InputTabla = ({texto, nombre, tipo, placeholder}) => {
  return (
    <article className='grid grid-rows-2 pb-3'>
        <label  htmlFor="">{texto}</label>
        <input name={nombre} className="pl-3 py-4 rounded-md bg-white border border-gray-200   grid content-center" type={tipo} placeholder={placeholder}/>
    </article>
  )
}

export default InputTabla