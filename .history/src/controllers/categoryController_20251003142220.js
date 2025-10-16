import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//recuperer toutes les catégories
export const getCategory = async (req, res) => {
  //try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  //} catch (err) {
   // res.status(500).json({ error: "Erreur lors de la récupération des catégories" });
  //}
};

//créer une catégorie

