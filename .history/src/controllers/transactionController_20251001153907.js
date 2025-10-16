import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Recuperer ttes les transactions
export const getTransaction =async(req, res)=>{
    const transaction = await prisma.transaction.findMany();
    res.json(transaction);

}
