

const MyButton = ({dataBoton}) => {

  console.log(dataBoton);

  const {color, texto, funcionalidad} = dataBoton
  console.log(color);
  //console.log(typeof(#900c0c));
  
  

  return (

    

    <button className={`bg-[${color}]`}>
      {texto}
    </button>
  )
}

export default MyButton