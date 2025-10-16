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

// Récupérer un utilisateur via ID
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

