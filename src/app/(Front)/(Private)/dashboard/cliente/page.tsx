
import { getServerSession } from "next-auth/next";
import { authOptions } from '@/app/(Back)/api/auth/[...nextauth]/route';

import { redirect } from "next/navigation";


const page = async() => {

    const session = await getServerSession(authOptions)
   // validacion
   if(!session){
    redirect('/api/auth/signin')
  }
  //console.log(user);
  
  const {user}= session
  console.log('userPagPivoteCliente2222:', user);

  
  // user.image es el cargoId

  // const com = '1b16b7b1-df3f-4242-853c-8f12999bb2b8'
  // const fin = '78509248-2aea-47a3-a4d2-68e210b270cd'
  // const mar = 'b0665e7d-e4ca-4036-980a-0b22434422dd'
  // const rec = '658ae10d-5016-48a6-90bf-f2e562fa2bee'
  // const tec = '447ab6a5-a1c3-4ca9-9de5-ac00f5ecc6bc'

  if( user?.image === '1b16b7b1-df3f-4242-853c-8f12999bb2b8'){
    redirect('/dashboard/cliente/comercial')
  }else if(user?.image === '78509248-2aea-47a3-a4d2-68e210b270cd'){
    redirect('/dashboard/cliente/finanzas')
  }
  else if(user?.image === 'b0665e7d-e4ca-4036-980a-0b22434422dd'){
    redirect('/dashboard/cliente/marketing')
  }
  else if(user?.image === '658ae10d-5016-48a6-90bf-f2e562fa2bee'){
    redirect('/dashboard/cliente/recursosHumanos')
  }
  else if(user?.image === '447ab6a5-a1c3-4ca9-9de5-ac00f5ecc6bc'){
    redirect('/dashboard/cliente/tecnico')
  }
  else{
    redirect('/api/auth/login')
    
  }
    

  return (
    <>
      <div className="w-full h-12">
        
      </div>
    </>
)}

export default page