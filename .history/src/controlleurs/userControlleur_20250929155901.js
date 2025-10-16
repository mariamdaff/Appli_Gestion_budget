import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async(req, res )=>{
    const users = await prisma.user.findMany();
    res.json(users);
}

// Créer un utilisateur
export const createUsers = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Impossible de créer l’utilisateur", details: err });
  }
};

// Récupérer un utilisateur précis
export const getUerById = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }
  res.json(user);
};

// Supprimer un utilisateur
export const deleteUser = async (req, res) => {
  try {
    const userId = await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Utilisateur supprimé" });
  } catch (err) {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
};