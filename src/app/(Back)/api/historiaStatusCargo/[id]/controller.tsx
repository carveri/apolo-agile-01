
import prisma from "@/libs/prisma"
import { NextRequest, NextResponse } from "next/server";

class HistoriaStatusCargo {
    
    // metodo get
    // el param es el status
    getHistoriaStatusCargo = async(req:NextRequest)=>{
        const url = new URL(req.url)

        const userId = url.searchParams.get("id")
        const status = url.searchParams.get("status")
        console.log(userId, status);
        }
    }

   


export const historiaStatusCargo = new HistoriaStatusCargo()