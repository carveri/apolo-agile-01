import iconoStar from "./../../Assets/Icons/star.png";
import Image from "next/image";

const Star = () => {
  return (
    <Image
        src={iconoStar}
        width={20}
        height={20}
        alt="as"
    />
  )
}

export default Star