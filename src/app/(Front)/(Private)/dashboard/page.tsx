
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
  // user.name es el areaId

  if(user?.name === 'a73e8ba6-6e6b-4cd7-90a4-925101ea7ffa'){
    redirect('/dashboard/sm')
  }else if(user?.name === '2cbca9d4-f9c2-4f8e-a8e3-a04212e901d6'){
    redirect('/dashboard/po')
  }
  else if(user?.name === '8bf1bf40-b55e-4000-a0c5-8e1b8e0ba477'){
    redirect('/dashboard/admin')
  }
  else if(user?.name === '12b87914-ed8c-4411-931e-7b9b567d7117'){
    redirect('/dashboard/cliente')
  }
  else if(user?.name === '68b9247a-5884-46e7-a66f-3341b640469b'){
    redirect('/dashboard/devs')
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