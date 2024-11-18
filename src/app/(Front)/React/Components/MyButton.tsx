'use client'

const MyButton = ({colores, bgColor,  texto, ancho, alto, hover, nombreBoton}) => {

  const handleClickMyBoton =(e)=>{
    if(e.target.name === 'botonIngresar'){
      console.log('soy el de ingresar');
    }
    else if(e.target.name === 'botonPrueba'){
      console.log('soy el bot de prueba');
      
    }
   
    
  }

  console.log('color:', colores);
  console.log('bg:', bgColor);
  
  
  
  //console.log(typeof(#900c0c));
  return (
    <button style={{background: bgColor, color: colores}}  name={nombreBoton} onClick={handleClickMyBoton} className={` w-[${ancho}] h-[${alto}] rounded font-semibold`} >
      {texto}
    </button>
  )
}

export default MyButton