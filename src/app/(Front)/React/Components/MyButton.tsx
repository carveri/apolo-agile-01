'use client'

const MyButton = ({dataBoton}:any, handleClickBoton) => {

  console.log(dataBoton);

  const {color, texto, funcionalidad} = dataBoton
  console.log(color);
  console.log(`bg-${color}`);

  const colorcito ='#03ff57'
  
  //console.log(typeof(#900c0c));
  return (
    <button onClick={handleClickBoton} className={`bg-[${colorcito}]`}>
      {texto}
    </button>
  )
}

export default MyButton