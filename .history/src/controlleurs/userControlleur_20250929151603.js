import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUsers = async(req, res )=>{
    const users = await prisma.user.findMany();
    res.json(users);
}

// Créer un utilisateur
export const postUsers = async (req, res) => {
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