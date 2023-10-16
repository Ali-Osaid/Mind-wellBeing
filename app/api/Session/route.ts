import { NextResponse } from "next/server";
import { FormDataType } from "@/Types/Types";

export async function POST(request:Request){
    try {
        const payload:FormDataType = await request.json()
         
        const data = await prisma?.session.create({data:{
            duration:payload.duration,
            email:payload.email,
            phoneNumber:payload.phoneNumber,
            Time:payload.Time,
            typeOfTherapy:payload.typeOfTherapy,
            username:payload.username
        }})
    } catch (error:any) {
       return NextResponse.json({message:error.message})    
    }

}