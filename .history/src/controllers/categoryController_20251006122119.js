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
        const {name} = req.body;
        
          if (!name) {
      return res.status(400).json({ error: "Le nom de la catégorie est requis." });
    }
        const newCategory = await prisma.category.create({
            data : {name},
            
        });
        res.status(201).json(newCategory);
    }catch (err){
          res.status(400).json({ error: "Impossible de créer la transaction", details: err });
    }
};

// Récupérer un utilisateur via ID
export const getCategoryById = async(req , res) =>{
  try{
  const category = await prisma.category.findUnique({
    where: {id: parseInt(req.params.id)},
  });
  if(!category){
    return res.status(404).json({error: "category non trouvé"});
  }
  res.json(category);
    }catch(err){

      res.status(500).json({error: "Erreur lors de la récupération de la catégorie"})

    }
}

