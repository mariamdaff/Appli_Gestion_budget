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
        console.error(err);
    res.status(500).json({ error: "Erreur serveur lors de la récupération des transactions" });

    }
}

// Créer une transaction
export const createTransaction = async (req, res) => {
  try {
    let { title, amount, type, date, userId, categoryId } = req.body;
    if (!title || !amount || !type || !date|| !userId || !categoryId ) {
      return res.status(400).json({ message: "Tous les champs sont requis." });
    }
    type = type.toUpperCase();
    if (!["INCOME", "EXPENSE"].includes(type)) {
      return res.status(400).json({ message: "Type invalide : INCOME ou EXPENSE attendu." });
    }
    const newTransaction = await prisma.transaction.create({
      data: {
        title,
        amount: Number(amount),   
        type,
        date: date ? new Date(date) : new Date(), 
        userId: Number(userId),
        categoryId: Number(categoryId), 
      },
    });

    res.status(201).json(newTransaction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible de créer la transaction", details: err });
  }
};

// Récupérer une transaction via ID
export const getTransactionById = async(req, res)=>{
    try {
        const transaction = await prisma.transaction.findUnique({
        where: {id: parseInt(req.params.id)},
    });
      res.json(transaction)
}catch (error) {
      res.status(404).json({error: "Transaction non trouvé"});  
    }
}  

// Mettre à jour une transaction
export const updateTransaction = async(req, res)=>{
try {
    const {title, amount, type, date, userId, categoryId } =req.body
    const updatedtransaction = await prisma.transaction.update({
        where: {id: parseInt(req.params.id)},
        data: req.body,
    });
    res.json(updatedtransaction)
    
} catch (error) {
     res.status(404).json({error:"Transaction non trouvée"});
    
    }
}

// Supprimer une transaction
export const deleteTransaction = async(req, res)=>{
  try {
    const transactionId = await prisma.transaction.delete({
      where: {id: parseInt(req.params.id) },
    });
    
  } catch (error) {
    
  }
}
