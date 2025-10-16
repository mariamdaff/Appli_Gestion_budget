import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//recuperer toutes les catégories
export const getCategory = async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des catégories" });
  }
};

//créer une catégorie
export const createCategory = async(req, res) =>{
    try{
        const newCategory = await prisma.cayegory.create({
            data : {name},
        });
        res.status(201).json(newCategory);
    }catch (err){
          res.status(400).json({ error: "Impossible de créer la transaction", details: err });
    }
};

