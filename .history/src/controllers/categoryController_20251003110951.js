import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

//recuperer toutes les catégories
export const getCategory = async(req , res)=>{
    const category = await prisma.category.findMeny();
    res.category(json);

}

//créer une catégorie

