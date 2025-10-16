import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Recuperer ttes les transactions
export const getTransaction =async(req, res)=>{
    const transactions = await prisma.transaction.findMany({
        include: {user : true, category : true}
    });
    res.json(transactions);

}
