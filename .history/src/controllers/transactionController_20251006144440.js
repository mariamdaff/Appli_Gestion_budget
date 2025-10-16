import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//Recuperer ttes les transactions
export const getTransaction =async(req, res)=>{
    try{
         const transactions = await prisma.transaction.findMany({
        include: {user : true, category : true}
    });
    res.json(transactions);
    }catch (err) {
        console.error(err); // pour debug
    res.status(500).json({ error: "Erreur serveur lors de la récupération des transactions" });

    }
}

// Créer un utilisateur
export const createTransaction = async(req, res)=>{
    try{
        const {title,amount,type, userId, categoryId} = req.body;
        if (!title || !amount || !type || !userId || !categoryId) {
    return res.status(400).json({ message: "Tous les champs sont requis." });
  }
        const newTransaction = await prisma.transaction.create({
            data: {title, amount, type, userId, categoryId},
        });
        res.status(201).json(newTransaction);
    }catch(err){
        res.status(400).json({error: "Impossible de créer la transaction", detais: err})
    }
}
