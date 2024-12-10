import { logicaTraerIdYres } from "../[Funciones]/logicaTraerIdYRes";
import ComPoProductBacklog from "./components/ComPoProductBacklog";

const page = async() => {

  const {id, res}= await logicaTraerIdYres()

  return (
    <ComPoProductBacklog
    
      id={id}
      resul={res}
    />
  )
}

export default page