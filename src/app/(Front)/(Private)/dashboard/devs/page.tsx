
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

  if( user?.image === '47819f73-b315-4c21-aa84-c9933712e0dd' || 'a6d36fe0-a1c9-44d6-bea2-059a25dfbf8b' || 'b89a861c-eac2-4a7c-ba77-a158600fc173' || 'f98fe9f2-cc0d-4b76-a791-c662e761e447'){
    redirect('/dashboard/devs/backend')
  }else if(user?.image === '4c3b2677-3979-408b-b1c1-d6798b5aacbd' || '55cb8715-dc6d-40c7-be41-37de8860196e' || 'c68c3a9e-7146-4a53-8b4f-c8d239029842' || 'f47f135c-8ead-4d0c-b388-9706de017c3a'){
    redirect('/dashboard/devs/databases')
  }
  else if(user?.image === '6f0e1823-a1e2-479e-9330-d3c26fc94fbb' || 'db35be85-2841-4e1d-bddf-faf8a71752c1' || 'ee76d904-ebdc-41b7-ad70-fe05871ba5a5' || 'f7f163b5-0a7f-4501-a0c5-0dc16dd8edea'){
    redirect('/dashboard/devs/diseñador')
  }
  else if(user?.image === '1371ea6e-3190-422e-acb4-4a730aad4a84' || 'cf99fb8d-8019-4049-a25a-25f58d47a8c1' || 'de2cbe9d-4652-493c-aa49-dae39fd4731c' || 'e482ffa7-5211-4f86-b0e3-6a36efd9cfbf'){
    redirect('/dashboard/devs/frontend')
  }
  else if(user?.image === '577f83bd-4d56-4828-aa1b-c43a93867f05' || '8ae06ae4-db4e-4e55-9b64-961f88646def' || 'a3eccfe5-7a0c-4515-98f5-8a52433fb4cb' || 'd3c008fa-ad99-4c57-be14-3c9d239fb166'){
    redirect('/dashboard/devs/qualityAssurance')
  }
  else if(user?.image === '07400572-2505-4cd2-8b7a-1d2cc4e72e19' || '5d7166ff-5cba-40d3-ad9a-c751854dc50c' || '64cee918-df7a-497d-baf5-1e348e749ca3' || '713a2a60-a9b9-4c95-8cea-e45173dc64d5'){
    redirect('/dashboard/devs/sysAdmin')
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