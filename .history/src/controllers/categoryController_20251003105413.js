import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();
export const getCategory = async(req , res)=>{
    const category = await prisma.category.findMeny();
    res.category(json);
    
}