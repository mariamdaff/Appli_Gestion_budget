// src/index.js
import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json()); // pour lire le JSON dans les requêtes

//route test
app.get("/", (req, res) => {
 res.send("Bienvenue dans l'API de gestion de budget 🚀");
});

// route pour voir tous les utilisateurs
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Créer un utilisateur
app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: "Impossible de créer l’utilisateur", details: err });
  }
});

// Récupérer un utilisateur précis
app.get("/users/:id", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: parseInt(req.params.id) },
  });
  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }
  res.json(user);
});

// Supprimer un utilisateur
app.delete("/users/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Utilisateur supprimé" });
  } catch (err) {
    res.status(404).json({ error: "Utilisateur non trouvé" });
  }
});


// serveur qui écoute sur le port 3000
app.listen(3000, () => {
  console.log("Serveur en ligne sur http://localhost:3000");
});
