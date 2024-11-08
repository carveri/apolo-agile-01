import Image from "next/image";
import logoLoading from './../../React/Assets/Icons/loading.png'

const loading = () => {
  return (
    <div className='w-screen h-screen grid place-items-center '>
      <section>
          <Image
          
          src={logoLoading}
          alt="sd"
          width={80}
          height={80}
        />
        <div className="mt-4">
          Cargando...
        </div>
      </section>
    </div>
  )
}

export default loading