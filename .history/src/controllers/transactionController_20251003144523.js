import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Recuperer ttes les transactions
export const getTransaction =async(req, res)=>{
    try{
         const transactions = await prisma.transaction.findMany({
        include: {user : true, category : true}
    });
        if (transactions.length === 0) {
      return res.status(404).json({ message: "Aucune transaction trouvée" });
    }
    res.json(transactions);
    }catch (err) {
        console.error(err); // pour debug
    res.status(500).json({ error: "Erreur serveur lors de la récupération des transactions" });

    }
   

}
