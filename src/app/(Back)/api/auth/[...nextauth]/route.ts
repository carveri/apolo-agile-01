import NextAuth from "next-auth/next"
import type { AuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";
import prisma from "@/libs/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,

    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Contraseña", type: "password", placeholder: "***********" },
            //empresa : {label: 'empresa', type: "text"}
          },
          async authorize(credentials:any, req:any) {
            
            const userFound:any = await prisma.user.findUnique({
              where: {
                email: credentials?.email
              },include:{
                cargo:{
                  include:{
                    departamento:{
                      include:{
                        area:{
                          select:{
                            nombreArea: true
                          }
                        }
                      }
                    }
                  }
                }
              }
              
            
            
            
              
            })
            if(!userFound) return null
            //console.log('df', userFound);
            
            const matchpassword = await bcrypt.compare(credentials?.password, userFound?.password)
            if(!matchpassword) return null
            //console.log('usuarioEncontrado:', userFound);
            
            return {
              id: userFound.id,
              name: userFound?.cargo?.departamento?.areaId,
              email: userFound.email,
              //cosa: 'olis'
              //empresa: userFound.empresa,
              //cargo: 'sdsd'
            }
          }
        })
        
        
      ],
      pages: {
        signIn: "/api/auth/login",
        signOut: "/sign-out"
      },
      session: {
        strategy: 'jwt'
      },
      callbacks:{
        async signIn({user, account, profile, email, credentials}){
          return true
        },

        async jwt({ token, user, account, profile }){
          
          const dbUser = await prisma.user.findUnique({
            where:{
              email: token.email ?? 'No hay email'
            }
          })
          if(dbUser?.isActive === false){
            throw Error('El usuario no esta activo!!')
          }

          token.id = dbUser?.id ?? 'no-uuid'
          
          return token
        },
        async session({ session, token, user }){

          if(session && session.user){
            session.user.id = token.id
          }
          return session
        }
      }
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST}

//export default NextAuth(authOptions)