import iconoLoading from "../../../React/Assets/Icons/iconoLoading.png";
import Image from "next/image";

const loading = () => {
  return (
    <div className="w-full h-[810px] bg-gray-100 grid place-content-center">
      <Image
        className="animate-spin"
        width={60}
        height={60}
        src={iconoLoading}
        alt="sd"
      />
      <div className="mt-3 text-lg">
        Cargando...
      </div>
    </div>
    )
}

export default loading